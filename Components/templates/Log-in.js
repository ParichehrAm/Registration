import Link from "next/link";
import styles from "./Login.module.css";
import { useLoginForm } from "../templates/useLoginForm";

function Login() {
  const { register, handleSubmit, errors, onSubmit } = useLoginForm();

  return (
    <div className={styles.container}>
      <div className={styles.mainPage}>
        <div className={styles.paragraph}>
          <h1>Welcome Back</h1>
          <p>Please Enter Your Details!</p>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* EMAIL */}
            <label className={styles.formField}>
              Email
              <input
                type="email"
                placeholder="Enter Your Email"
                {...register("email")}
              />
              <p className={styles.error}>{errors.email?.message}</p>
            </label>

            {/* PASSWORD */}
            <label className={styles.formField}>
              Password
              <input
                type="password"
                placeholder="*******"
                {...register("password")}
              />
              <p className={styles.error}>{errors.password?.message}</p>
            </label>

            {/* CONFIRM PASSWORD */}
            <label className={styles.formField}>
              Confirm Password
              <input type="password" {...register("confirmPassword")} />
              <p className={styles.error}>{errors.confirmPassword?.message}</p>
            </label>

            {/* REMEMBER ME */}
            <div className={styles.rem}>
              <label className={styles.check}>
                <input type="checkbox" {...register("rememberMe")} />
                Remember me
              </label>

              <Link href="/">Forgot password?</Link>
            </div>

            <button type="submit" className={styles.submitBtn} >
              Sign In
            </button>

            <p className={styles.signup}>
              Don't have an account? <Link href="/">Sign up</Link>
            </p>
          </form>
        </div>

        <img src="/Right Side.png" className={styles.sideImage}/>
      </div>
    </div>
  );
}

export default Login;
