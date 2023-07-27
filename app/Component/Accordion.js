"use client";
import Image from "next/image";
import bullet from "../../Bullet.png";
import { useState } from "react";
const Accordion = ({ title }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="border-t-2 border-neutral-900 w-full px-6">
        <button
          class="flex items-center justify-between w-full h-14 text-left text-white"
          onClick={() => {
            setShow(!show);
          }}
        >
          <span className="flex text-sm">
            <Image src={bullet} className="mr-1" />
            <span className="font-medium"> {title}</span>
          </span>
          {show ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-[18px] h-[18px] font-medium"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-[18px] h-[18px] font-medium"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          )}
        </button>
        {show ? (
          <ul className=" text-white h-[209px] flex flex-col justify-around text-sm pl-5">
            <li>Commarce</li>
            <li>Analytics</li>
            <li>Crypto</li>
            <li>Helpdesk</li>
            <li>Monitoring</li>
            <li>Fitnes</li>
          </ul>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
export default Accordion;
