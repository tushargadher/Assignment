import LoginImg from "../loginImg.png";
import Image from "next/image";
const Login = () => {
  return (
    <>
      <div className="overflow-hidden container h-screen bg-slate-100 flex justify-center items-center">
        {/* inner box */}

        <div className="border-solid border-2 border-sky-500 w-[900px] h-[564px] rounded-[10px] flex relative">
          {/* left side image*/}
          <div className=" h-full w-[50%]">
            <Image src={LoginImg} alt="mountain" />
          </div>
          {/* right side form */}
          <div className="border-solid border-2 border-black h-[484px] w-[370px] bg-white absolute top-[40px] left-[490px] flex flex-col justify-items-center">
            <div className="border-solid border-2 border-black h-[57px] w-[261px]">
              <h1 className="text-[22px]">Login</h1>
              <span className="text-[16px]">Donec tortor quam at duis tortor.</span>
            </div>
            <div className="border-solid border-2 border-black h-[265px] w-[370px]">
              <h1>Login</h1>
              <span>Donec tortor quam at duis tortor.</span>
            </div>
            <div className="border-solid border-2 border-black h-[82px] w-[370px]">
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
