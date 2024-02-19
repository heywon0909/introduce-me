import { Outlet } from "react-router";
import * as S from "./styled";
import { useState } from "react";
import Header from "@components/header/Header";
import Nav from "@components/nav/Nav";

export default function Root() {
  const [hover, setHover] = useState(false);
  const handleHover = (flg: boolean) => setHover(flg);

  return (
    <S.Container>
      <Header />
      <Nav hover={hover} handleHover={handleHover} />
      <Outlet />
    </S.Container>
  );
}
