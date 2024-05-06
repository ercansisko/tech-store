import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import styled from "styled-components";
const StyledApp = styled.div`
  height: 100vh;
  & main {
    height: 100%;
    margin-top: 4rem;
  }
`;
function AppLayout() {
  return (
    <StyledApp>
      <Nav />
      <main>
        <Outlet />
      </main>
    </StyledApp>
  );
}

export default AppLayout;
