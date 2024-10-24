import { useState } from "react";
import Input from "./Input";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const navigate = useNavigate();

  const credentials = [
    { login: "bob", pwd: "sponge" },
    { login: "moby", pwd: "dick" },
    { login: "yolo", pwd: "yolo" },
    { login: "admin", pwd: "password" },
  ];
  // Définition des patterns regex
  const loginPattern = /^[a-zA-Z0-9_@.-]{3,20}$/;
  const passwordPattern = /^[a-zA-Z0-9_@.-]{3,20}$/;
  // /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9@#$%^&*()_+=[$${};':"\\|,.<>/?]{8,20}$/;
  // Fonction pour valider le login
  function validateLogin(login) {
    return loginPattern.test(login);
  }
  // Fonction pour valider le mot de passe
  function validatePassword(password) {
    return passwordPattern.test(password);
  }

  const isCredentialValid = (login, password) => {
    return credentials.find(
      (credential) => credential.login === login && credential.pwd === password
    );
  };

  const submit = (e) => {
    e.preventDefault();
    console.log("submit");
    //validation de formulaire, contrôle regEx
    if (validateLogin(login) && validatePassword(password)) {
      console.log("validation passée");

      // lancer la vérif des credentials
      const isCredentials = isCredentialValid(login, password);

      if (isCredentials) {
        console.log("Credentials OK, essais de connexion");

        //si tout est OK on génère un JWT via ce fetch
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGQwZDUxYzRmOWMwNmMyMTdlNmE1MDVmMTA5ZjlmNSIsIm5iZiI6MTcyNjc0NjQyOS40MTA5MzIsInN1YiI6IjY2NjFiY2U2YjM0OTZjZjY1YWE0MmJlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lGyyZHV6q9jw4sW6qgam_9aTNVTekgSd9pf_xLuH564",
          },
        };
        fetch("https://api.themoviedb.org/3/authentication/token/new", options)
          .then((response) => response.json())
          .then((response) => {
            console.log("connecté !");
            //mettre le JWT en sessionStorage ou localStorage
            // sessionStorage.setItem("User_Token", response.request_token);
            localStorage.setItem("User_Token", response.request_token);
            localStorage.setItem("User", login);
            userIsConnected();
          })
          .catch((err) => {
            console.error(err);
            console.log("connexion non établie..." + err.message);
          });
      } else {
        console.log("un pb est survenu");
      }
    }
  };

  const userIsConnected = () => {
    const userStorage = localStorage.getItem("User");
    const tokenStorage = localStorage.getItem("User_Token");
    if (userStorage && tokenStorage) {
      console.log("user is already logged");
      setIsConnected(true);
    } else {
      console.log("user is not logged");
    }
  };

  // useEffect(() => {
  //   userIsConnected();
  //   console.log(isConnected);

  //   if (isConnected) {
  //     navigate("/");
  //   }
  // }, [isConnected]);

  return (
    <>
      <form className="loginContainer">
        <Input name="Login" type="text" setValue={setLogin} />
        <Input name="Password" type="password" setValue={setPassword} />
        <button id="login" onClick={submit}>
          Connexion
        </button>
      </form>
    </>
  );
}
