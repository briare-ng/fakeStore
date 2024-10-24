import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import styled from "styled-components";
import Cart from "../assets/icons/Cart";

export default function Header() {
  const navigate = useNavigate();
  const deconnect = () => {
    console.log("déconnexion");
    // sessionStorage.clear();
    localStorage.clear();
    navigate("/");
    // localStorage.removeItem();
  };

  return (
    <>
      <Head>
        <Title>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <Links to="/">
            <MainTitle>The FakeStore</MainTitle>
          </Links>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </Title>
        <NavBar>
          <Links to="/">
            Home
          </Links>
          <Links to="/electronics">
            electronics
          </Links>
          <Links to="/jewelery">
            jewelery
          </Links>
          <Links to="/men's clothing">
            Men's
          </Links>
          <Links to="/women's clothing">
            Women's
          </Links>
          {/* <Links to="/login">
            Sign In
          </Links> */}
          <Links to="/Cart">
            <button>
              <Cart />
            </button>
          </Links>
        </NavBar>
        {/* <button id="login" onClick={deconnect}>
          Déconnexion
        </button> */}
      </Head>
    </>
  );
}

const Head = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(#e5e5eb, #b1b6d3);
  width: 100%;
  position: absolute;
  top: 0;
`;
const Title = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const MainTitle = styled.h1`
  color: rgb(232, 172, 93);
  text-shadow: 3px 3px 10px rgb(18, 16, 7);
  margin: 5px;
`;
const NavBar = styled.div`
  margin: 10px;
`;
const Links = styled(Link)`
  text-shadow: 1px 1px 2px rgb(18, 16, 7);
  color: rgb(245, 132, 39);
  margin: 20px;
  &:hover {
    color: rgb(222, 188, 55);
  }
`;
