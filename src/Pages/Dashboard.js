import styled from "styled-components";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import ProductBar from "../features/dashboard/ProductBar";
const StyledDashboard = styled.div`
  display: grid;
  grid-template-columns: 30rem 1fr;
`;
function Dashboard() {
  return (
    <StyledDashboard>
      <ProductBar />
      <DashboardLayout />
    </StyledDashboard>
  );
}

export default Dashboard;
