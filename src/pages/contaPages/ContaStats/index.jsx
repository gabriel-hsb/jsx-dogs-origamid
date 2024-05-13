import { useEffect, useState } from "react";
import { VictoryPie, VictoryChart, VictoryBar } from "victory";

import useFetch from "../../../scripts/hooks/useFetch";
import { STATS_GET } from "../../../scripts/apiBackend";

import LoadingAnimatedSvg from "../../../components/LoadingAnimatedSvg";
import DangerText from "../../../components/text/DangerText";

import * as S from "./ContaStats.Styles";

const ContaStats = () => {
  const [graph, setGraph] = useState([]);
  const [totalAccess, setTotalAccess] = useState(0);

  // start fetch for stats
  const { data, isFetching, error, request } = useFetch();
  useEffect(() => {
    async function getStats() {
      const { url, options } = STATS_GET();
      request(url, options);
    }
    getStats();
  }, []);
  // end fetch for stats

  // start fetch for user photos
  useEffect(() => {
    if (data && data.length >= 1) {
      const graphData = data.map((photo) => {
        return {
          x: photo.title,
          y: Number(photo.acessos),
        };
      });

      setGraph(graphData);

      console.log(graphData);

      // tries to some result only if has some posted photo
      setTotalAccess(
        data
          .map((photo) => {
            return Number(photo.acessos);
          })
          .reduce((acc, access) => {
            return acc + access;
          }, 0)
      );
    }
  }, [data]);
  // end fetch for user photos

  if (isFetching) return <LoadingAnimatedSvg />;
  if (error) return <DangerText> Erro. </DangerText>;
  if (data && data.length >= 1)
    return (
      <S.ContaStatsContainer className="animeLeft">
        <S.AccessTotal>
          <h2>
            Suas fotos tiveram <b>{totalAccess} acessos</b>
          </h2>
        </S.AccessTotal>
        <S.GraphsContainer>
          <S.Graph>
            <VictoryPie
              data={graph}
              innerRadius={50}
              padding={{ top: 20, bottom: 20, left: 80, height: 80 }}
              style={{
                data: {
                  fillOpacity: 0.9,
                  stroke: "#fff",
                  strokeWidth: 2,
                },
                labels: {
                  fontSize: 14,
                  fill: "#333",
                },
              }}
            />
          </S.Graph>

          <S.Graph>
            <VictoryChart>
              <VictoryBar alignment="start" data={graph} />
            </VictoryChart>
          </S.Graph>
        </S.GraphsContainer>
      </S.ContaStatsContainer>
    );
  else return null;
};

export default ContaStats;
