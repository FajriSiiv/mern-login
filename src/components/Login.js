import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../features/authSlice";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigation("/dashboard");
    }

    dispatch(reset());
  }, [user, isSuccess, dispatch, navigation, isError]);

  const Auth = (e) => {
    e.preventDefault();

    dispatch(LoginUser({ email, password }));
  };

  return (
    <section className="hero is-success is-fullheight is-fullwidth has-background-grey-light">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4">
              {isError &&
                toast.info(message, {
                  position: "bottom-center",
                  autoClose: 10000,
                })}

              <form onSubmit={Auth} className="box">
                <h1 className="title is-2 " style={{ color: "black" }}>
                  Sign in
                </h1>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      type="text"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="input"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input
                      type="password"
                      placeholder="*******"
                      className="input"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <button
                    type="submit"
                    className="button is-success is-fullwidth"
                  >
                    {isLoading ? "Loading..." : "Login"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Login;
