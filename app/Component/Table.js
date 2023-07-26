import Image from "next/image";
import Save from "../../Images/Save.png";
const Table = () => {
  return (
    <>
      <div class="relative overflow-x-auto">
        <table class="w-[1160px] h-[443px] text-sm text-left text-gray-500 border-2 border-neutral-200">
          <thead class="text-xs text-gray-700 bg-neutral-300">
            <tr className="h-[47px]">
              <th scope="col" class="px-6 py-3 border-r-2 border-neutral-200">
                Table Title
              </th>
              <th scope="col" class="px-6 py-3 border-r-2 border-neutral-200">
                Table Title
              </th>
              <th scope="col" class="px-6 py-3 border-r-2 border-neutral-200">
                Table Title
              </th>
              <th scope="col" class="px-6 py-3 w-[180px] ">
                Table Title
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b h-11">
              <th
                scope="row"
                class="px-6  font-medium text-gray-900 whitespace-nowrap border-r-2 border-neutral-200 h-11"
              >
                Table Content
              </th>
              <td class="px-6  border-r-2 border-neutral-200 h-11">
                Table Content
              </td>
              <td class="px-6  border-r-2 border-neutral-200 h-11">
                Table Content
              </td>
              <td class="px-6  flex h-11 items-center ">
                <button className="bg-blue-700 w-[55px] h-[24px] text-white text-xs rounded-[3px] flex items-center justify-evenly mr-1">
                  <Image src={Save} />
                  Edit
                </button>
                <button className="bg-amber-600 w-[72px] h-[24px] text-white text-xs rounded-[3px] flex items-center justify-evenly">
                  <Image src={Save} />
                  Delete
                </button>
              </td>
            </tr>

            <tr class="bg-neutral-100 border-b h-11">
              <th
                scope="row"
                class="px-6  font-medium text-gray-900 whitespace-nowrap border-r-2 border-neutral-200 h-11"
              >
                Table Content
              </th>
              <td class="px-6  border-r-2 border-neutral-200 h-11">
                Table Content
              </td>
              <td class="px-6  border-r-2 border-neutral-200 h-11">
                Table Content
              </td>
              <td class="px-6 flex h-11 items-center ">
                <button className="bg-blue-700 w-[55px] h-[24px] text-white text-xs rounded-[3px] flex items-center justify-evenly mr-1">
                  <Image src={Save} />
                  Edit
                </button>
                <button className="bg-amber-600 w-[72px] h-[24px] text-white text-xs rounded-[3px] flex items-center justify-evenly">
                  <Image src={Save} />
                  Delete
                </button>
              </td>
            </tr>
            <tr class="bg-white border-b h-11">
              <th
                scope="row"
                class="px-6  font-medium text-gray-900 whitespace-nowrap border-r-2 border-neutral-200"
              >
                Table Content
              </th>
              <td class="px-6  border-r-2 border-neutral-200">Table Content</td>
              <td class="px-6  border-r-2 border-neutral-200">Table Content</td>
              <td class="px-6 flex h-11 items-center ">
                <button className="bg-blue-700 w-[55px] h-[24px] text-white text-xs rounded-[3px] flex items-center justify-evenly mr-1">
                  <Image src={Save} />
                  Edit
                </button>
                <button className="bg-amber-600 w-[72px] h-[24px] text-white text-xs rounded-[3px] flex items-center justify-evenly">
                  <Image src={Save} />
                  Delete
                </button>
              </td>
            </tr>
            <tr class="bg-neutral-100 border-b h-11">
              <th
                scope="row"
                class="px-6  font-medium text-gray-900 whitespace-nowrap border-r-2 border-neutral-200"
              >
                Table Content
              </th>
              <td class="px-6  border-r-2 border-neutral-200">Table Content</td>
              <td class="px-6  border-r-2 border-neutral-200">Table Content</td>
              <td class="px-6 flex h-11 items-center ">
                <button className="bg-blue-700 w-[55px] h-[24px] text-white text-xs rounded-[3px] flex items-center justify-evenly mr-1">
                  <Image src={Save} />
                  Edit
                </button>
                <button className="bg-amber-600 w-[72px] h-[24px] text-white text-xs rounded-[3px] flex items-center justify-evenly">
                  <Image src={Save} />
                  Delete
                </button>
              </td>
            </tr>
            <tr class="bg-white border-b h-11">
              <th
                scope="row"
                class="px-6  font-medium text-gray-900 whitespace-nowrap border-r-2 border-neutral-200"
              >
                Table Content
              </th>
              <td class="px-6  border-r-2 border-neutral-200">Table Content</td>
              <td class="px-6  border-r-2 border-neutral-200">Table Content</td>
              <td class="px-6 flex h-11 items-center ">
                <button className="bg-blue-700 w-[55px] h-[24px] text-white text-xs rounded-[3px] flex items-center justify-evenly mr-1">
                  <Image src={Save} />
                  Edit
                </button>
                <button className="bg-amber-600 w-[72px] h-[24px] text-white text-xs rounded-[3px] flex items-center justify-evenly">
                  <Image src={Save} />
                  Delete
                </button>
              </td>
            </tr>
            <tr class="bg-neutral-100 border-b h-11">
              <th
                scope="row"
                class="px-6  font-medium text-gray-900 whitespace-nowrap border-r-2 border-neutral-200"
              >
                Table Content
              </th>
              <td class="px-6  border-r-2 border-neutral-200">Table Content</td>
              <td class="px-6  border-r-2 border-neutral-200">Table Content</td>
              <td class="px-6 flex h-11 items-center ">
                <button className="bg-blue-700 w-[55px] h-[24px] text-white text-xs rounded-[3px] flex items-center justify-evenly mr-1">
                  <Image src={Save} />
                  Edit
                </button>
                <button className="bg-amber-600 w-[72px] h-[24px] text-white text-xs rounded-[3px] flex items-center justify-evenly">
                  <Image src={Save} />
                  Delete
                </button>
              </td>
            </tr>
            <tr class="bg-white border-b h-11">
              <th
                scope="row"
                class="px-6  font-medium text-gray-900 whitespace-nowrap border-r-2 border-neutral-200"
              >
                Table Content
              </th>
              <td class="px-6  border-r-2 border-neutral-200">Table Content</td>
              <td class="px-6  border-r-2 border-neutral-200">Table Content</td>
              <td class="px-6 flex h-11 items-center ">
                <button className="bg-blue-700 w-[55px] h-[24px] text-white text-xs rounded-[3px] flex items-center justify-evenly mr-1">
                  <Image src={Save} />
                  Edit
                </button>
                <button className="bg-amber-600 w-[72px] h-[24px] text-white text-xs rounded-[3px] flex items-center justify-evenly">
                  <Image src={Save} />
                  Delete
                </button>
              </td>
            </tr>
            <tr class="bg-neutral-100 border-b h-11">
              <th
                scope="row"
                class="px-6  font-medium text-gray-900 whitespace-nowrap border-r-2 border-neutral-200"
              >
                Table Content
              </th>
              <td class="px-6  border-r-2 border-neutral-200">Table Content</td>
              <td class="px-6  border-r-2 border-neutral-200">Table Content</td>
              <td class="px-6 flex h-11 items-center ">
                <button className="bg-blue-700 w-[55px] h-[24px] text-white text-xs rounded-[3px] flex items-center justify-evenly mr-1">
                  <Image src={Save} />
                  Edit
                </button>
                <button className="bg-amber-600 w-[72px] h-[24px] text-white text-xs rounded-[3px] flex items-center justify-evenly">
                  <Image src={Save} />
                  Delete
                </button>
              </td>
            </tr>
            <tr class="bg-white border-b h-11">
              <th
                scope="row"
                class="px-6  font-medium text-gray-900 whitespace-nowrap border-r-2 border-neutral-200"
              >
                Table Content
              </th>
              <td class="px-6  border-r-2 border-neutral-200">Table Content</td>
              <td class="px-6  border-r-2 border-neutral-200">Table Content</td>
              <td class="px-6 flex h-11 items-center ">
                <button className="bg-blue-700 w-[55px] h-[24px] text-white text-xs rounded-[3px] flex items-center justify-evenly mr-1">
                  <Image src={Save} />
                  Edit
                </button>
                <button className="bg-amber-600 w-[72px] h-[24px] text-white text-xs rounded-[3px] flex items-center justify-evenly">
                  <Image src={Save} />
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        {/* table end */}
      </div>
    </>
  );
};
export default Table;
