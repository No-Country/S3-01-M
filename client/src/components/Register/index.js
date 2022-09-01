import React, { useState, useEffect } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { register } from "../../features/user/authSlice";

const Register = () => {
  const [form, setForm] = useState();
  const [typePassword, setTypePassword] = useState('password')

  const { loading, error, user } = useSelector((state) => ({ ...state.auth }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePassword = ()=>{
    typePassword==='password'? setTypePassword('text'): setTypePassword('password');
  }

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const onSubmit = (values) => {
    console.log("Form data", values);
    const formValue = {
      firstName: values.name,
      LastName: values.surname,
      email: values.email,
      password: values.password,
    };
    console.log(formValue);

    dispatch(register({ formValue, navigate, toast }));
  };

  if (user != null) return <Navigate to="/control" />;

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "", name: "", surname: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "*Debe ingresar un email";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "*Email inválido";
          }
          return errors;
        }}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <div>
            <section className="relative flex flex-wrap lg:h-screen lg:items-center">
              <div className="w-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
              <div className="max-w-lg mx-auto text-center">
                  <h1 className="text-2xl font-bold sm:text-3xl text-white">
                    Regístrate!
                  </h1>
                  <p className="mt-4 text-xl text-white">
                    ¿no sabes en que gastas tu sueldo? 
                  </p>
                  <p className="mt-4 text-lg text-white">
                    Con <span className="text-[#00FFB9] font-semibold">Fisalu</span> olvidate de ese problema.
                  </p>
                </div>
                <Form className="max-w-md mx-auto mt-8 mb-0 space-y-4">
                  <section>
                    <div className="relative">
                      <Field
                        type="email"
                        className="w-full p-4 pr-12 text-sm border border-gray-800 rounded-lg shadow-sm"
                        name="email"
                        placeholder="email"
                      />
                      <div className="h-1">
                        <ErrorMessage name="email" component="div"  className="text-xs text-[red]"/>
                      </div>
                      
                      <span className="absolute inset-y-0 inline-flex items-center right-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                          />
                        </svg>
                      </span>
                    </div>
                  </section>

                  <section>
                    <div className="relative">
                      <Field
                        type="nombre"
                        className="w-full p-4 pr-12 text-sm border border-gray-800 rounded-lg shadow-sm"
                        name="nombre"
                        placeholder="nombre"
                      />
                      <div className="h-1">
                        <ErrorMessage name="name" component="div" className="text-xs text-[red]"/>
                      </div>
                    </div>
                  </section>

                  <section>
                    <div className="relative">
                      <Field
                        type="surname"
                        className="w-full p-4 pr-12 text-sm border border-gray-800 rounded-lg shadow-sm"
                        name="surname"
                        placeholder="surname"
                      />
                      <div className="h-1">
                        <ErrorMessage name="surname" component="div" className="text-xs text-[red]"/>
                      </div>
                    </div>
                  </section>

                  <section>
                    <div className="relative">
                      <Field
                        type={typePassword}
                        className="w-full p-4 pr-12 text-sm border border-gray-800 rounded-lg shadow-sm"
                        placeholder="Enter password"
                        name="password"
                      />
                      <div className="h-1">
                        <ErrorMessage name="password" component="div" className="text-xs text-[red]"/>
                      </div>
                      <span className="absolute inset-y-0 inline-flex items-center right-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          onClick={handlePassword}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </span>
                    </div>
                  </section>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-white">
                      Ya tenés cuenta?
                      <a className="underline px-2" href="/Login">
                        Ingresá
                      </a>
                    </p>
                    <button
                      type="submit"
                      disabled={!formik.isValid}
                      className="inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-emerald-400 rounded-lg border border-gray-800 hover:bg-[#8FE3CF]"
                    >
                      Registrase
                    </button>
                  </div>
                </Form>
              </div>
              <div className="relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-full">
                <img
                  className="absolute inset-0 object-cover w-full h-full"
                  src="https://www.hyperui.dev/photos/team-1.jpeg"
                  alt=""
                />
              </div>
            </section>
          </div>
        )}
      </Formik>
    </>
  );
};
export default Register;
