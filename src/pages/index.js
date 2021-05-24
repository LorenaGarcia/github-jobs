import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Search } from "@/components/Search";
import { Main } from "@/components/Main";
import { Left, Rigth } from "@/components/Main/Main.styles";
import { Location } from "@/components/Location";
import { Jobs } from "@/components/Jobs";
import { Pagination } from "@/components/Pagination";
import { Loading } from "@/components/Loading";
import { Message } from "@/components/Message";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [searchWord, setSearchWord] = useState("");
  const [fullTime, setFullTime] = useState(false);
  const [message, setMessage] = useState(null);
  const [page, setPage] = useState(1);
  const [jobs, setJobs] = useState([]);
  const [city, setCity] = useState("");

  useEffect(() => {
    positionsWorld();
  }, []);

  useEffect(() => {
    SearchPosition(city);
  }, [fullTime]);

  const positionsWorld = async () => {
    setIsLoading(true);
    try {
      await axios
        .get(
          `https://api.allorigins.win/raw?url=https://jobs.github.com/positions.json?page=${page}`
        )
        .then((res) => {
          setJobs(res.data);
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const SearchPosition = async (name) => {
    setPage(1);
    setMessage(null);
    setIsLoading(true);
    try {
      console.log("aqui", name);
      setCity(name ? name : "");

      const { data } = await axios.get(
        `https://api.allorigins.win/raw?url=https://jobs.github.com/positions.json?${
          name ? "location=" + name : city ? "location=" + city + "&" : ""
        }${searchWord && "description=" + searchWord + "&"}${
          fullTime ? "full_time=true&" : ""
        }page=${page}`
      );
      setJobs(data);
      setMessage(data.length === 0 && "No results found in this location :(");
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const morePositions = async (left) => {
    if (
      (jobs.length === 50 && left !== "left") ||
      (left === "left" && page > 1)
    ) {
      setIsLoading(true);
      let temp = 1;
      if (left === "left" && page > 1) {
        temp = page - 1;
      } else if (left !== "left") {
        temp = page + 1;
      }

      setMessage(null);
      setPage(temp);
      try {
        const { data } = await axios.get(
          `https://api.allorigins.win/raw?url=https://jobs.github.com/positions.json?${
            city ? "location=" + city + "&" : ""
          }${searchWord && "description=" + searchWord + "&"}${
            fullTime ? "full_time=true&" : ""
          }page=${temp}`
        );
        setJobs(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <Search
        setSearchWord={setSearchWord}
        searchWord={searchWord}
        SearchPosition={SearchPosition}
        city={city}
      />
      <Main>
        <Left>
          <Location
            city={city}
            setCity={setCity}
            setFullTime={setFullTime}
            fullTime={fullTime}
            SearchPosition={SearchPosition}
          />
        </Left>
        {isLoading ? (
          <Rigth>
            <Loading />
          </Rigth>
        ) : (
          <Rigth>
            {jobs[0] &&
              jobs.map((value, index) => <Jobs key={index} data={value} />)}
            {message && <Message text={message} />}
            {jobs.length === 50 || page > 1 ? (
              <Pagination page={page} morePositions={morePositions} />
            ) : (
              ""
            )}
          </Rigth>
        )}
        <ul id="infinite-list"></ul>
      </Main>
    </>
  );
}
