const Form = () => {
  return (
    <>
      <div>
        {/* first row */}
        <div class="w-[1160px] h-[70px] mt-6 mb-6 md:mb-0">
          <label class="text-neutral-800 text-sm font-light ">First Name</label>
          <input
            class="appearance-none block w-full bg-white border rounded-md py-3 px-4 mt-2 mb-3 leading-tight placeholder-neutral-800"
            type="text"
            placeholder="Placeholder Content"
          />
        </div>
        {/* second row */}
        <div class="w-[1160px] h-[70px] mt-6 mb-6 md:mb-0  flex justify-between">
          <div className="w-[360px] h-[70px] ">
            <label class="text-neutral-800 text-sm font-light ">Select</label>
            <select class=" w-full h-11 bg-white border rounded-md p-3 px-4 mt-1 mb-3 leading-tight">
              <option>Chose</option>
              <option>Chose 1</option>
              <option>Chose 2</option>
            </select>
          </div>
          <div className="w-[360px] h-[70px] ">
            <label class="text-neutral-800 text-sm font-light ">Mobile</label>
            <input
              class="appearance-none block w-full h-11 bg-white border rounded-md py-3 px-4 mt-1 mb-3 leading-tight placeholder-neutral-800"
              type="text"
              placeholder="Placeholder Content"
            />
          </div>
          <div className="w-[360px] h-[70px] ">
            <label class="text-neutral-800 text-sm font-light ">Mobile</label>
            <input
              class="appearance-none block w-full h-11 bg-white border rounded-md py-3 px-4 mt-1 mb-3 leading-tight placeholder-neutral-800"
              type="text"
              placeholder="Placeholder Content"
            />
          </div>
        </div>
        {/* third row */}
        <div class="w-[1160px] h-[70px] mt-6 mb-6 md:mb-0 flex justify-between">
          <div className="w-[560px] h-[70px] ">
            <label class="text-neutral-800 text-sm font-light ">Mobile</label>
            <input
              class="appearance-none block w-full h-11 bg-white border rounded-md py-3 px-4 mt-1 mb-3 leading-tight placeholder-neutral-800"
              type="text"
              placeholder="Placeholder Content"
            />
          </div>
          <div className="w-[560px] h-[70px] ">
            <label class="text-neutral-800 text-sm font-light ">Mobile</label>
            <input
              class="appearance-none block w-full h-11 bg-white border rounded-md py-3 px-4 mt-1 mb-3 leading-tight placeholder-neutral-800"
              type="text"
              placeholder="Placeholder Content"
            />
          </div>
        </div>
        {/* forth row */}
        <div class="w-[1160px] h-[70px] mt-6 mb-6">
          <label class="text-neutral-800 text-sm font-light ">Mobile</label>
          <textarea
            class="resizenone w-full h-[165px] bg-white border rounded-md py-3 px-4 mt-1 mb-3 leading-tight placeholder-neutral-800"
            type="text"
            placeholder="Placeholder Content"
          />
        </div>
      </div>
    </>
  );
};
export default Form;
