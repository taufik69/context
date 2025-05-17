import React from "react";
import { useForm } from "react-hook-form";
import authIllustration from "../assets/images/auth_illustration.png";
import Field from "../Components/Common/Field";
import { useNavigate } from "react-router-dom";
import UseAuth from "../hooks/useAuth";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();
  const { user, setUser } = UseAuth();

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();
  const submitForm = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/login`,
        {
          ...data,
        }
      );
      if (response.status == 200) {
        const { token, user } = response.data;
        setUser({ token, user });
      }

      navigate("/");
    } catch (error) {
      setError("loginError", { message: "error.response.data.message" });
      console.log(error);
    }
  };

  return (
    <div>
      <main class="flex min-h-screen items-center justify-center bg-deepDark py-8">
        <div class="max-w-[1368px] flex-1">
          <div class="container grid items-center gap-8 lg:grid-cols-2">
            {/* <!-- illustration and title --> */}
            <div>
              <img
                class="mb-12 max-w-full max-lg:hidden"
                src={authIllustration}
                alt="auth_illustration"
              />
              <div>
                <h1 class="mb-3 text-4xl font-bold lg:text-[40px]">Facehook</h1>
                <p class="max-w-[452px] text-gray-600/95 lg:text-lg">
                  Create a social media app with features like, showing the
                  post, post details, reactions, comments and profile.
                </p>
              </div>
            </div>
            {/* <!-- illustration and title ends --> */}
            {/* <!-- login form -->/ */}
            <div class="card">
              <form
                class="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
                onSubmit={handleSubmit(submitForm)}
              >
                <Field label="Email" error={errors.email} htmlFor="email">
                  <input
                    name="email"
                    id="email"
                    type="email"
                    className={`auth-input ${
                      !!errors.email ? "border-red-500" : "border-[#3F3F3F]"
                    }`}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Invalid email address",
                      },
                      validate: (value) => {
                        if (value.length < 5) {
                          return "Email must be at least 5 characters long";
                        }
                      },
                      minLength: {
                        value: 5,
                        message: "Email must be at least 5 characters long",
                      },
                      maxLength: {
                        value: 50,
                        message: "Email must be at most 50 characters long",
                      },
                      onChange: (e) => {
                        e.target.value = e.target.value.trim();
                      },
                    })}
                    placeholder="Email"
                  />
                </Field>

                <Field
                  label="password"
                  error={errors.password}
                  htmlFor="password"
                >
                  <input
                    name="password"
                    id="password"
                    type="password"
                    className={`auth-input ${
                      !!errors.password ? "border-red-500" : "border-[#3F3F3F]"
                    }`}
                    {...register("password", {
                      required: "Password is required",

                      validate: (value) => {
                        if (value.length < 5) {
                          return "Email must be at least 5 characters long";
                        }
                      },
                      minLength: {
                        value: 5,
                        message: "Email must be at least 5 characters long",
                      },
                      maxLength: {
                        value: 50,
                        message: "Email must be at most 50 characters long",
                      },
                      onChange: (e) => {
                        e.target.value = e.target.value.trim();
                      },
                    })}
                    placeholder="Password"
                  />
                </Field>
                {/* <!-- Submit --> */}
                {errors.loginError && (
                  <p className="text-red-500">{errors.loginError.message}</p>
                )}
                <button
                  class="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
                  type="submit"
                >
                  Login
                </button>
              </form>
              <div class="py-4 lg:py-6">
                <p class="text-center text-xs text-gray-600/95 lg:text-sm">
                  Don’t have account?
                  <a
                    class="text-white transition-all hover:text-lwsGreen hover:underline"
                    href="/registration.html"
                  >
                    Create New
                  </a>
                </p>
              </div>
            </div>
            {/* <!-- login form ends --> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
