import styled from "styled-components";
import ButtonIcon from "./ButtonIcon";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
const StyledPagination = styled.div`
  margin: 2rem auto 5rem;
  width: 40%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
function Pagination({ totalSize, pageSize }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const lastPage = Math.ceil(totalSize / pageSize);
  if (totalSize <= pageSize) return null;
  const pageNum = Number(searchParams.get("page")) || 1;
  const prevPage = () => {
    if (pageNum === 1) return;
    searchParams.set("page", pageNum - 1);
    setSearchParams(searchParams);
  };

  const nextPage = () => {
    if (pageNum === lastPage) return;
    searchParams.set("page", pageNum + 1);
    setSearchParams(searchParams);
  };
  return (
    <StyledPagination>
      <ButtonIcon icon={<HiArrowLeft />} onClick={prevPage} />
      <p>
        <em>{totalSize}</em> üründen{" "}
        <em>{pageNum === lastPage ? totalSize % pageSize : pageSize}</em> adet
        gösteriliyor(
        {(pageNum - 1) * pageSize + 1}-
        {pageNum === lastPage ? totalSize : pageSize * pageNum})
      </p>
      <ButtonIcon icon={<HiArrowRight />} onClick={nextPage} />
    </StyledPagination>
  );
}

export default Pagination;
