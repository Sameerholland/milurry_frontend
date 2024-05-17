import React from "react";
import "../../..//Style/Dashboard.css";
import "../../..//Style/main.css";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { useSelector } from "react-redux";
import { FetchedOrder } from "../OrderSlice";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Orders() {
  window.scrollTo(0,0)

  var s = new Date().toLocaleString(undefined, {timeZone: 'Asia/Kolkata'});

  const sortOptions = [
    { name: "Most Popular", href: "#", current: true },
    { name: "Best Rating", href: "#", current: false },
    { name: "Newest", href: "#", current: false },
    { name: "Price: Low to High", href: "#", current: false },
    { name: "Price: High to Low", href: "#", current: false },
  ];
  const headers = [
    "item",
    "Product Id",
    "Price",
    "Status",
    "Payment",
    "order-d",
    "Dilever-d",
  ];

  const data = useSelector(FetchedOrder)

  // const data = [
  //   {
  //     title: "Samsung TV 32”",
  //     id: "#1254R34",
  //     Price: 1243,
  //     status: "Dispatched",
  //     Payment_mentod: "Card",
  //     Order_date: "12-1-2024",
  //     Dilever_date: "23-1-2024",
  //   },

  //   {
  //     title: "Samsung TV 32”",
  //     id: "#1254R34",
  //     Price: 1243,
  //     status: "Dilevered",
  //     Payment_mentod: "Card",
  //     Order_date: "12-1-2024",
  //     Dilever_date: "23-1-2024",
  //   },

  //   {
  //     title: "Samsung TV 32”",
  //     id: "#1254R34",
  //     Price: 1243,
  //     status: "Dispatched",
  //     Payment_mentod: "Cash",
  //     Order_date: "12-1-2024",
  //     Dilever_date: "23-1-2024",
  //   },
  //   {
  //     title: "Samsung TV 32”",
  //     id: "#1254R34",
  //     Price: 1243,
  //     status: "Dispatched",
  //     Payment_mentod: "Card",
  //     Order_date: "12-1-2024",
  //     Dilever_date: "23-1-2024",
  //   },
  //   {
  //     title: "Samsung TV 32”",
  //     id: "#1254R34",
  //     Price: 1243,
  //     status: "Cancelled",
  //     Payment_mentod: "Cash",
  //     Order_date: "12-1-2024",
  //     Dilever_date: "23-1-2024",
  //   },
  //   {
  //     title: "Samsung TV 32”",
  //     id: "#1254R34",
  //     Price: 1243,
  //     status: "Dispatched",
  //     Payment_mentod: "Card",
  //     Order_date: "12-1-2024",
  //     Dilever_date: "23-1-2024",
  //   },

  //   {
  //     title: "Samsung TV 32”",
  //     id: "#1254R34",
  //     Price: 1243,
  //     status: "Dilevered",
  //     Payment_mentod: "Card",
  //     Order_date: "12-1-2024",
  //     Dilever_date: "23-1-2024",
  //   },

  //   {
  //     title: "Samsung TV 32”",
  //     id: "#1254R34",
  //     Price: 1243,
  //     status: "Dispatched",
  //     Payment_mentod: "Cash",
  //     Order_date: "12-1-2024",
  //     Dilever_date: "23-1-2024",
  //   },
  //   {
  //     title: "Samsung TV 32”",
  //     id: "#1254R34",
  //     Price: 1243,
  //     status: "Dispatched",
  //     Payment_mentod: "Card",
  //     Order_date: "12-1-2024",
  //     Dilever_date: "23-1-2024",
  //   },
  //   {
  //     title: "Samsung TV 32”",
  //     id: "#1254R34",
  //     Price: 1243,
  //     status: "Cancelled",
  //     Payment_mentod: "Cash",
  //     Order_date: "12-1-2024",
  //     Dilever_date: "23-1-2024",
  //   },
  // ];
  return (
    <div className="px-10">
      <div className="flex  justify-between items-center  pt-5 ">
        <div>
          <p className="flex justify-center items-center text-5xl linden-hill-regular text-olive-green">
            Orders
          </p>
          <p className="text-base kurale-regular text-olive-green-70 ">
            Check Your Progress
          </p>
        </div>
        <button className="px-5 py-2 kurale-regular shadow-drop-2-bl rounded-lg text-white bg-blue">
          Download Sheet
        </button>
      </div>
      <div className=" w-full   bg-white border-[1px] flex justify-between items-center px-4 py-3 abhaya-libre-regular border-border-white rounded-md mt-2">
        <div className=" ">
          <input
            type="search"
            placeholder="Search..."
            className="outline-none border-border-white border-[2px] px-2 py-1"
          />
        </div>
        <div className="flex">
          <div className="flex gap-3">
            <div className="flex items-center border-[1px] border-border-white px-4 py-1">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-base text-white-100 font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                !option.current
                                  ? "font-medium text-white-100"
                                  : "text-gray-500",
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
            <div className="flex  border-[1px] border-border-white px-4 py-1">
              <p className="pr-2 text-white-100">Recent Order</p>
              <svg
                width="18"
                height="21"
                viewBox="0 0 18 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_723_39)">
                  <path
                    d="M10.201 7.67258H10.8068C10.9741 7.67258 11.1097 7.80819 11.1097 7.97547V17.7711L13.7994 15.0753C13.8562 15.018 13.9337 14.9857 14.0144 14.9857C14.0952 14.9857 14.1726 15.018 14.2295 15.0753L14.6535 15.5054C14.7109 15.5623 14.7431 15.6397 14.7431 15.7205C14.7431 15.8012 14.7109 15.8786 14.6535 15.9355L10.9401 19.6551C10.8549 19.7403 10.7394 19.7882 10.619 19.7883H10.3888C10.2686 19.7869 10.1536 19.7392 10.0677 19.6551L6.35424 15.9355C6.2969 15.8786 6.26465 15.8012 6.26465 15.7205C6.26465 15.6397 6.2969 15.5623 6.35424 15.5054L6.78435 15.0753C6.84018 15.0183 6.9166 14.9862 6.99638 14.9862C7.07615 14.9862 7.15257 15.0183 7.2084 15.0753L9.8981 17.7711V7.97547C9.8981 7.80819 10.0337 7.67258 10.201 7.67258Z"
                    fill="#333333"
                  />
                </g>
                <g clip-path="url(#clip1_723_39)">
                  <path
                    d="M7.57241 13.3274H6.96662C6.79934 13.3274 6.66373 13.1918 6.66373 13.0245V3.22892L3.97403 5.92467C3.91716 5.98201 3.83974 6.01427 3.75897 6.01427C3.67821 6.01427 3.60079 5.98201 3.54392 5.92467L3.11987 5.49456C3.06253 5.43769 3.03027 5.36027 3.03027 5.27951C3.03027 5.19874 3.06253 5.12132 3.11987 5.06445L6.83335 1.34492C6.91847 1.25969 7.03396 1.21175 7.15441 1.21164H7.38461C7.50481 1.21304 7.61983 1.26078 7.70568 1.34492L11.4192 5.06445C11.4765 5.12132 11.5088 5.19874 11.5088 5.27951C11.5088 5.36027 11.4765 5.43769 11.4192 5.49456L10.989 5.92467C10.9332 5.98165 10.8568 6.01376 10.777 6.01376C10.6972 6.01376 10.6208 5.98165 10.565 5.92467L7.8753 3.22892L7.8753 13.0245C7.8753 13.1918 7.73969 13.3274 7.57241 13.3274Z"
                    fill="#333333"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_723_39">
                    <rect
                      width="14.5389"
                      height="14.5389"
                      fill="white"
                      transform="matrix(0 -1 1 0 3.23438 21)"
                    />
                  </clipPath>
                  <clipPath id="clip1_723_39">
                    <rect
                      width="14.5389"
                      height="14.5389"
                      fill="white"
                      transform="matrix(0 -1 1 0 0 14.5391)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white px-4">
        <div className="flex justify-between pt-4 literata-bold  ">
          {headers.map((item) => {
            return <p className=" cursor-pointer">{item.toUpperCase()}</p>;
          })}
        </div>

        <div className=" mb-5 pb-5">
          {data.map((item) => {
            return (
              <div className="flex justify-between items-center literata-regular text-white-100 text-sm pt-5">
                <p className=" cursor-pointer">{item.Title.slice(0,6)}..</p>
                <p className="">{item.Product.slice(0,9)}..</p>
                <p>₹{item.Price}</p>
                <button
                  className={` shadow-drop-2-bl rounded text-base ${
                    item.Status == "Dilevered"
                      ? "bg-green text-white "
                      : item.Status == "Dispatched"
                      ? "bg-yellow text-black"
                      :item.Status == 'Ordered'?
                      "bg-light-blue text-white"
                      : "bg-red text-white"
                  } w-36 py-2`}
                >
                  {item.Status}
                </button>
                <button className={` shadow-drop-2-bl ${item.Payment_Method == 'Cash'?'bg-green':'bg-purple'} px-3 text-white py-1 rounded`}>{item.Payment_Method} &nbsp; </button>
                <p>{(new Date(item.Dievery_Date).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})).slice(0,10)} &nbsp; &nbsp; &nbsp;</p>
                <p>{ (new Date(item.Order_Date).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})).slice(0,10) } &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-between border-t border-border-white bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
            <span className="font-medium">97</span> results
          </p>
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
            <a
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white bg-blue focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              2
            </a>
            <a
              href="#"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              3
            </a>
            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
              ...
            </span>
            <a
              href="#"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              8
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              9
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              10
            </a>
            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
}
