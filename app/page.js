import LoginImg from "../loginImg.png";
import Image from "next/image";
const Login = () => {
  return (
    <>
      <div className="container h-screen bg-slate-100 flex justify-center items-center ">
        {/* inner box */}

        <div className=" w-[900px] h-[564px] rounded-[10px] flex relative bg-white">
          {/* left side image*/}
          <div className=" h-full w-[50%]">
            <Image src={LoginImg} alt="mountain" />
          </div>
          {/* right side form */}
          <div className=" h-[484px] w-[370px] bg-white absolute top-[40px] left-[490px] flex flex-col justify-around">
            <div className=" h-[57px] w-[261px]">
              <h1 className="text-[22px]">Login</h1>
              <span className="text-[16px]">
                Donec tortor quam at duis tortor.
              </span>
            </div>
            <div className=" h-[265px] w-[370px]">
              {/* input email */}
              <label class="block  h-[70px] mb-[5px]">
                <span class="block text-sm font-medium text-slate-700 text-[14px] text-neutral-800">
                  E-mail
                </span>
                <input
                  type="text"
                  value="Placeholder Content"
                  class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 text-neutral-300"
                />
              </label>
              {/* input password */}
              <label class="block  h-[70px] mb-[15px]">
                <span class="block text-sm font-medium text-slate-700 text-[14px] text-neutral-800">
                  Password
                </span>
                <input
                  type="password"
                  value="Placeholder Content"
                  class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 text-neutral-300"
                />
              </label>
              {/* forget password */}
              <div className="flex  justify-end flex-row mb-[25px]">
                <span className="text-[14px] text-neutral-600">
                  Forgot password?
                </span>
              </div>
              {/* login button */}
              <button class="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded w-[370px] text-[16px] font-medium">
                Login
              </button>
            </div>
            <div className=" h-[82px] w-[370px]">
              <h1>Login</h1>
              <span>Donec tortor quam at duis tortor.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
