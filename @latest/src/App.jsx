import { useState } from "react";
import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLoginButton from "./components/GoogleAuthorization";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <GoogleOAuthProvider clientId="ID ESCONDIDO">
        <GoogleLoginButton
          setName={setName}
          setEmail={setEmail}
          setImage={setImage}
          setIsActive={setIsActive}
        />
      </GoogleOAuthProvider>

      {isActive ? (
        <div>
          <img src={image} alt="" />
          <p>{name}</p>
          <p>{email}</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
