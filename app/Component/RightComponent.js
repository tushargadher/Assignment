import InnerNav from "./InnerNav";
import InfoBox from "./InfoBox";
import TableComponent from "./TableComponent";
import FormComponent from "./FormComponent";
const RightComponent = () => {
  return (
    <>
      <div className="bg-gray-100">
        <InnerNav />
        <div className="m-8">
          <InfoBox />
          <TableComponent />
          <FormComponent />
        </div>
      </div>
    </>
  );
};

export default RightComponent;
