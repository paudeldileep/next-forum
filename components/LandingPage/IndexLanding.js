//first grreting page ,options to sign up or sign in
import Image from 'next/image';
import { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

const IndexLanding = () => {

  const[isSignIn,setIsSignIn]=useState(false);

  const handleFormType=()=>{
    setIsSignIn(!isSignIn);
  }

  return (
    <div className="min-h-[90vh] w-full rounded-sm p-2 flex flex-col items-center md:flex-row-reverse ">
      <div className="w-full md:w-3/5 h-full">
        {/* signup form or sign in form */}
        {isSignIn ? <SignIn onChangeForm={handleFormType}/>:<SignUp onChangeForm={handleFormType}/>}
      </div>
      <div className="invisible min-h-[90vh] md:visible md:w-2/5 border-r-2 border-green-600">
        <Image alt="signup_art" src="/signup.png" className="" width="100%" height="100%" layout="responsive" />
      </div>
    </div>
  );
};

export default IndexLanding;
