import Accordion from "./Accordion";
const LeftComponent = () => {
  return (
    <>
      {/* new item */}
      <div className="h-[2252px] w-[260px] bg-neutral-800">
        <div className="h-[77px] flex items-center justify-center">
          <button class="bg-neutral-200 text-neutral-900 py-2 px-4 rounded h-[47px] w-[200px] text-[18px]  flex items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 mr-1 font-medium"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <span className="font-medium">New Item</span>
          </button>
        </div>
        {/* accordion */}
        <Accordion title="Dashboard" />
        <Accordion title="Application" />
        <Accordion title="Elements" />
        <Accordion title="Forms" />
        <Accordion title="Plugins" />
        <Accordion title="Elements" />
        <Accordion title="Datagrid" />
        <Accordion title="Settings" />
      </div>
    </>
  );
};

export default LeftComponent;
