const FormGroup = () => {
  return (
    <>
      <div className="h-[598px] w-[1220px]  mt-[30px] flex justify-between">
        <div className="h-[598px] w-[810px] bg-white p-[30px] rounded-[10px] ">
          <div>
            <span className="font-semibold text-[22px] text-neutral-800">
              Form title
            </span>
            <p className="font-light text-sm text-neutral-700">
              Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida
              augue enim.
            </p>
          </div>
          <div>
            {/* first row */}
            <div class="w-[740px] h-[70px] mt-6 mb-6 md:mb-0">
              <label class="text-neutral-800 text-sm font-light ">
                First Name
              </label>
              <input
                class="appearance-none block w-full bg-white border rounded-md py-3 px-4 mt-2 mb-3 leading-tight placeholder-neutral-800"
                type="text"
                placeholder="Placeholder Content"
              />
            </div>
            {/* second row */}
            <div class="w-[1160px] h-[70px] mt-6 mb-6 md:mb-0  flex justify-between">
              <div className="w-[740px] h-[70px] ">
                <label class="text-neutral-800 text-sm font-light ">
                  Select
                </label>
                <select class=" w-full h-11 bg-white border rounded-md p-3 px-4 mt-1 mb-3 leading-tight">
                  <option>Chose</option>
                  <option>Chose 1</option>
                  <option>Chose 2</option>
                </select>
              </div>
            </div>
            {/* third row */}
            <div class="w-[740px] h-[70px] mt-6 mb-6 md:mb-0 flex justify-between">
              <div className="w-[360px] h-[70px] ">
                <label class="text-neutral-800 text-sm font-light ">
                  Mobile
                </label>
                <input
                  class="appearance-none block w-full h-11 bg-white border rounded-md py-3 px-4 mt-1 mb-3 leading-tight placeholder-neutral-800"
                  type="text"
                  placeholder="Placeholder Content"
                />
              </div>
              <div className="w-[360px] h-[70px] ">
                <label class="text-neutral-800 text-sm font-light ">
                  Mobile
                </label>
                <input
                  class="appearance-none block w-full h-11 bg-white border rounded-md py-3 px-4 mt-1 mb-3 leading-tight placeholder-neutral-800"
                  type="text"
                  placeholder="Placeholder Content"
                />
              </div>
            </div>
            {/* forth row */}
            <div class="w-[740px] h-[70px] mt-6 mb-6">
              <label class="text-neutral-800 text-sm font-light ">Mobile</label>
              <textarea
                class="resizenone w-full h-[165px] bg-white border rounded-md py-3 px-4 mt-1 mb-3 leading-tight placeholder-neutral-800"
                type="text"
                placeholder="Placeholder Content"
              />
            </div>
          </div>
        </div>
        {/* form 2 */}
        <div className="h-[548px] w-[340px] bg-white p-[30px] rounded-[10px] ">
          <div>
            <span className="font-semibold text-[22px] text-neutral-800">
              Form title
            </span>
          </div>
          <div>
            {/* first row */}
            <div class="w-[280px] h-[70px] mt-6 mb-6 md:mb-0">
              <label class="text-neutral-800 text-sm font-light ">
                First Name
              </label>
              <input
                class="appearance-none block w-full bg-white border rounded-md py-3 px-4 mt-2 mb-3 leading-tight placeholder-neutral-800"
                type="text"
                placeholder="Placeholder Content"
              />
            </div>
            {/* second row */}
            <div class="w-[280px] h-[70px] mt-6 mb-6 md:mb-0">
              <label class="text-neutral-800 text-sm font-light ">Select</label>
              <select class=" w-full h-11 bg-white border rounded-md p-3 px-4 mt-1 mb-3 leading-tight">
                <option>Chose</option>
                <option>Chose 1</option>
                <option>Chose 2</option>
              </select>
            </div>
            {/* third row */}
            <div class="w-[280px] h-[191px] mt-6 mb-4">
              <label class="text-neutral-800 text-sm font-light ">Mobile</label>
              <textarea
                class="resizenone w-full h-[165px] bg-white border rounded-md py-3 px-4 mt-1 mb-3 leading-tight placeholder-neutral-800"
                type="text"
                placeholder="Placeholder Content"
              />
            </div>
            {/* forth row */}
            <button className="w-[280px] h-[44px] mb-6 bg-blue-600 text-base text-white rounded-[5px]">
              Button title
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default FormGroup;
