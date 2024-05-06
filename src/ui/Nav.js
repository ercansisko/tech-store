import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { useUser } from "../features/authentication/useUser";
const StyledNav = styled.div`
  background-color: var(--color-blue-700);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 12;
`;
const Logo = styled.div`
  padding: 1rem;
  & img {
    width: auto;
    height: 3rem;
  }
`;
const NavList = styled.div`
  padding-left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 30%;
  height: 100%;
  & a {
    width: 120px;
    text-align: center;
    text-decoration: none;
    color: var(--color-blue-100);
    padding: 0.7rem;
    border: none;
    border-radius: 0.3rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & a:hover {
    background-color: var(--color-green-700);
    color: var(--color-grey-50);
    font-size: 1.1rem;
  }
  & a:active {
    background-color: var(--color-blue-700);
  }
`;
function Nav() {
  const { user } = useUser();
  console.log(user);
  return (
    <StyledNav>
      <Logo>
        <NavLink to="/">
          <img src="logo.png" alt="" />
        </NavLink>
      </Logo>
      <NavList>
        {user?.aud === "authenticated" && (
          <>
            <NavLink to="/dashboard">Ürünleri Yönet</NavLink>
            <NavLink to="/orders">Siparişleri Yönet</NavLink>
          </>
        )}
        <NavLink to="/">Ana Sayfa</NavLink>
        <NavLink to="/cart">Sepet</NavLink>
        <NavLink to="/login">Giriş</NavLink>
      </NavList>
    </StyledNav>
  );
}

export default Nav;
