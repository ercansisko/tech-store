import styled from "styled-components";
import CartButtons from "../cart/CartButtons";

const ProductInformation = styled.div`
  padding-right: 5rem;
`;
const InformationRow = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-bottom: 1px dotted var(--color-grey-300);
  & span {
    margin-left: 0.5rem;
  }
  min-width: 13rem;
`;
function DetailInformation({ product }) {
  return (
    <ProductInformation>
      <h4>{product.productname.toUpperCase()}</h4>
      <InformationRow>
        <b>Türü:</b>
        <span>{product.type}</span>
      </InformationRow>
      <InformationRow>
        <b>Modeli:</b>
        <span>{product.brand}</span>
      </InformationRow>
      <InformationRow>
        <b>Etiket</b>
        <span>Lorem ipsum dolor</span>
      </InformationRow>
      <InformationRow>
        <b>Etiket:</b>
        <span>Lorem, ipsum dolor.</span>
      </InformationRow>
      <InformationRow>
        <b>Etiket:</b>
        <span>Lorem, ipsum dolor.</span>
      </InformationRow>
      <InformationRow>
        <b>Etiket:</b>
        <span>Lorem, ipsum dolor.</span>
      </InformationRow>
      <CartButtons product={product} />
    </ProductInformation>
  );
}

export default DetailInformation;
