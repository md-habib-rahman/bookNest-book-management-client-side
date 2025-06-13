import React, { use, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { AuthContext } from "../AuthProvider/AuthProvider";

import ButtonSubmit from "./ButtonSubmit";
import { MdLogin } from "react-icons/md";
import ButtonsPrimary from "./ButtonsPrimary";
import { useNavigate } from "react-router";
import axios from "axios";
import { getAdditionalUserInfo } from "firebase/auth";

const Register = () => {
  const passwordCheck = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  const { signUpWithEmail, signInWithGoogle, setUser, serverUrl } =
    use(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoUrl = form.photoUrl.value;
    const password = form.password.value;
    console.log(name);
    if (!passwordCheck.test(password)) {
      toast.error(
        <div>
          <strong>Your Password must contain:</strong>
          <ul style={{ margin: "5px 0 0 20px" }}>
            <li>One Uppercase letter</li>
            <li>One Lowercase letter</li>
            <li>At least 6 characters in length</li>
          </ul>
        </div>,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
      return;
    }
    signUpWithEmail(email, password)
      .then((result) => {
        if (result.user) {
          toast.success("Registered successfully!");
          const now = new Date();
          const newUser = {
            name,
            email,
            photoUrl,
            createdAt: now.toLocaleString(),
          };
          const result = axios
            .post(`${serverUrl}/users`, newUser)
            .then((res) => console.log(res.data));
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(async (result) => {
        const isNewUser = getAdditionalUserInfo(result)?.isNewUser;
        if (isNewUser) {
          const now = new Date();
          const googleUser = result.user;
          console.log(result);
          const userForDb = {
            name: googleUser.displayName,
            email: googleUser.email,
            PhotoUrl: googleUser.photoURL,
            createdAt: now.toLocaleString(),
          };

          const putGoogleUserToDb = await axios
            .post(`${serverUrl}/users`, userForDb)
            .then((res) => console.log(res.data));
        }
        toast.success("Registered with google successfully!");

        navigate("/");
      })

      .catch((err) => {
        toast.error(`${err.message}`);
      });
  };

  return (
    <div className=" flex items-center justify-center bg-base-200 px-4 py-16">
      <div className="w-full max-w-md shadow-xl bg-base-100 rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-primary">
          Create Your Account
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="input input-bordered focus:outline-0 w-full"
              name="name"
              required
            />
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">E-mail</span>
            </label>
            <input
              type="email"
              placeholder="Your E-mail"
              className="input input-bordered focus:outline-0 w-full"
              name="email"
              required
            />
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              type="url"
              placeholder="Photo Url"
              className="input input-bordered focus:outline-0 w-full"
              name="photoUrl"
              required
            />
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered focus:outline-0 w-full"
              name="password"
              required
            />
          </div>

          <ButtonSubmit text={"Register"} addClass={"w-full"} />

          {/* <button type="submit" className="btn btn-primary w-full">
            Register
          </button> */}
        </form>

        <div className="divider">or</div>

        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline btn-primary w-full flex items-center justify-center gap-2 rounded-xl"
        >
          <FcGoogle className="text-xl" />
          Continue with Google
        </button>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-primary hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
