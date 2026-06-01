import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import toast from "react-hot-toast";

import { registerUser } from "../services/authService";

const Register = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const payload = {
        name: data.name,
        email: data.email,
        password: data.password,
      };

      await registerUser(payload);

      toast.success("Account created successfully");

      navigate("/login");
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Side */}

      <div className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-br from-indigo-600 to-blue-700 text-white p-10">
        <h1 className="text-5xl font-bold mb-6">
          Task Manager
        </h1>

        <p className="text-lg text-center max-w-md">
          Create an account and start organizing your
          projects, tasks, and deadlines efficiently.
        </p>
      </div>

      {/* Right Side */}

      <div className="flex items-center justify-center p-6 bg-slate-50">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-center mb-2">
            Create Account
          </h2>

          <p className="text-center text-slate-500 mb-8">
            Start managing your tasks today
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >
            {/* Name */}

            <div>
              <label className="block mb-2 font-medium">
                Name
              </label>

              <div className="relative">
                <FiUser className="absolute left-3 top-4 text-slate-400" />

                <input
                  type="text"
                  placeholder="Enter name"
                  className="w-full border rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("name", {
                    required: "Name is required",
                  })}
                />
              </div>

              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}

            <div>
              <label className="block mb-2 font-medium">
                Email
              </label>

              <div className="relative">
                <FiMail className="absolute left-3 top-4 text-slate-400" />

                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full border rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("email", {
                    required: "Email is required",
                  })}
                />
              </div>

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}

            <div>
              <label className="block mb-2 font-medium">
                Password
              </label>

              <div className="relative">
                <FiLock className="absolute left-3 top-4 text-slate-400" />

                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full border rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message:
                        "Password must be at least 6 characters",
                    },
                  })}
                />
              </div>

              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password */}

            <div>
              <label className="block mb-2 font-medium">
                Confirm Password
              </label>

              <div className="relative">
                <FiLock className="absolute left-3 top-4 text-slate-400" />

                <input
                  type="password"
                  placeholder="Confirm password"
                  className="w-full border rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("confirmPassword", {
                    required:
                      "Please confirm your password",
                    validate: (value) =>
                      value === password ||
                      "Passwords do not match",
                  })}
                />
              </div>

              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <button
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
            >
              {loading
                ? "Creating Account..."
                : "Create Account"}
            </button>
          </form>

          <p className="text-center mt-6 text-slate-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 font-semibold"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;