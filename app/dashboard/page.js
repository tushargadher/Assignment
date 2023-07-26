import Navbar from "@/app/Component/Navbar";
import LeftComponent from "../Component/LeftComponent";
import RightComponent from "../Component/RightComponent";
const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="h-[2252px] flex">
        <LeftComponent />
        <RightComponent />
      </div>
    </>
  );
};
export default Dashboard;
