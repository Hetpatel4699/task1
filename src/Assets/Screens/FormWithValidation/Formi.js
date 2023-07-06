import './index.css'
import * as Yup from "yup";
import * as React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../LoginWithAuth0/Header";

const Formi = () => {
  const navigate = useNavigate();
  const [lastNameData, setLastName] = useState("")
  return (
    <>
      <div className="d-flex flex-column">
        <Header />
        <div className="formik" style={{ height: "90vh", overflowY: "scroll" }}>
          <div className="fformik">
            <h1>Personal Data Form</h1>
            <Formik
              let initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                gender: "",
                phoneNumber: "",
                address: "",
              }}
              validationSchema={Yup.object({
                firstName: Yup.string()
                  .max(15, "Must be 15 characters or less")
                  .required("Required"),
                lastName: Yup.string()
                  .max(20, "Must be 20 characters or less")
                  .required("Required"),
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Required"),
                gender: Yup.string().required("Required"),
                phoneNumber: Yup.string().required("Required"),
                address: Yup.string().required("Required"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  localStorage.setItem("Data", JSON.stringify(values));
                  setSubmitting(false);
                  navigate("/data");
                }, 400);
              }}
            >
              {({ isSubmitting }) => (
                <Form className="formDetail">
                  <div className="wrapper">
                    <Field
                      style={{
                        marginTop: "5px",
                      }}
                      className="input"
                      type="text"
                      name="firstName"
                      placeholder="firstName"
                    />
                  </div>
                  <ErrorMessage name="firstName" />
                  <br />
                  <br />

                  <div className="wrapper">
                    <Field
                      style={{
                        marginTop: "5px",
                      }}
                      className="input"
                      type="text"
                      name="lastName"
                      placeholder="lastName"
                    />

                  </div>
                  <ErrorMessage name="lastName" />
                  <br />
                  <br />

                  <div className="wrapper">
                    <Field
                      style={{
                        marginTop: "5px",
                      }}
                      className="input"
                      type="text"
                      name="email"
                      placeholder="email"
                    />
                  </div>
                  <ErrorMessage name="email" />
                  <br />
                  <br />

                  <Field
                    as="select"
                    name="gender"
                  >
                    <option value="">Select a gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </Field>
                  <ErrorMessage name="gender" />
                  <br />
                  <br />

                  <div className="wrapper">
                    <Field
                      style={{
                        marginTop: "5px",
                      }}
                      className="input"
                      type="text"
                      name="phoneNumber"
                      placeholder="phoneNumber"
                    />
                  </div>
                  <ErrorMessage name="phoneNumber" />
                  <br />
                  <br />

                  <div className="wrapper">
                    <Field
                      style={{
                        marginTop: "5px",
                      }}
                      className="input"
                      type="text"
                      name="address"
                      placeholder="address"
                    />
                  </div>
                  <ErrorMessage name="address" />
                  <br />
                  <br />

                  <div className="btn-yoo">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Formi;
