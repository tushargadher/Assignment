"use client"; //by default all component in nextjs is server componet so using this we can make this component clinet componet
import LoginImg from "../loginImg.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Login = () => {
  const { push } = useRouter();
  return (
    <>
      <div className="container h-screen bg-green-500 flex  justify-center items-center lg:h-screen lg:bg-slate-100">
        {/* inner box */}

        <div className="overflow-hidden lg:w-[900px] lg:h-[564px] rounded-[10px] flex relative bg-white">
          {/* left side image*/}
          <div className=" h-96 lg:w-[50%] lg:h-full">
            <Image src={LoginImg} alt="mountain" />
          </div>
          {/* right side form */}
          <div className=" bg-white h-96 lg:h-[484px] lg:w-[370px] lg:absolute  lg:top-[40px]  flex flex-col justify-around lg:left-[490px]">
            <div className=" lg:h-[57px] lg:w-[265px] lg:mb-[20px]">
              <h1 className="lg:text-[22px] font-semibold">Login</h1>
              <span className=" text-xs lg:text-[16px]">
                Donec tortor quam at duis tortor.
              </span>
            </div>

            <div className=" h-[265px] w-[370px]">
              {/* input email */}
              <label class="block  h-[70px] mb-[5px]">
                <span class="block text-sm font-medium  text-[14px] text-neutral-800">
                  E-mail
                </span>
                <input
                  type="email"
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
                  type="text"
                  value="Placeholder Content"
                  class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 text-neutral-300"
                />
              </label>
              {/* forget password */}
              <div className="flex  justify-end flex-row mb-[25px]">
                <span className="text-[14px] text-neutral-600 font-semibold">
                  Forgot password?
                </span>
              </div>
              {/* login button */}
              <button
                class="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded w-[370px] text-[16px] font-medium "
                onClick={() => {
                  push("/dashboard", undefined, { shallow: true });
                }}
              >
                Login
              </button>
            </div>
            <div className=" h-[82px] w-[370px]">
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-200 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-200">
                <p class="mx-4 mb-0 text-center text-neutral-500 text-sm">or</p>
              </div>
              <button class="border border-neutral-600 bg-white text-neutral-600 py-2 px-4 rounded w-[370px] text-[16px] font-medium ">
                Register now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
