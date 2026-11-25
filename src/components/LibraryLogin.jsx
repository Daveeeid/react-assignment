import React, { useState } from "react";
import LibraryButton from "./LibraryButton";
import LibraryHeader from "./LibraryHeader";


function LibraryLogin() {
  const [doYouHaveAnAccount, setDoYouHaveAnAccount] = useState(true);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function SwitchFromLoginToRegister() {
    setDoYouHaveAnAccount(!doYouHaveAnAccount);
  }

  function AlertUser() {
    alert("Your User Name is " + userName + " your password is " + password);
  }
  return (
    <>
    <LibraryHeader/>
      {doYouHaveAnAccount ? (
        <div style={{ border: "3px solid blue", marginTop: "190px" }}>
          <label>UserName:</label>
          <input
            type="text"
            placeholder="Enter your username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <br />
          <label>Password:</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <LibraryButton buttonLabel="LOGIN" onClickButton={AlertUser} />
          <br />
          <p>
            Don't have an account?
            {
              <LibraryButton
                buttonLabel="Register"
                onClickButton={SwitchFromLoginToRegister}
              />
            }
          </p>
        </div>
      ) : (
        <div style={{ border: "3px solid blue", marginTop: "190px" }}>
          <label>Student ID:</label>
          <input type="text" placeholder="Enter your Student ID" />
          <br />
          <label>Email:</label>
          <input type="email" />
          <br />
          <label>Password:</label>
          <input type="password" />
          <br />
          <label>Comfirm Password:</label>
          <input type="password" />
          <br />
          <LibraryButton buttonLabel="REGISTER" />
          <label>Already have an account? </label>
          <LibraryButton
            buttonLabel="Login"
            onClickButton={SwitchFromLoginToRegister}
          />
        </div>
      )}
    </>
  );
}

export default LibraryLogin;
