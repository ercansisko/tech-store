import styled from "styled-components";
import BackButton from "../../ui/BackButton";

const ProductExplanation = styled.div`
  grid-column: 1/-1;
  & h4 {
    margin: 0.5rem 0.5rem;
  }
  & p {
    margin: 0.5rem 0.5rem;
  }
`;
const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
function DetailExplanation({ description }) {
  return (
    <ProductExplanation>
      <h4>Ürün Açıklaması</h4>
      <p>
        <em>{description}</em>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
        harum quibusdam accusamus error quisquam voluptatibus quas fugiat libero
        tempore maiores tenetur nostrum necessitatibus quae dolore iusto
        aspernatur, dolor vero ea?Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Voluptatum harum quibusdam accusamus error quisquam
        voluptatibus quas fugiat libero tempore maiores tenetur nostrum Lorem
        ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum harum
        quibusdam accusamus error quisquam voluptatibus quas fugiat libero
        tempore maiores tenetur nostrum necessitatibus quae dolore iusto
        aspernatur, dolor vero ea?Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Voluptatum harum quibusdam accusamus error quisquam
        voluptatibus quas fugiat libero tempore maiores tenetur nostrum Lorem
        ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum harum
        quibusdam accusamus error quisquam voluptatibus quas fugiat libero
        tempore maiores tenetur nostrum necessitatibus quae dolore iusto
        aspernatur, dolor vero ea?Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Voluptatum harum quibusdam accusamus error quisquam
        voluptatibus quas fugiat libero tempore maiores tenetur nostrum
      </p>
      <Footer>
        <BackButton />
      </Footer>
    </ProductExplanation>
  );
}

export default DetailExplanation;
