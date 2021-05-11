import { Search } from "@/components/Search";
import { Main } from "@/components/Main";
import { Left, Rigth } from "@/components/Main/Main.styles";
import { Location } from "@/components/Location";
import { Jobs } from "@/components/Jobs";

export default function Home() {
  return (
    <>
      <Search />
      <Main>
        <Left>
          <Location />
        </Left>
        <Rigth>
          <Jobs />
          <Jobs />
          <Jobs />
          <Jobs />
          <Jobs />
          <Jobs />
        </Rigth>
      </Main>
    </>
  );
}
