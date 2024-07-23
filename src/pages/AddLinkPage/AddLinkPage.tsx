import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormikInput from "../../components/FormikInput/FormikInput";
import { Form, Formik } from "formik";
import { object, string } from "yup";
import Toast from "../../components/Toast/Toast";

type Props = {};

const AddLinkPage = (props: Props) => {
    const [show, setShow] = useState(false);
  const initialValues = {
    nameSurname: "",
    country: "",
    city: "",
    email: "",
    website: "",
  };
  const validationSchema = object({
    nameSurname: string()
      .matches(/^[a-zA-ZÇçĞğİıÖöŞşÜü\s]+$/, "Only letters are allowed")
      .min(4, "Minimum 4 characters required")
      .max(60, "Maximum 60 characters allowed")
      .required("Name and surname is required"),
    country: string()
      .matches(/^[a-zA-ZÇçĞğİıÖöŞşÜü\s]+$/, "Only letters are allowed")
      .min(2, "Minimum 2 characters required")
      .max(40, "Maximum 40 characters allowed")
      .required("Country is required"),
    city: string()
      .matches(/^[a-zA-ZÇçĞğİıÖöŞşÜü\s]+$/, "Only letters are allowed")
      .min(2, "Minimum 2 characters required")
      .max(40, "Maximum 40 characters allowed")
      .required("City is required"),
    email: string().email("Invalid email").required("Email is required"),
    website: string().url("Invalid URL").required("Website is required"),
  });


  return (
    <>
      <div className="flex items-center">
        <Link to="/">
          <img
            className="w-[149px] h-[63px] ms-[37px] mt-[27px]"
            src="./assets/Tesodev Logo.png"
            alt="Tesodev Logo"
          />
        </Link>
        <Link
          to="/result"
          className="ms-[39px] mt-[27px] flex justify-center items-center"
        >
          <img
            className=" me-3"
            src="./assets/Arrow 1.png"
            alt="Tesodev Logo"
          />
          <p className="rounded-xl font-roboto text-[24px] leading-[28.1px] text-[#484848] font-bold">
            Return to List Page
          </p>
        </Link>
      </div>

      <div className="mt-[65px] ms-[225px] w-[590px] relative">
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { setStatus, resetForm }) => {
            localStorage.setItem("formValues", JSON.stringify(values));
            setStatus({
              type: "success",
              message: "Form submitted successfully!",
            });
            setTimeout(() => setStatus(null), 3000);
          }}
          validationSchema={validationSchema}
          enableReinitialize={true}
        >
          {({ errors, touched, status, setStatus }) => (
            <Form className="w-full">
              <div className="">
                <FormikInput
                  name="nameSurname"
                  label="Name Surname"
                  type="text"
                  placeholder="Enter name and surname"
                />
              </div>
              <div className="">
                <FormikInput
                  name="country"
                  label="Country"
                  type="text"
                  placeholder="Enter a country"
                />
              </div>
              <div>
                <FormikInput
                  name="city"
                  label="City"
                  type="text"
                  placeholder="Enter a city"
                />
              </div>
              <div>
                <FormikInput
                  name="email"
                  label="Email"
                  type="text"
                  placeholder="Enter a e-mail (abc@xyz.com)"
                />
              </div>
              <div>
                <FormikInput
                  name="website"
                  label="Website"
                  type="text"
                  placeholder="Enter a website (https://xyz.com)"
                />
              </div>
              <div className="absolute right-[6px]">
                <button
                  type="submit"
                  onClick={() => {
                    const errorMessages = Object.values(errors).join(". ");
                    if (errorMessages) {
                      setStatus({ type: "error", message: errorMessages });
                      setTimeout(() => setStatus(null), 3000);
                    }
                  }}
                  className="flex justify-center items-center  rounded-xl w-[138px] h-[46px] bg-[#204080] font-roboto text-[18px] leading-[21.09px] text-white font-bold duration-200 ease-in hover:bg-[#4F75C2]"
                >
                  Add
                </button>
              </div>
              {status && <Toast type={status.type} message={status.message}  />}
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default AddLinkPage;
