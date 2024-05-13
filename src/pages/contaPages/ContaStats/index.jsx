import { useEffect, useState, lazy, Suspense } from "react";

import { Link } from "react-router-dom";

import useFetch from "../../../scripts/hooks/useFetch";
import { STATS_GET } from "../../../scripts/apiBackend";

import LoadingAnimatedSvg from "../../../components/LoadingAnimatedSvg";
import DangerText from "../../../components/text/DangerText";
import TextUnderline from "../../../components/text/TextUnderline";

import * as S from "./ContaStats.Styles";

const LazyVictoryPie = lazy(() =>
  import("victory").then((module) => ({ default: module.VictoryPie }))
);
const LazyVictoryChart = lazy(() =>
  import("victory").then((module) => ({ default: module.VictoryChart }))
);
const LazyVictoryBar = lazy(() =>
  import("victory").then((module) => ({ default: module.VictoryBar }))
);

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

  if (data && data.length >= 1 && totalAccess === 0)
    return <S.NoAccess>Suas fotos ainda não tiverem acessos</S.NoAccess>;

  if (data && data.length >= 1 && totalAccess >= 1)
    return (
      <S.ContaStatsContainer className="animeLeft">
        <S.AccessTotal>
          <h2>
            {totalAccess === 1 && "Suas fotos tiveram um acesso"}

            {totalAccess >= 2 && `Suas fotos tiveram ${totalAccess} acessos`}
          </h2>
        </S.AccessTotal>

        <Suspense fallback={<LoadingAnimatedSvg />}>
          <S.GraphsContainer>
            <S.Graph>
              <LazyVictoryPie
                colorScale={["#ffbb11", "#6DB65B", "#4AAE9B", "#333"]}
                data={graph}
                innerRadius={50}
                padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
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

            <S.Graph className="bar">
              <LazyVictoryChart>
                <LazyVictoryBar
                  style={{ data: { fill: "#ffbb11" } }}
                  alignment="start"
                  data={graph}
                />
              </LazyVictoryChart>
            </S.Graph>
          </S.GraphsContainer>
        </Suspense>
      </S.ContaStatsContainer>
    );

  if (data && data < 1)
    return (
      <S.NotPostedYet>
        Você ainda não postou nenhuma foto
        {/* TODO: add space between words */}
        {
          <Link to="/conta/postar">
            <TextUnderline>Postar Foto</TextUnderline>
          </Link>
        }
      </S.NotPostedYet>
    );
  else return null;
};

export default ContaStats;
