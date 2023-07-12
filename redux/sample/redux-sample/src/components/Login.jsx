import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="row mb-4 mb-lg-5">
        <div className="col-md-8 col-xl-6 text-center mx-auto">
          <p className="fw-bold text-success mb-2">Login</p>
          <h2 className="fw-bold">Welcome back</h2>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-md-6 col-xl-4">
          <div className="card">
            <div className="card-body text-center d-flex flex-column align-items-center">
              <div className="bs-icon-xl bs-icon-circle bs-icon-primary shadow bs-icon my-4">
                <svg
                  className="bi bi-person"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                </svg>
              </div>
              <form data-bs-theme="light">
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="text"
                    name="email"
                    placeholder="User Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <div className="mb-3">
                  <button
                    className="btn btn-primary shadow d-block w-100"
                  >
                    Log in
                  </button>
                </div>
              </form>
              <p className="text-muted">Forgot your password?</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
