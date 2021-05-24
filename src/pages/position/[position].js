import axios from "axios";
import { useState, useEffect } from "react";
import { Main } from "@/components/Main";
import { Detail } from "@/components/Detail";
import { Loading } from "@/components/Loading";
import { Left, Rigth } from "@/components/Main/Main.styles";

const Position = ({ idPosition }) => {
  const [dataPosition, setDataPosition] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(async () => {
    setIsLoading(true);
    try {
      await axios
        .get(
          `https://api.allorigins.win/raw?url=https://jobs.github.com/positions/${idPosition}.json`
        )
        .then(({ data }) => {
          setDataPosition(data);
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, []);

  return (
    <Main>
      {isLoading ? (
        <>
          <Left></Left>
          <Rigth>
            <Loading />
          </Rigth>
        </>
      ) : (
        dataPosition && <Detail data={dataPosition} />
      )}
    </Main>
  );
};

Position.getInitialProps = (ctx) => {
  return {
    idPosition: ctx.query.position,
  };
};

export default Position;
