import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const Form = () => {
  const [inputname, setinputname] = useState("");
  const [input_email, setInput_Email] = useState("");
  const [inputpassword, setInputPassword] = useState("");
  const [user, setUser] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`/api/register`, {
        name: inputname,
        email: input_email,
        pass: inputpassword,
      })
      .then((res) => {
        console.log(res);
        setinputname("");
        setInput_Email("");
        setInputPassword("");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form onSubmit={handleSubmit} method="post">
      <div className="heading text-center">
        <h3>Register to your account</h3>
        <p className="text-center">
          Already have an account?{" "}
          <Link href="/login">
            <a className="text-thm">Login</a>
          </Link>
        </p>
      </div>
      {/* End .heading */}

      <div className="form-group input-group ">
        <input
          value={inputname}
          type="text"
          onChange={(e) => setinputname(e.target.value)}
          className="form-control"
          required
          placeholder="User Name"
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="flaticon-user"></i>
          </div>
        </div>
      </div>
      {/* End .form-group */}

      <div className="form-group input-group  ">
        <input
          value={input_email}
          onChange={(e) => setInput_Email(e.target.value)}
          type="email"
          className="form-control"
          required
          placeholder="Email"
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fa fa-envelope-o"></i>
          </div>
        </div>
      </div>
      {/* End .form-group */}

      <div className="form-group input-group  ">
        <input
          name="pass"
          value={inputpassword}
          onChange={(e) => setInputPassword(e.target.value)}
          type="password"
          className="form-control"
          required
          placeholder="Password"
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="flaticon-password"></i>
          </div>
        </div>
      </div>
      {/* End .form-group */}

      <div className="form-group input-group  ">
        <input
          type="password"
          className="form-control"
          required
          placeholder="Re-enter password"
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="flaticon-password"></i>
          </div>
        </div>
      </div>
      {/* End .form-group */}

      <div className="form-group form-check custom-checkbox mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          required
          id="terms"
        />
        <label className="form-check-label form-check-label" htmlFor="terms">
          I have read and accept the Terms and Privacy Policy?
        </label>
      </div>
      {/* End .form-group */}

      <input
        type="submit"
        className="btn btn-log w-100 btn-thm"
        value="Register"
      />
      {/* login button */}

      <div className="divide">
        <span className="lf_divider">Or</span>
        <hr />
      </div>
      {/* devider */}

      <div className="row mt25">
        <div className="col-lg-6">
          <button
            type="submit"
            className="btn btn-block color-white bgc-fb mb0 w-100"
          >
            <i className="fa fa-facebook float-start mt5"></i> Facebook
          </button>
        </div>
        {/* End .col */}

        <div className="col-lg-6">
          <button
            type="submit"
            className="btn btn-block color-white bgc-gogle mb0 w-100"
          >
            <i className="fa fa-google float-start mt5"></i> Google
          </button>
        </div>
        {/* End .col */}
      </div>
      {/* more signin options */}
    </form>
  );
};

export default Form;
