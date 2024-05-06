import styled from "styled-components";
import Button from "../../ui/Button";
import SpinnerMini from "../../ui/SpinnerMini";
import { useAddProduct } from "./useAddProduct";
import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import LogOut from "../authentication/LogOut";
const Container = styled.div`
  position: relative;
`;
const FormContainer = styled.div`
  width: 70%;
  margin: 10rem auto;
  background: var(--color-grey-100);
  height: 40rem;
  padding: 3rem;
`;
const Form = styled.form`
  height: 100%;
  display: grid;
  grid-template-rows: 0.5fr 1fr 1fr 1fr 1fr 1.5fr 1fr 1fr;
  & h3 {
    margin: 0;
    padding: 0;
    text-align: center;
  }
  & button {
    margin: 1rem 20%;
  }
`;

function DashboardLayout() {
  const { mutate, isAdding } = useAddProduct();
  const { register, handleSubmit, reset } = useForm();
  const submit = (data) => {
    const product = {
      type: data.type,
      brand: data.brand,
      productname: data.productname,
      stock: data.stock,
      price: data.price,
      description: data.description,
      image: data.image[0],
    };
    mutate(product, {
      onSuccess: () => {
        reset();
      },
    });
  };
  console.log(isAdding);
  return (
    <Container>
      <FormContainer>
        <Form onSubmit={handleSubmit(submit)}>
          <h3>Ürün Ekle</h3>
          <FormRow>
            <label htmlFor="type">Tür</label>
            <input type="text" id="type" name="type" {...register("type")} />
          </FormRow>
          <FormRow>
            <label htmlFor="brand">Marka</label>
            <input type="text" id="brand" name="brand" {...register("brand")} />
          </FormRow>
          <FormRow>
            <label htmlFor="productname">ürün adı</label>
            <input
              type="text"
              id="productname"
              name="productname"
              {...register("productname")}
            />
          </FormRow>
          <FormRow>
            <label htmlFor="stock">stok adedi</label>
            <input
              type="number"
              id="stock"
              name="stock"
              {...register("stock")}
            />
          </FormRow>
          <FormRow>
            <label htmlFor="price">Fiyat</label>
            <input
              type="number"
              id="price"
              name="price"
              {...register("price")}
            />
          </FormRow>
          <FormRow>
            <label htmlFor="description">ürün açıklaması</label>
            <textarea
              id="description"
              name="description"
              {...register("description")}
            />
          </FormRow>
          <FormRow>
            <label htmlFor="image">Resim</label>
            <input
              type="file"
              accept="image/*"
              id="image"
              name="image"
              {...register("image")}
            />
          </FormRow>

          <Button disabled={isAdding} color="blue">
            {isAdding ? "Ekleniyor" : "Ürün ekle"}
          </Button>
        </Form>
      </FormContainer>
      <LogOut />
    </Container>
  );
}

export default DashboardLayout;
