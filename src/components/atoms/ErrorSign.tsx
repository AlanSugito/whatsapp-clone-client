import { FC } from "react";
import { AxiosError } from "axios";

interface ErrorSignProps {
  error?: AxiosError<{ message: string }>;
}

const ErrorSign: FC<ErrorSignProps> = ({ error }) => {
  return (
    <small className="text-red-500">{error?.response?.data.message}</small>
  );
};

export default ErrorSign;
