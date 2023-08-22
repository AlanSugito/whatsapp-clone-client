import { Link } from "react-router-dom";
import { BaseButton, ErrorSign } from "../atoms";
import { LabeledInput } from "../molecules";
import { useState, useReducer } from "react";
import { authReducer } from "../../reducers";
import { AxiosError } from "axios";
import { userAPI } from "../../API";
import { ICredential } from "../../types";
import { storage } from "../../utils";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [error, setError] = useState<AxiosError<{ message: string }> | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);
  const [state, dispatch] = useReducer(authReducer, {
    username: "",
    password: "",
  });

  const setUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_USERNAME", payload: { username: e.target.value } });
  };

  const setPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_PASSWORD", payload: { password: e.target.value } });
  };

  const login = async (
    e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    try {
      setIsLoading(false);
      const { data } = await userAPI.login(state as ICredential);
      storage.setToStorage("user", data.user);
      navigate("/");
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen bg-slate-200 flex flex-col justify-center items-center bg-pattern">
      <form
        className="py-3 px-4 rounded-md shadow-sm w-1/3 h-max bg-white"
        onSubmit={login}
      >
        <h1 className="text-center font-semibold text-2xl">Login</h1>
        <div className="flex flex-col gap-4">
          <LabeledInput
            label="Username"
            placeholder="Write your username"
            onChange={setUsername}
          />
          <LabeledInput
            label="Password"
            type="password"
            placeholder="Write your password"
            onChange={setPassword}
          />
          {error && <ErrorSign error={error} />}
          <BaseButton
            label="Login"
            className="w-1/2 m-auto mt-4"
            onClick={login}
            disabled={isLoading}
          />
        </div>
      </form>
      <span>
        Still not have an account?{" "}
        <Link to="/register" className="text-green-500">
          Register
        </Link>
      </span>
    </div>
  );
};

export default Login;
