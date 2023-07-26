import InnerNav from "./InnerNav";
import InfoBox from "./InfoBox";
import TableComponent from "./TableComponent";
const RightComponent = () => {
  return (
    <>
      <div className="bg-gray-100">
        <InnerNav />
        <div className="m-8">
          <InfoBox />
          <TableComponent />
        </div>
      </div>
    </>
  );
};

export default RightComponent;
