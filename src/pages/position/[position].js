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

  const daysAgo = (created) => {
    if (typeof window !== "undefined" && created) {
      var options = { year: "numeric", month: "2-digit", day: "2-digit" };
      var endDate = new window.Date().toLocaleDateString("en-EN", options);
      var startDate = new window.Date(
        Intl.DateTimeFormat("en-EN", options).format(new window.Date(created))
      );
      var diff = new window.Date(endDate).getTime() - startDate.getTime();

      return diff / (1000 * 60 * 60 * 24) + " days ago";
    }
  };

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
        dataPosition && <Detail daysAgo={daysAgo} data={dataPosition} />
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
