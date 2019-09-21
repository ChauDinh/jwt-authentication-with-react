import React, { useState } from "react";
import { useRegisterMutation } from "../generated/graphql";
import { RouteComponentProps } from "react-router-dom";

export const Register: React.FC<RouteComponentProps> = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [register] = useRegisterMutation();

  return (
    <form
      onSubmit={async e => {
        e.preventDefault();
        console.log("form submitted");
        const response = await register({
          variables: {
            email,
            password
          }
        });

        console.log(response);

        history.push("/");
      }}
    >
      <div>
        <input
          type="text"
          value={email}
          placeholder="Email address"
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={e => setPasword(e.target.value)}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};
