import { useEffect } from "react";
import { useUser } from "../features/authentication/useUser";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Spinner from "./Spinner";
const FullPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function ProtectedRoute({ children }) {
  const { user, isLoading } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.aud !== "authenticated" && !isLoading) navigate("/login");
  }, [user, isLoading, navigate]);
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  return children;
}

export default ProtectedRoute;
