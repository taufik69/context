import React from "react";

const RegistrationPage = () => {
  return (
    <div>
      <main class="flex min-h-screen items-center justify-center bg-deepDark py-8">
        <div class="max-w-[1368px] flex-1">
          <div class="container grid items-center gap-8 lg:grid-cols-2">
            {/* <!-- illustration and title --> */}
            <div>
              {/* <!-- src="./assets/images/auth_illustration.png" --> */}
              <img
                class="mb-12 h-60"
                src="./assets/icons/registration.svg"
                alt="auth_illustration"
              />
              <div>
                <h1 class="mb-3 text-4xl font-bold lg:text-[40px]">Facehook</h1>
                <p class="max-w-[452px] text-gray-400/95 lg:text-lg">
                  Create a social media app with features like, showing the
                  post, post details, reactions, comments and profile.
                </p>
              </div>
            </div>
            {/* <!-- illustration and title ends --> */}
            {/* <!-- login form --> */}
            <div class="card">
              <form class="border-b border-[#3F3F3F] pb-10 lg:pb-[30px]">
                {/* <!-- name --> */}
                <div class="form-control">
                  <label class="auth-label" for="name">
                    Name
                  </label>
                  <input class="auth-input" name="name" type="text" id="name" />
                </div>
                {/* <!-- email --> */}
                <div class="form-control">
                  <label class="auth-label" for="email">
                    Email
                  </label>
                  <input
                    class="auth-input"
                    name="email"
                    type="email"
                    id="email"
                  />
                </div>
                {/* <!-- password --> */}
                <div class="form-control">
                  <label class="auth-label" for="email">
                    Password
                  </label>
                  <input
                    class="auth-input"
                    name="password"
                    type="password"
                    id="password"
                  />
                </div>
                {/* <!-- confirm password --> */}
                <div class="form-control">
                  <label class="auth-label" for="confirmPassword">
                    Retype Password
                  </label>
                  <input
                    class="auth-input"
                    name="confirmPassword"
                    type="password"
                    id="confirmPassword"
                  />
                </div>
                {/* <!-- Submit --> */}
                <button
                  class="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
                  type="submit"
                >
                  Register
                </button>
              </form>
              <div class="py-4 lg:py-4">
                <p class="text-center text-xs text-gray-600/95 lg:text-sm">
                  Already have an account?
                  <a
                    class="hover:text-lwsGreen text-white transition-all hover:underline"
                    href="/login.html"
                  >
                    Login
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

export default RegistrationPage;
