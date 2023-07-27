"use client"; //by default all component in nextjs is server componet so using this we can make this component clinet componet
import LoginImg from "../loginImg.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Login = () => {
  const { push } = useRouter();
  return (
    <>
      {/* small device */}
      <div className="lg:hidden container h-screen w-screen bg-slate-100 flex justify-center items-center">
        {/* inner box */}
        <div className="overflow-hidden h-64 rounded-[10px] flex relative bg-white">
          {/* left side image*/}
          <div className="h-full w-1/2">
            <Image src={LoginImg} alt="mountain" className="h-full" />
          </div>
          {/* right side form */}
          <div className="w-1/2 p-2">
            <div className="mt-1 mb-2">
              <p className="text-xs">Login</p>
              <p className="text-[8px]">Donec tortor quam at duis tortor.</p>
            </div>
            <div>
              <div className="mb-1">
                <label>
                  <span class="block text-[10px] font-medium  text-neutral-800">
                    E-mail
                  </span>
                  <input
                    type="email"
                    value="Placeholder Content"
                    class="mt-1 block w-full px-1  bg-white border border-slate-300 rounded-sm text-sm shadow-sm placeholder-slate-400  text-neutral-300"
                  />
                </label>
              </div>
              <div>
                <label>
                  <span class="block text-[10px] font-medium  text-neutral-800">
                    Password
                  </span>
                  <input
                    type="email"
                    value="Placeholder Content"
                    class="mt-1 block w-full px-1  bg-white border border-slate-300 rounded-sm text-sm shadow-sm placeholder-slate-400 text-neutral-300"
                  />
                </label>
              </div>
              <div className="flex  justify-end flex-row mt-1 mb-2">
                <span className="text-[10px] text-neutral-600 font-semibold">
                  Forgot password?
                </span>
              </div>
              <button
                class="bg-blue-600 hover:bg-blue-700 text-white py-1 px-4 rounded-[5px] w-full text-[10px] font-medium "
                onClick={() => {
                  push("/dashboard", undefined, { shallow: true });
                }}
              >
                Login
              </button>
              <div>
                <div className="my-2 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-200 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-200">
                  <p class="mx-4 mb-0 text-center text-neutral-500 text-[10px]">
                    or
                  </p>
                </div>
                <button class="border border-neutral-600 bg-white text-neutral-600 py-1 px-4 rounded w-full text-[10px] font-medium ">
                  Register now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* desktop view */}
      <div className="hidden lg:flex container h-screen bg-slate-100 justify-center items-center">
        {/* inner box */}

        <div className="overflow-hidden w-[900px] h-[564px] rounded-[10px] flex relative bg-white">
          {/* left side image*/}
          <div className=" h-full w-[50%] ">
            <Image src={LoginImg} alt="mountain" />
          </div>
          {/* right side form */}
          <div className=" h-[484px] w-[370px] bg-white absolute top-[40px] left-[490px] flex flex-col justify-around ">
            <div className=" h-[57px] w-[265px] mb-[20px]">
              <h1 className="text-[22px] font-semibold">Login</h1>
              <span className="text-[16px]">
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
                <span class="block text-sm font-medium  text-[14px] text-neutral-800">
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
