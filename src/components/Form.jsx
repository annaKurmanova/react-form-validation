import React from "react";
import { ImageBg } from "./styled/Container.styled";
import { FromContainer, FormInput } from "./styled/Form.styled";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <FromContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            {...register("firstName", {
              required: "Please enter your first name",
              maxLength: 20,
            })}
            placeholder="First Name"
          />
          <p>{errors.firstName?.message}</p>
          <FormInput
            {...register("lastName", {
              required: "Please enter your last name",
              maxLength: 20,
            })}
            placeholder="Last Name"
          />
          <p>{errors.lastName?.message}</p>
          <FormInput
            type="email"
            {...register("email", {
              required: "Please enter your e-mail",
              maxLength: 20,
            })}
            placeholder="E-mail"
          />
          <p>{errors.email?.message}</p>
          <FormInput type="submit" />
        </form>
      </FromContainer>
      <ImageBg>
        <h1>Connect from anywhere, anytime</h1>
        <p>Join over 10,000 users around the World </p>
      </ImageBg>
    </>
  );
};

export default Form;
