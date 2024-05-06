import styled from "styled-components";
import FormRow from "../../ui/FormRow";
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import { useLogin } from "./useLogin";
import { useUser } from "./useUser";
const FormContainer = styled.form`
  width: 40rem;
  border: 1px solid var(--color-grey-200);
  border-radius: 1rem;
  margin: 20rem auto;
  height: 30rem;
  padding-top: 7rem;
  background-color: var(--color-grey-100);
  line-height: 2;
  & button {
    display: block;
    width: 10rem;
    margin: auto;
  }
`;
function AdminPanel() {
  const { login, data, isLoading } = useLogin();
  const { user } = useUser();
  const { register, handleSubmit } = useForm();
  const submit = (data) => {
    login({ email: data.email, password: data.password });
  };
  if (user?.aud === "authenticated") return <div>giriş yapıldı</div>;
  return (
    <FormContainer onSubmit={handleSubmit(submit)}>
      <FormRow>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" {...register("email")} />
      </FormRow>
      <FormRow>
        <label htmlFor="password">Şifre</label>
        <input
          type="text"
          id="password"
          name="password"
          {...register("password")}
        />
      </FormRow>
      <Button color="blue">Giriş</Button>
    </FormContainer>
  );
}

export default AdminPanel;
