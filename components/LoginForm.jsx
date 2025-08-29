import { useForm } from "react-hook-form";
import { useState } from "react";
import { Toast } from "./Toast";
import api from "../services/config";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../schemas/loginSchema";
import { setCookie } from "../utils/cookie";
import Link from "next/link";
import { useRouter } from "next/router";

function RegistrationForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 2000);
  };

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const onSubmit = async (data) => {
    try {
      const res = await api.post("auth/login", data);
      setCookie("token", res.data.token);
      showToast(
        "ورود با موفقیت انجام شد و در حال انتقال به پنل کاربری !",
        "success"
      );
      setTimeout(() => {
        router.push("/admin/dashboard");
      }, 2000);
    } catch (err) {
      if (err.response?.data?.message === "Invalid credentials") {
        showToast("نام کاربری یا رمز عبور اشتباه است", "error");
      }
    }
  };

  return (
    <form className="formClass" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col justify-start items-center">
        <img className="w-[80px]" src="/img/BotoStart.png" alt="botostart" />
        <span className="mt-5 mb-10 text-2xl text-[rgba(40,40,40,1)]">
          فرم ثبت نام
        </span>
      </div>

      <input
        className="inputClass"
        {...register("username")}
        placeholder="نام کاربری"
      />

      <p className="text-sm min-h-[35px] text-red-400 self-start">
        {errors.username?.message}
      </p>

      <div style={{ position: "relative" }}>
        <input
          className="inputClass"
          type={showPassword ? "text" : "password"}
          {...register("password")}
          placeholder="رمز عبور"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-3"
        >
          {showPassword ? (
            <img className="w-[25px]" src="/svg/eye.svg"></img>
          ) : (
            <img className="w-[25px]" src="/svg/eye-off.svg"></img>
          )}
        </button>
      </div>
      <p className="text-sm min-h-[35px] text-red-400 self-start">
        {errors.password?.message}
      </p>

      <input type="submit" value="ورود" className="btnClass !bg-[rgba(85,163,240,1)]" />
      {toast ? (
        <Toast message={toast.message} type={toast.type} />
      ) : (
        <Link
          className="text-sm self-start text-[rgba(58,139,237,1)] "
          href={"/auth/register"}
        >
          ایجاد حساب کاربری!
        </Link>
      )}
    </form>
  );
}

export default RegistrationForm;
