import { useState, useEffect } from "react";
import axios from "axios";
import { Search } from "@/components/Search";
import { Main } from "@/components/Main";
import { Left, Rigth } from "@/components/Main/Main.styles";
import { Location } from "@/components/Location";
import { Jobs } from "@/components/Jobs";
import { Loading } from "@/components/Loading";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [jobs, setJobs] = useState({});

  useEffect(async () => {
    setIsLoading(true);
    try {
      await axios
        .get(
          `https://api.allorigins.win/raw?url=https://jobs.github.com/positions.json`
        )
        .then((res) => {
          setJobs(res.data);
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      <Search />
      <Main>
        <Left>
          <Location />
        </Left>
        <Rigth>
          {isLoading ? (
            <Loading />
          ) : (
            jobs[0] &&
            jobs.map((value, index) => <Jobs key={index} data={value} />)
          )}
        </Rigth>
      </Main>
    </>
  );
}
