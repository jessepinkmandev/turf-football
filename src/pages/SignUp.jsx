import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import ReactPasswordChecklist from "react-password-checklist";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const { createUser } = UserAuth();

  const handleSubmit = async (e) => {
    // e.preventDefault();

    setError("");

    try {
      await createUser(email, password);
      navigate("/photos");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
      alert("Please try again " + e.message);
    }
  };

  const handleValidation = (e) => {
    e.preventDefault();
    const regExp = /^(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,}$/;
    if (password === "") {
      handleSubmit();
    } else if (regExp.test(password)) {
      setMessage("Password is Valid");
      handleSubmit();
    } else if (!regExp.test(password)) {
      setMessage("Password is Invalid");
    } else {
      setMessage("");
    }
  };

  return (
    <div className="text-center max-w-96 mx-auto my-16 p-4">
      <div>
        <h1 className="text-2xl font-bold py-2">Sign Up for an Account</h1>
      </div>
      <form onSubmit={handleValidation}>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium ">Email Address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="border p-3"
            type="email"
          />
        </div>

        <div className="flex flex-col py-2">
          <label className="py-2 font-medium ">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="border p-3"
            type="password"
          />
        </div>
        <p>{message}</p>

        <button className="border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white">
          Sign Up
        </button>

        <ReactPasswordChecklist
          rules={["minLength", "specialChar", "number", "capital"]}
          minLength={8}
          value={password}
        />
      </form>
    </div>
  );
};

export default SignUp;
