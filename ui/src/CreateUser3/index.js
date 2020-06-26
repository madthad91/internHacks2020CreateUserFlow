import React, {useState} from "react";

export default function CreateUser3() {
  const [email, setEmail] = useState(window.localStorage.getItem("emailForSignIn"));
  const [password, setPassword] = useState('');

  return (
    <form>
      <div>
        <label>Email: </label>
        <br/>
        <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label>Password: </label>
        <br/>
        <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button type="button" onClick={() => {
        console.log(email);
        console.log(password);
      }}>
        Submit
      </button>
    </form>
  );
}