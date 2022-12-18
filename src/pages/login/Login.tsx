import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "react-query";
import axios, { AxiosResponse, AxiosError } from "axios";
import { ChangeEvent, useState } from "react";
import { PageContent } from "shared/ui/layouts";
import { Checkbox, Button, Input } from "shared/ui/components";
import { AUTH_LOCAL_STORAGE_KEY } from "shared/constants";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "shared/hooks";
import { login } from "enteties/auth";

type FormInputs = {
  email: string;
  password: string;
};

const schema = yup
  .object({
    password: yup.string().required(),
    email: yup.string().email().required(),
  })
  .required();

export const LoginPage = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });

  const { error, isLoading, mutate } = useMutation<
    AxiosResponse<{ token: string }>,
    AxiosError<{ error: string }>,
    FormInputs
  >(
    async (auth) => {
      return await axios.post("https://reqres.in/api/login", auth);
    },
    {
      onSuccess: (data, variables, context) => {
        dispatch(login());
        if (rememberMe) {
          localStorage.setItem(AUTH_LOCAL_STORAGE_KEY, data.data.token);
        }
        navigate("/");
      },
    },
  );

  const onSubmit = (data: FormInputs) => {
    mutate(data);
  };

  const handleRemeberMeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRememberMe(e.target.checked);
  };

  return (
    <PageContent>
      {/* eslint-disable-next-line */}
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto w-96">
        <div className="mb-3">
          <Input className="mb-1" error={errors.email} placeholder="Email" {...register("email")} />
          <p>{errors.email?.message}</p>
        </div>

        <div className="mb-3">
          <Input
            className="mb-1"
            error={errors.password}
            placeholder="Password"
            type="password"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
        </div>

        <Checkbox onChange={handleRemeberMeChange}>Remember me</Checkbox>

        <Button className="mb-3" type="submit" disabled={isLoading}>
          Login
        </Button>
        <p className="text-red-500">{error?.response?.data.error}</p>
      </form>
    </PageContent>
  );
};
