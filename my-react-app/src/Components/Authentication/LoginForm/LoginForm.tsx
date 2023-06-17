import { Fragment } from "react";
import { useFormik } from "formik";
import { loginFomSchema } from "../Schema/shcema";
import Button from "../../Welcome/UI/Buttons";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginFomSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleClickGoback = () => {
    navigate("/");
  };

  return (
    <Fragment>
      <Button
        title="go back"
        type="button"
        onClick={handleClickGoback}
        className="mb-4"
      >
        Go back
      </Button>

      <div className="w-100 w-96  bg-gradient-to-r from-purple-400 via-purple-500 to-purple-500 rounded-md shadow-md p-6">
        <form onSubmit={formik.handleSubmit} className="grid gap-4">
          <label htmlFor="email" id="email" className="block  text-left">
            Email
          </label>
          <input
            placeholder="Enter Email"
            id="email"
            type="email"
            className="w-full p-2 border border-gray-300  bg-white text-black rounded focus:outline-none focus:border-emerald-500"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <label htmlFor="password" id="password" className="block text-left">
            Password
          </label>
          <input
            placeholder="Enter Password"
            id="password"
            type="password"
            className="w-full p-2 border border-gray-300      bg-white text-black rounded focus:outline-none focus:border-emerald-500"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <button
            className="  bg-gradient-to-tr  from-purple-300 to-purple-400 rounded-md text-white text-center  border-emerald-400 "
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default LoginForm;
