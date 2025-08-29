import * as yup from "yup";

const loginSchema = yup.object({
  username: yup
    .string()
    .required("نام کاربری الزامی است")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
      "نام کاربری باید حداقل ۶ کاراکتر و شامل حروف و عدد باشد"
    ),

  password: yup
    .string()
    .required("رمز عبور الزامی است")
    .min(8, "رمز عبور باید حداقل ۸ کاراکتر و انگلیسی باشد")
    .matches(/[A-Z]/, "رمز عبور باید حداقل یک حرف بزرگ داشته باشد")
    .matches(/[a-z]/, "رمز عبور باید حداقل یک حرف کوچک داشته باشد")
    .matches(/[0-9]/, "رمز عبور باید حداقل یک عدد داشته باشد")
    .matches(/[^a-zA-Z0-9]/, "رمز عبور باید حداقل یک کاراکتر خاص داشته باشد"),
});

export { loginSchema };
