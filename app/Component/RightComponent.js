import InnerNav from "./InnerNav";
import InfoBox from "./InfoBox";
const RightComponent = () => {
  return (
    <>
      <div className="bg-gray-100">
        <InnerNav />
        <div className="m-8">
          <InfoBox />
        </div>
      </div>
    </>
  );
};

export default RightComponent;
