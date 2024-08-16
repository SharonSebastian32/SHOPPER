import "../Pages/CSS/loginsignup.css";

const LoginSignup = () => {
  return (
    <div className="login_signup">
      <div className="login_signup_container">
        <h1>Sign Up</h1>
        <div className="loginsignup_field">
          <input type="text" name="" id="" placeholder="Your Name" />
          <input type="email" name="" id="" placeholder="Your email" />
          <input type="password" name="" id="" placeholder="password" />
        </div>
        <button>Continue</button>
        <p className="login_signup_login">
          Already have an account? <span>Login</span>{" "}
        </p>
        <div className="loginsignup_agree">
          <input type="checkbox" name="" id="" />

          <p>By Continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
