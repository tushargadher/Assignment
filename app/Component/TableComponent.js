import Table from "./Table";
import Pagination from "./Pagination";
const TableComponent = () => {
  return (
    <>
      <div className="h-[709px] w-[1220px] bg-white p-[30px] rounded-[10px] mt-[30px]">
        {/* from title */}
        <div>
          <span className="font-semibold text-[22px] text-neutral-800">
            Form title
          </span>
          <p className="font-light text-sm text-neutral-700">
            Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida
            augue enim.
          </p>
        </div>
        {/* alert  */}
        <div class="flex items-center p-4 my-5 text-sm border border-red-400 rounded-md bg-red-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-red-900 mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>

          <div>
            <span class="font-normal text-red-900">
              Senectus malesuada suspendisse bibendum elit amet vitae.
            </span>
          </div>
        </div>

        <Table />
        <Pagination />
      </div>
    </>
  );
};
export default TableComponent;
