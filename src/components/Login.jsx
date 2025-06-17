import React, { use, useState } from "react";
import { FcGoogle } from "react-icons/fc";

import ButtonSubmit from "./ButtonSubmit";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import axios from "axios";
import { getAdditionalUserInfo } from "firebase/auth";

const Login = () => {
  const { user, signInWithEmail, signInWithGoogle, serverUrl } =
    use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInWithEmail(email, password)
      .then((result) => {
        navigate(from);
      })
      .catch((err) => {
        toast.error(`${err.message}`, {
          position: "top-right",
          autoClose: 5000,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(async (result) => {
        const isNewUser = getAdditionalUserInfo(result)?.isNewUser;
        if (isNewUser) {
          const now = new Date();
          const googleUser = result.user;
          //   console.log(result);
          const userForDb = {
            name: googleUser.displayName,
            email: googleUser.email,
            PhotoUrl: googleUser.photoURL,
            createdAt: now.toLocaleString(),
          };

          const putGoogleUserToDb = await axios
            .post(`${serverUrl}/users`, userForDb)
            .then((res) => res.data);
        }

        navigate("/");
      })

      .catch((err) => {
        toast.error(`${err.message}`);
      });
  };

  return (
    <div className="flex items-center justify-center bg-base-200 px-4 min-h-[calc(100vh-69px-241px)] py-12">
      <div className="w-full max-w-md bg-base-100 shadow-xl rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-primary">
          Login to BookNest
        </h2>

        <form onSubmit={handleSignIn} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your E-mail"
              className="input input-bordered focus:outline-none w-full"
              name="email"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered focus:outline-none w-full"
              name="password"
              required
            />
          </div>

          <ButtonSubmit text="Login" addClass="w-full" />
        </form>

        <div className="divider">or</div>

        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline btn-primary w-full flex items-center justify-center gap-2 rounded-xl"
        >
          <FcGoogle className="text-xl" />
          Login with Google
        </button>

        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <Link to="/register" className="text-primary hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
