//sign up form

const SignUp = (props) => {
  return (
    <div className="form w-full h-96 px-2 py-1 ">
      <h2 className="text-center mb-4 font-mono font-bold text-xl text-green-700">Start your journey..</h2>
      <form className="flex flex-col items-start w-full h-full px-10 md:px-2">
        <div className="username_div w-full flex flex-col my-2 lg:flex-row lg:justify-between">
          <div className="fname_div w-full my-3 lg:w-1/3 lg:mr-3">
            <input
              type="text"
              name="fname"
              className="fname_input input_field"
              placeholder="First Name"
            />
          </div>
          <div className="mname_div w-full my-3 lg:w-1/3 lg:mx-3">
            <input
              type="text"
              name="mname"
              className="mname_input input_field"
              placeholder="Middle Name"
            />
          </div>
          <div className="lname_div w-full my-3 lg:w-1/3 lg:mx-3">
            <input
              type="text"
              name="lname"
              className="lname_input input_field"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="email_div w-full my-2">
          <input
            type="email"
            name="email"
            className="email_input input_field"
            placeholder="Your Email"
          />
        </div>
        <div className="pass_div w-full my-2">
          <input
            type="password"
            name="password"
            className="pass_input input_field"
            placeholder="Strong Password"
          />
        </div>
        <div className="button_div w-full my-2">
          <button className="w-full border border-green-500 bg-green-100">
            Register
          </button>
        </div>
        <div className="w-full mt-6">
          <p className="text-center">
            Already registered ?{" "}
            <span className="font-bold font-mono hover:cursor-pointer hover:text-green-400" onClick={props.onChangeForm}>
              Sign In
            </span>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
