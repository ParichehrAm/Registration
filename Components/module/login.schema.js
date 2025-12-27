import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string().email("ایمیل معتبر نیست").required("ایمیل الزامی است"),

  password: yup
    .string()
    .min(6, "حداقل ۶ کاراکتر")
    .required("رمز عبور الزامی است"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "رمز عبور یکسان نیست")
    .required("تکرار رمز عبور الزامی است"),

  rememberMe: yup.boolean(),
});
