import Form from "./Form";
const FormComponent = () => {
  return (
    <>
      <div className="h-[653px] w-[1220px] bg-white p-[30px] rounded-[10px] mt-[30px]">
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
          <button class="border border-amber-600 bg-amber-200 text-neutral-800 rounded w-[101px] h-[35px] text-base font-normal mt-4 mr-3">
            English
          </button>

          <button class="border border-neutral-300 bg-white text-neutral-800 rounded w-[101px] h-[35px] text-base font-normal ">
            Turkish
          </button>
        </div>
        {/* form */}
        <Form />
      </div>
    </>
  );
};
export default FormComponent;
