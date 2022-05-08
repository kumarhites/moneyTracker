//styles
import styles from "./Signup.module.css";

//pages and comaponents
import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [cnfPassowrd, setCnfPassword] = useState("");
//   const [err, setErr] = useState("");
  const { error, isPending, signup } = useSignup();
  //   useEffect(() => {
  //     if (password === "" || cnfPassowrd === "") {
  //       setError("");
  //     } else if (password === cnfPassowrd) {
  //       setError("YAY!");
  //     } else {
  //       setError("passwords dont match, Try again!");
  //     }
  //   }, [password, cnfPassowrd]);
  const handleSubmit = (e) => {
    e.preventDefault();

      signup(email, password, displayName);
  };

  return (
    <form className={styles["signup-form"]} onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <label>
        <span>Display name:</span>
        <input
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      <label>
        <span>Email:</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <label>
        <span>Confirm Password:</span>
        <input
          type="password"
          onChange={(e) => setCnfPassword(e.target.value)}
          value={cnfPassowrd}
        />
      </label>
      {/* <span>{err}</span> */}
      {!isPending && <button className="btn">Signup</button>}
      {error && <p>{error}</p>}
      {isPending && <button className="btn" disabled>Loading...</button>}
    </form>
  );
}

export default Signup;
