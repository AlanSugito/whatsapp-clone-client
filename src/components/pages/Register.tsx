import { BaseButton, ErrorSign } from "..";
import { userAPI } from "../../API";
import { authReducer } from "../../reducers";
import { InputPicture, LabeledInput } from "../molecules";
import { AxiosError } from "axios";
import { Link, useNavigate } from "react-router-dom";
import React, { useReducer, useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<AxiosError<{ message: string }> | null>(
    null
  );
  const [isLoading, setIsloading] = useState(false);
  const [state, dispatch] = useReducer(authReducer, {
    username: "",
    password: "",
    image: null,
  });

  const setUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_USERNAME", payload: { username: e.target.value } });
  };

  const setPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_PASSWORD", payload: { password: e.target.value } });
  };

  const setImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files as FileList;
    const file = files[0] as Blob;
    dispatch({ type: "SET_IMAGE", payload: { image: file } });
  };

  const register = async (
    e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    try {
      setIsloading(true);
      const formData = new FormData();
      formData.append("username", state.username as string);
      formData.append("password", state.password as string);
      formData.append("image", state.image as Blob);
      const response = await userAPI.register(formData);
      if (!response) throw new Error("Something wrong");
      dispatch({ type: "CLEAR", payload: {} });
      navigate("/login");
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error);
      }
    } finally {
      setIsloading(false);
    }
  };

  return (
    <div className="h-screen bg-slate-200 flex flex-col justify-center items-center bg-pattern">
      <form
        onSubmit={register}
        className="py-3 px-4 rounded-md shadow-sm w-1/3 h-max bg-white"
      >
        <h1 className="text-center font-semibold text-2xl mb-4">Register</h1>
        <div className="flex flex-col gap-2">
          <InputPicture className="m-auto" onChange={setImage} />
          <LabeledInput
            label="Username"
            placeholder="Write your username"
            value={state.username}
            onChange={setUsername}
          />
          <LabeledInput
            label="Password"
            type="password"
            value={state.password}
            placeholder="Write your password"
            onChange={setPassword}
          />
          {error && <ErrorSign error={error} />}
          <BaseButton
            label="Register"
            className="w-1/2 m-auto mt-4"
            onClick={register}
            disabled={isLoading}
          />
        </div>
      </form>
      <span>
        Already have an account?
        <Link to="/login" className="text-green-500">
          Login
        </Link>
      </span>
    </div>
  );
};

export default Register;
