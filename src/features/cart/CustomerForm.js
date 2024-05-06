import styled from "styled-components";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import { useAddOrder } from "./useAddOrder";
import FormRow from "../../ui/FormRow";
import { useShopping } from "../../contexts/ShoppingContext";
import { useNavigate } from "react-router-dom";
const StyledCustomerForm = styled.form`
  margin-top: 5rem;
  & h3 {
    text-align: center;
  }
  line-height: 2rem;
`;
const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
function CustomerForm({ setCustomerSession }) {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { cart, deleteAll } = useShopping();
  const { orderFn } = useAddOrder();
  const submit = (orderObj) => {
    orderFn(
      { orderObj, cart },
      {
        onSuccess: (orderData) => {
          navigate(`/orders/${orderData.id}`);
          deleteAll();
        },
      }
    );
  };
  return (
    <StyledCustomerForm onSubmit={handleSubmit(submit)}>
      <h3>Kişi bilgileri</h3>
      <FormRow>
        <label htmlFor="fullname">İsim Soyisim</label>
        <input
          type="text"
          id="fullname"
          name="fullname"
          {...register("fullname", { required: true })}
        />
      </FormRow>
      <FormRow>
        <label htmlFor="address">Adres</label>
        <input
          type="text"
          id="address"
          name="address"
          {...register("address", { required: true })}
        />
      </FormRow>
      <FormRow>
        <label htmlFor="phonenumber">telefon numarası</label>
        <input
          type="text"
          id="phonenumber"
          name="phonenumber"
          {...register("phonenumber", { required: true })}
        />
      </FormRow>
      <Buttons>
        <div></div>
        <Button color="blue">Sipariş ver</Button>
        <Button
          type="reset"
          color="grey"
          onClick={() => setCustomerSession(false)}
        >
          Geri
        </Button>
      </Buttons>
    </StyledCustomerForm>
  );
}
export default CustomerForm;
