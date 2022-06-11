import React from "react";
import { Link } from "react-router-dom";
import RegisterForm from "../../components/auth/RegisterForm";

function Register() {
  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Register to our platform in order to create posts
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or
            <Link
              to={"/"}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              {" "}
              Have an account? , click here to sign in{" "}
            </Link>
          </p>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
}

export default Register;
