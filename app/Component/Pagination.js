const Pagination = () => {
  return (
    <>
      <nav className="mt-5 flex justify-center">
        <ul class="flex items-center space-x-px h-9 text-sm">
          {/* pre */}
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3  h-9 leading-tight text-neutral-800 bg-white "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-9 leading-tight text-neutral-800 bg-white border border-neutral-400 rounded-[5px] mr-1 "
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-9 leading-tight text-neutral-800 bg-white border border-neutral-400 rounded-[5px]  mr-1"
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-9 leading-tight text-neutral-800 bg-white border border-neutral-400 rounded-[5px] mr-1 "
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-9 leading-tight text-neutral-800 bg-white border border-neutral-400 rounded-[5px] mr-1 "
            >
              4
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-9 leading-tight text-neutral-800 bg-white border border-neutral-400 rounded-[5px] mr-1"
            >
              5
            </a>
          </li>
          {/* next */}
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-9 leading-tight text-neutral-800  bg-white "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Pagination;
