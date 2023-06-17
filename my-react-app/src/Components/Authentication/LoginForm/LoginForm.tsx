import { Fragment } from "react";
import { useFormik } from "formik";
import { loginFomSchema } from "../Schema/shcema";
import Button from "../../Welcome/UI/Buttons";

interface LoginForm {
  email: string;
  password: string;
}

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginFomSchema,

    onSubmit: (values: LoginForm) => {
      console.log(values);
    },
  });
  return (
    <Fragment>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email" id="email">
          Email
        </label>
        <input
          placeholder="Enter Email"
          id="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <label htmlFor="password" id="password">
          Password
        </label>
        <input
          placeholder="Enter Password"
          id="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </form>

      <Button title="Submit"></Button>
    </Fragment>
  );
};

export default LoginForm;
