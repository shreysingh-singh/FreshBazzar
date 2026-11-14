import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  LockKeyhole,
  Leaf,
  ArrowRight,
  Eye,
  EyeOff,
  Phone,
  ShieldCheck,
} from "lucide-react";

import Signin from "../assets/Signin.png";

function Auth() {
  const location = useLocation();
  const navigate = useNavigate();

  // Determine whether the current page is Login or Signup
  const isSignup = location.pathname === "/signup";

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  // Disable body scrolling
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      // Connect your signup API here
      console.log("Signup:", formData);
    } else {
      // Connect your login API here
      console.log("Login:", {
        email: formData.email,
        password: formData.password,
      });
    }
  };

  const inputWrapper =
    "flex h-12 items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 transition duration-300 focus-within:border-[#399b25] focus-within:ring-2 focus-within:ring-[#399b25]/10";

  const inputStyle =
    "h-full w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400";

  const labelStyle = "mb-2 block text-sm font-semibold text-gray-700";

  return (
    <div className="flex h-screen w-full flex-col overflow-hidden bg-[#fcfdfb] lg:flex-row">
      {/* LEFT SIDE - IMAGE */}
      <div className="relative hidden h-screen w-1/2 overflow-hidden lg:block">
        <img
          src={Signin}
          alt="FreshBazzar fresh fruits and vegetables"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

        <div className="absolute bottom-14 left-12 right-12">
          <div className="mb-3 flex items-center gap-2 text-white">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
              <Leaf size={20} />
            </div>

            <span className="text-xl font-bold tracking-tight">
              FreshBazzar
            </span>
          </div>

          <h1 className="max-w-lg text-4xl font-bold leading-tight text-[#eef7e9] xl:text-5xl">
            Fresh choices.
            <br />
            <span className="text-[#baf49b]">Healthier</span> living.
          </h1>

          <p className="mt-3 max-w-md text-sm leading-6 text-white/85">
            Bring home the goodness of farm-fresh fruits and vegetables,
            carefully selected just for you.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE - FORM */}
      <div className="flex h-screen w-full flex-1 items-center justify-center overflow-y-auto px-5 py-6 sm:px-10 lg:w-1/2 lg:px-12 xl:px-20">
        <div className="w-full max-w-md">
          {/* Mobile Brand */}
          <div className="mb-5 flex items-center justify-center gap-2 lg:hidden">
            <Leaf size={23} className="text-[#399b25]" />
            <span className="text-xl font-bold text-gray-900">
              Fresh<span className="text-[#399b25]">Bazzar</span>
            </span>
          </div>

          {/* Heading */}
          <div className="mb-7 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#eef7e9] px-3 py-1.5 text-[11px] font-semibold tracking-wide text-[#399b25] mt-15">
              <Leaf size={13} />
              {isSignup ? "JOIN OUR FRESH COMMUNITY" : "WELCOME BACK"}
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {isSignup ? "Create an account" : "Sign in to your account"}
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              {isSignup
                ? "Join FreshBazzar and enjoy fresh groceries delivered to your door."
                : "Welcome back! Sign in to continue shopping fresh and healthy."}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Signup-only fields */}
            {isSignup && (
              <>
                <div>
                  <label htmlFor="fullName" className={labelStyle}>
                    Full name
                  </label>

                  <div className={inputWrapper}>
                    <User size={18} className="shrink-0 text-gray-400" />

                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      autoComplete="name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className={labelStyle}>
                    Phone number
                  </label>

                  <div className={inputWrapper}>
                    <Phone size={18} className="shrink-0 text-gray-400" />

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className={inputStyle}
                    />
                  </div>
                </div>
              </>
            )}

            {/* Email */}
            <div>
              <label htmlFor="email" className={labelStyle}>
                Email address
              </label>

              <div className={inputWrapper}>
                <Mail size={18} className="shrink-0 text-gray-400" />

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputStyle}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className={labelStyle}>
                Password
              </label>

              <div className={inputWrapper}>
                <LockKeyhole size={18} className="shrink-0 text-gray-400" />

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder={
                    isSignup ? "Create a password" : "Enter your password"
                  }
                  autoComplete={isSignup ? "new-password" : "current-password"}
                  minLength={isSignup ? 8 : undefined}
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className={inputStyle}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="shrink-0 text-gray-400 hover:text-[#399b25]"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Confirm Password - Signup only */}
            {isSignup && (
              <div>
                <label htmlFor="confirmPassword" className={labelStyle}>
                  Confirm password
                </label>

                <div className={inputWrapper}>
                  <LockKeyhole size={18} className="shrink-0 text-gray-400" />

                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    autoComplete="new-password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className={inputStyle}
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    aria-label={
                      showConfirmPassword ? "Hide password" : "Show password"
                    }
                    className="shrink-0 text-gray-400 hover:text-[#399b25]"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Login-only options */}
            {!isSignup && (
              <div className="flex items-center justify-between gap-3">
                <label className="flex cursor-pointer items-center gap-2">
                  <input type="checkbox" className="h-4 w-4 accent-[#399b25]" />
                  <span className="text-xs text-gray-500">Remember me</span>
                </label>

                <Link
                  to="/forgot-password"
                  className="text-xs font-semibold text-[#399b25] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
            )}

            {/* Signup-only terms */}
            {isSignup && (
              <label className="flex items-start gap-2 pt-1">
                <input
                  type="checkbox"
                  required
                  className="mt-0.5 h-4 w-4 accent-[#399b25]"
                />

                <span className="text-xs leading-5 text-gray-500">
                  I agree to the Terms of Service and Privacy Policy.
                </span>
              </label>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#399b25] text-sm font-bold text-white shadow-md shadow-green-900/10 transition duration-300 hover:-translate-y-0.5 hover:bg-[#318820] hover:shadow-lg"
            >
              {isSignup ? "Create account" : "Sign in"}

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </form>

          {/* Switch Login / Signup */}
          <p className="mt-6 text-center text-sm text-gray-500">
            {isSignup ? "Already have an account?" : "Don't have an account?"}

            <button
              type="button"
              onClick={() => {
                setFormData({
                  fullName: "",
                  email: "",
                  phone: "",
                  password: "",
                  confirmPassword: "",
                });

                setShowPassword(false);
                setShowConfirmPassword(false);

                navigate(isSignup ? "/login" : "/signup");
              }}
              className="ml-1 font-bold text-[#399b25] transition hover:text-[#28791b] hover:underline"
            >
              {isSignup ? "Sign in" : "Create an account"}
            </button>
          </p>

          {/* Security */}
          <div className="mt-7 flex items-center justify-center gap-2 border-t border-gray-100 pt-5">
            <ShieldCheck size={14} className="text-[#399b25]" />
            <p className="text-[11px] text-gray-400">
              Your information is safe and secure with FreshBazzar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
