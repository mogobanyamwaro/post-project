import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../../components/auth/LoginForm";

function Login() {
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
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or
            <Link
              to={"/register"}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              {" "}
              Register to our platform{" "}
            </Link>
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
