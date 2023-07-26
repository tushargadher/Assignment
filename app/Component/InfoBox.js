import BagImg from "../../Images/Bag.png";
import StoreImg from "../../Images/Store.png";
import VisitorImg from "../../Images/Visitor.png";
import OrderImg from "../../Images/Order.png";
import Image from "next/image";
const TotalCount = () => {
  return (
    <>
      <div className="flex justify-between">
        {/* total sales */}
        <div className="bg-white h-[91px] w-[275px] rounded-[10px] flex items-center justify-evenly">
          <Image src={BagImg} />

          <div className=" w-[170px] h-[51px] flex flex-col justify-center">
            <span className="font-light text-xs">Total Sales</span>
            <span className="font-semibold text-[22px]"> &#36;2,456</span>
          </div>
        </div>

        {/* total expenses */}
        <div className="bg-white h-[91px] w-[275px] rounded-[10px] flex items-center justify-evenly">
          <Image src={StoreImg} />
          <div className=" w-[170px] h-[51px] flex flex-col justify-center">
            <span className="font-light text-xs">Total Expenses</span>
            <span className="font-semibold text-[22px]"> &#36;3,326</span>
          </div>
        </div>
        {/* total visitors */}
        <div className="bg-white h-[91px] w-[275px] rounded-[10px] flex items-center justify-evenly">
          <Image src={VisitorImg} />
          <div className=" w-[170px] h-[51px] flex flex-col justify-center">
            <span className="font-light text-xs">Total Visitors</span>
            <span className="font-semibold text-[22px]">5,325</span>
          </div>
        </div>
        {/* total Orders */}
        <div className="bg-white h-[91px] w-[275px] rounded-[10px] flex items-center justify-evenly">
          <Image src={OrderImg} />
          <div className=" w-[170px] h-[51px] flex flex-col justify-center">
            <span className="font-light text-xs">Total Ordesr</span>
            <span className="font-semibold text-[22px]">3,326</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default TotalCount;
