import styled from "styled-components";
import { useLogout } from "./useLogout";
import { useEffect } from "react";

const StyledLogOut = styled.button`
  position: absolute;
  top: 0;
  right: 0;
`;
function LogOut() {
  const { mutate: logout, isLoading } = useLogout();

  return (
    <StyledLogOut
      onClick={() => {
        logout();
      }}
    >
      Çıkış yap
    </StyledLogOut>
  );
}

export default LogOut;
