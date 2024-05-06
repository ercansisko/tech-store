import styled from "styled-components";

const ImageContainer = styled.div`
  /* width: 50%; */
  aspect-ratio: 1;
  max-width: 30rem;
  min-width: 15rem;
  & img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: contain;
    border-radius: 5%;
  }
`;
function DetailImage({ image, productname }) {
  return (
    <ImageContainer>
      <img src={image} alt={productname} />
    </ImageContainer>
  );
}

export default DetailImage;
