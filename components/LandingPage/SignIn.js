//sign in page

const SignIn = (props) => {
  return (
    <div className="form w-full px-2 py-1">
      <h2 className="text-center mb-4 font-mono font-bold text-xl text-green-700">Continue your journey..</h2>
      <form className="w-1/2 m-auto">
        <div className="signin_form_div w-full flex flex-col justify-center items-center">
            <input className="input_field my-3" type="email" name="email" placeholder="Your email"/>
            <input className="input_field my-3" type="password" name="pass" placeholder="Your password"/>
            <button className="my-3 w-full border border-green-500 bg-green-100" type="submit">Sign In</button>
        </div>

      <div className="w-full mt-6">
        <p className="text-center">
          New Here ?{" "}
          <span
            className="font-bold font-mono hover:cursor-pointer hover:text-green-400"
            onClick={props.onChangeForm}
          >
            Sign Up
          </span>{" "}
        </p>
      </div>
      </form>
      
    </div>
  );
};

export default SignIn;
