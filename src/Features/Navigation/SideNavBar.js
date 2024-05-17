import { HelpCenter } from "@mui/icons-material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Active_nav, ChangeNavigation } from "./NavSlice";

export default function SideNavBar() {
  const flag = useSelector(Active_nav);
  const dispatch = useDispatch();

  function scrollToTop(data) {
    window.scrollTo(0, 0);
    dispatch(ChangeNavigation(data))
}
  return (
    <div className="bg  h-[90vh]   w-full  flex flex-col gap-10 pt-4">
      <div className="flex items-center gap-5 pl-[4px]">
        {flag == "Dashboard" ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="10" height="10" rx="1" fill="#6CB9FE" />
            <rect y="14" width="10" height="10" rx="1" fill="#6CB9FE" />
            <rect x="14" width="10" height="10" rx="1" fill="#6CB9FE" />
            <rect x="14" y="14" width="10" height="10" rx="1" fill="#6CB9FE" />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="10" height="10" rx="1" fill="#344B47" />
            <rect y="14" width="10" height="10" rx="1" fill="#344B47" />
            <rect x="14" width="10" height="10" rx="1" fill="#344B47" />
            <rect x="14" y="14" width="10" height="10" rx="1" fill="#344B47" />
          </svg>
        )}
        <p onClick={()=> scrollToTop('Dashboard')}
          className={`abeezee-regular cursor-pointer  ${
            flag == "Dashboard"
              ? "text-ligth-blue-500 text-2xl"
              : "text-olive-green text-xl"
          } font-bold`}
        >
          Dashboard
        </p>
      </div>
      <div className="flex items-center gap-5">
        {flag == "Products" ? (
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_476_49)">
              <path
                d="M24 8.75H20.25C20.25 5.29822 17.4518 2.5 14 2.5C10.5482 2.5 7.75 5.29822 7.75 8.75H4C3.30964 8.75 2.75 9.30965 2.75 10V25C2.75 26.3807 3.86929 27.5 5.25 27.5H22.75C24.1307 27.5 25.25 26.3807 25.25 25V10C25.25 9.30965 24.6904 8.75 24 8.75ZM10.25 13.125C10.25 13.4702 9.97018 13.75 9.625 13.75H8.375C8.02982 13.75 7.75 13.4702 7.75 13.125V11.875C7.75 11.5298 8.02982 11.25 8.375 11.25H9.625C9.97018 11.25 10.25 11.5298 10.25 11.875V13.125ZM14 5C16.0711 5 17.75 6.67893 17.75 8.75H10.25C10.25 6.67893 11.9289 5 14 5ZM20.25 13.125C20.25 13.4702 19.9702 13.75 19.625 13.75H18.375C18.0298 13.75 17.75 13.4702 17.75 13.125V11.875C17.75 11.5298 18.0298 11.25 18.375 11.25H19.625C19.9702 11.25 20.25 11.5298 20.25 11.875V13.125Z"
                fill="#6CB9FE"
              />
            </g>
            <defs>
              <clipPath id="clip0_476_49">
                <rect width="30" height="30" fill="white" />
              </clipPath>
            </defs>
          </svg>
        ) : (
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_476_49)">
              <path
                d="M24 8.75H20.25C20.25 5.29822 17.4518 2.5 14 2.5C10.5482 2.5 7.75 5.29822 7.75 8.75H4C3.30964 8.75 2.75 9.30965 2.75 10V25C2.75 26.3807 3.86929 27.5 5.25 27.5H22.75C24.1307 27.5 25.25 26.3807 25.25 25V10C25.25 9.30965 24.6904 8.75 24 8.75ZM10.25 13.125C10.25 13.4702 9.97018 13.75 9.625 13.75H8.375C8.02982 13.75 7.75 13.4702 7.75 13.125V11.875C7.75 11.5298 8.02982 11.25 8.375 11.25H9.625C9.97018 11.25 10.25 11.5298 10.25 11.875V13.125ZM14 5C16.0711 5 17.75 6.67893 17.75 8.75H10.25C10.25 6.67893 11.9289 5 14 5ZM20.25 13.125C20.25 13.4702 19.9702 13.75 19.625 13.75H18.375C18.0298 13.75 17.75 13.4702 17.75 13.125V11.875C17.75 11.5298 18.0298 11.25 18.375 11.25H19.625C19.9702 11.25 20.25 11.5298 20.25 11.875V13.125Z"
                fill="#344B47"
              />
            </g>
            <defs>
              <clipPath id="clip0_476_49">
                <rect width="30" height="30" fill="white" />
              </clipPath>
            </defs>
          </svg>
        )}
        <p onClick={()=> scrollToTop('Products')}
          className={`abeezee-regular cursor-pointer  ${
            flag == "Products"
              ? "text-ligth-blue-500 text-2xl"
              : "text-olive-green text-xl"
          } font-bold`}
        >
          Products
        </p>
      </div>
      <div  className="flex items-center gap-5">
        {flag == "Orders" ? (
         <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
         <g clip-path="url(#clip0_476_53)">
         <path d="M16.25 16.875C16.25 17.2202 15.9702 17.5 15.625 17.5H10.625C10.2798 17.5 10 17.2202 10 16.875V15.625C10 15.2798 10.2798 15 10.625 15H15.625C15.9702 15 16.25 15.2798 16.25 15.625V16.875ZM20 11.875C20 12.2202 19.7202 12.5 19.375 12.5H10.625C10.2798 12.5 10 12.2202 10 11.875V10.625C10 10.2798 10.2798 10 10.625 10H19.375C19.7202 10 20 10.2798 20 10.625V11.875ZM23.75 2.5H6.25C5.55964 2.5 5 3.05964 5 3.75V24.075C5.0046 24.406 5.13408 24.723 5.3625 24.9625L7.725 27.3125C7.83785 27.4339 7.99674 27.502 8.1625 27.5H8.525C8.69075 27.502 8.84965 27.4339 8.9625 27.3125L11.25 25C11.3654 24.8822 11.5226 24.8148 11.6875 24.8125C11.8521 24.8162 12.0088 24.8834 12.125 25L14.3875 27.2625C14.5003 27.3839 14.6592 27.452 14.825 27.45H15.1875C15.3533 27.452 15.5121 27.3839 15.625 27.2625L17.9 25C18.0154 24.8822 18.1726 24.8148 18.3375 24.8125C18.4933 24.8224 18.6401 24.8891 18.75 25L21.0125 27.2625C21.1253 27.3839 21.2842 27.452 21.45 27.45H21.8125C21.9783 27.452 22.1371 27.3839 22.25 27.2625L24.6375 25C24.8684 24.7672 24.9986 24.4529 25 24.125V3.75C25 3.05964 24.4404 2.5 23.75 2.5ZM22.5 23.575L21.675 24.4L20.75 23.4875L20.55 23.2875L20.125 22.8625C19.8922 22.6316 19.5779 22.5014 19.25 22.5H17.5C17.1677 22.4981 16.8484 22.6285 16.6125 22.8625L15 24.4125L13.45 22.8625C13.2172 22.6316 12.9029 22.5014 12.575 22.5H10.7625C10.4346 22.5014 10.1203 22.6316 9.8875 22.8625L8.35 24.4L7.5 23.55V5H22.5V23.575Z" fill="#6CB9FE"/>
         </g>
         <defs>
         <clipPath id="clip0_476_53">
         <rect width="30" height="30" fill="white"/>
         </clipPath>
         </defs>
         </svg>
        ) : (
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_476_53)">
<path d="M16.25 16.875C16.25 17.2202 15.9702 17.5 15.625 17.5H10.625C10.2798 17.5 10 17.2202 10 16.875V15.625C10 15.2798 10.2798 15 10.625 15H15.625C15.9702 15 16.25 15.2798 16.25 15.625V16.875ZM20 11.875C20 12.2202 19.7202 12.5 19.375 12.5H10.625C10.2798 12.5 10 12.2202 10 11.875V10.625C10 10.2798 10.2798 10 10.625 10H19.375C19.7202 10 20 10.2798 20 10.625V11.875ZM23.75 2.5H6.25C5.55964 2.5 5 3.05964 5 3.75V24.075C5.0046 24.406 5.13408 24.723 5.3625 24.9625L7.725 27.3125C7.83785 27.4339 7.99674 27.502 8.1625 27.5H8.525C8.69075 27.502 8.84965 27.4339 8.9625 27.3125L11.25 25C11.3654 24.8822 11.5226 24.8148 11.6875 24.8125C11.8521 24.8162 12.0088 24.8834 12.125 25L14.3875 27.2625C14.5003 27.3839 14.6592 27.452 14.825 27.45H15.1875C15.3533 27.452 15.5121 27.3839 15.625 27.2625L17.9 25C18.0154 24.8822 18.1726 24.8148 18.3375 24.8125C18.4933 24.8224 18.6401 24.8891 18.75 25L21.0125 27.2625C21.1253 27.3839 21.2842 27.452 21.45 27.45H21.8125C21.9783 27.452 22.1371 27.3839 22.25 27.2625L24.6375 25C24.8684 24.7672 24.9986 24.4529 25 24.125V3.75C25 3.05964 24.4404 2.5 23.75 2.5ZM22.5 23.575L21.675 24.4L20.75 23.4875L20.55 23.2875L20.125 22.8625C19.8922 22.6316 19.5779 22.5014 19.25 22.5H17.5C17.1677 22.4981 16.8484 22.6285 16.6125 22.8625L15 24.4125L13.45 22.8625C13.2172 22.6316 12.9029 22.5014 12.575 22.5H10.7625C10.4346 22.5014 10.1203 22.6316 9.8875 22.8625L8.35 24.4L7.5 23.55V5H22.5V23.575Z" fill="#344B47"/>
</g>
<defs>
<clipPath id="clip0_476_53">
<rect width="30" height="30" fill="white"/>
</clipPath>
</defs>
</svg>

        )}
        <p onClick={()=> scrollToTop('Orders')}
          className={`abeezee-regular cursor-pointer  ${
            flag == "Orders"
              ? "text-ligth-blue-500 text-2xl"
              : "text-olive-green text-xl"
          } font-bold`}
        >
          Orders
        </p>
      </div>
      <div className="flex items-center gap-5">
        {flag == "Transactions" ? (
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_476_45)">
              <path
                d="M25 5H5C3.61929 5 2.5 6.11929 2.5 7.5V22.5C2.5 23.8807 3.61929 25 5 25H25C26.3807 25 27.5 23.8807 27.5 22.5V7.5C27.5 6.11929 26.3807 5 25 5ZM25 13.75L17.0625 19.3125C15.8238 20.1784 14.1762 20.1784 12.9375 19.3125L5 13.75V11.125L14.1875 17.5625C14.6761 17.9016 15.3239 17.9016 15.8125 17.5625L25 11.125V13.75Z"
                fill="#6CB9FE"
              />
            </g>
            <defs>
              <clipPath id="clip0_476_45">
                <rect width="30" height="30" fill="white" />
              </clipPath>
            </defs>
          </svg>
        ) : (
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_476_45)">
              <path
                d="M25 5H5C3.61929 5 2.5 6.11929 2.5 7.5V22.5C2.5 23.8807 3.61929 25 5 25H25C26.3807 25 27.5 23.8807 27.5 22.5V7.5C27.5 6.11929 26.3807 5 25 5ZM25 13.75L17.0625 19.3125C15.8238 20.1784 14.1762 20.1784 12.9375 19.3125L5 13.75V11.125L14.1875 17.5625C14.6761 17.9016 15.3239 17.9016 15.8125 17.5625L25 11.125V13.75Z"
                fill="#344B47"
              />
            </g>
            <defs>
              <clipPath id="clip0_476_45">
                <rect width="30" height="30" fill="white" />
              </clipPath>
            </defs>
          </svg>
        )}
        <p onClick={()=> scrollToTop("Transactions") }
          className={`abeezee-regular cursor-pointer ${
            flag == "Transactions"
              ? "text-ligth-blue-500 text-2xl"
              : "text-olive-green text-xl"
          } font-bold`}
        >
         Transactions
        </p>
      </div>
      <div className="flex items-center gap-5">
        {flag == "Profile" ? (
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_476_61)">
              <path
                d="M17.5003 2.91675C9.44617 2.91675 2.91699 9.44593 2.91699 17.5001C2.91699 25.5542 9.44617 32.0834 17.5003 32.0834C25.5545 32.0834 32.0837 25.5542 32.0837 17.5001C32.0837 13.6323 30.5472 9.92302 27.8123 7.18811C25.0774 4.4532 21.3681 2.91675 17.5003 2.91675ZM17.5003 7.29175C19.9166 7.29175 21.8753 9.2505 21.8753 11.6667C21.8753 14.083 19.9166 16.0418 17.5003 16.0418C15.0841 16.0418 13.1253 14.083 13.1253 11.6667C13.1253 9.2505 15.0841 7.29175 17.5003 7.29175ZM25.6962 23.5668C23.7703 26.1602 20.7306 27.6892 17.5003 27.6892C14.27 27.6892 11.2303 26.1602 9.30449 23.5668C9.01168 23.134 8.97274 22.5777 9.20241 22.1084L9.50866 21.4668C10.2304 19.937 11.7693 18.9602 13.4607 18.9584H21.5399C23.2076 18.9606 24.729 19.9108 25.4628 21.4084L25.7982 22.0938C26.0336 22.567 25.9946 23.1306 25.6962 23.5668Z"
                fill="#6CB9FE"
              />
            </g>
            <defs>
              <clipPath id="clip0_476_61">
                <rect width="35" height="35" fill="white" />
              </clipPath>
            </defs>
          </svg>
        ) : (
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_476_61)">
              <path
                d="M17.5003 2.91675C9.44617 2.91675 2.91699 9.44593 2.91699 17.5001C2.91699 25.5542 9.44617 32.0834 17.5003 32.0834C25.5545 32.0834 32.0837 25.5542 32.0837 17.5001C32.0837 13.6323 30.5472 9.92302 27.8123 7.18811C25.0774 4.4532 21.3681 2.91675 17.5003 2.91675ZM17.5003 7.29175C19.9166 7.29175 21.8753 9.2505 21.8753 11.6667C21.8753 14.083 19.9166 16.0418 17.5003 16.0418C15.0841 16.0418 13.1253 14.083 13.1253 11.6667C13.1253 9.2505 15.0841 7.29175 17.5003 7.29175ZM25.6962 23.5668C23.7703 26.1602 20.7306 27.6892 17.5003 27.6892C14.27 27.6892 11.2303 26.1602 9.30449 23.5668C9.01168 23.134 8.97274 22.5777 9.20241 22.1084L9.50866 21.4668C10.2304 19.937 11.7693 18.9602 13.4607 18.9584H21.5399C23.2076 18.9606 24.729 19.9108 25.4628 21.4084L25.7982 22.0938C26.0336 22.567 25.9946 23.1306 25.6962 23.5668Z"
                fill="#344B47"
              />
            </g>
            <defs>
              <clipPath id="clip0_476_61">
                <rect width="35" height="35" fill="white" />
              </clipPath>
            </defs>
          </svg>
        )}
        <p onClick={()=> scrollToTop("Profile")}
          className={`abeezee-regular cursor-pointer  ${
            flag == "Profile"
              ? "text-ligth-blue-500 text-2xl"
              : "text-olive-green text-xl"
          } font-bold`}
        >
          Profile
        </p>
      </div>
      <div onClick={()=> scrollToTop("Setting")}
       className="flex items-center gap-5 pl-[4px]">
        {flag == "Setting" ? (
          <svg
            width="27"
            height="28"
            viewBox="0 0 27 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.7183 17.8296L24.5983 16.9038C23.9192 16.339 23.5456 15.4864 23.5903 14.6032C23.5903 14.4068 23.5903 14.1964 23.5903 14C23.5903 13.8036 23.5903 13.5932 23.5903 13.3968C23.5456 12.5136 23.9192 11.661 24.5983 11.0962L25.7183 10.1704C26.2497 9.73857 26.3918 8.98516 26.0543 8.38882L24.4303 5.58324C24.086 4.99747 23.3722 4.74328 22.7363 4.98004L21.3363 5.48504C20.5101 5.79444 19.5867 5.69567 18.8443 5.21851C18.5152 4.99069 18.1688 4.78901 17.8083 4.61531C17.0205 4.2105 16.4702 3.45623 16.3243 2.58126L16.0863 1.17846C15.9754 0.492417 15.3798 -0.00882641 14.6863 0.000117823H11.4663C10.7727 -0.00882641 10.1772 0.492417 10.0663 1.17846L9.82827 2.58126C9.69455 3.44518 9.16656 4.19726 8.40027 4.61531C8.03977 4.78901 7.69338 4.99069 7.36427 5.21851C6.62187 5.69567 5.69847 5.79444 4.87227 5.48504L3.47227 4.98004C2.84444 4.75876 2.14792 5.01094 1.80627 5.58324L0.182275 8.38882C-0.15523 8.98516 -0.0131368 9.73857 0.518275 10.1704L1.63827 11.0962C2.31734 11.661 2.6909 12.5136 2.64627 13.3968C2.64627 13.5932 2.64627 13.8036 2.64627 14C2.64627 14.1964 2.64627 14.4068 2.64627 14.6032C2.6909 15.4864 2.31734 16.339 1.63827 16.9038L0.518275 17.8296C-0.0131368 18.2614 -0.15523 19.0148 0.182275 19.6112L1.80627 22.4168C2.1505 23.0025 2.86433 23.2567 3.50027 23.02L4.90027 22.515C5.72647 22.2056 6.64987 22.3043 7.39227 22.7815C7.72138 23.0093 8.06777 23.211 8.42827 23.3847C9.21605 23.7895 9.76636 24.5438 9.91227 25.4187L10.1503 26.8215C10.2612 27.5076 10.8567 28.0088 11.5503 27.9999H14.7703C15.4638 28.0088 16.0594 27.5076 16.1703 26.8215L16.4083 25.4187C16.5542 24.5438 17.1045 23.7895 17.8923 23.3847C18.2528 23.211 18.5992 23.0093 18.9283 22.7815C19.6707 22.3043 20.5941 22.2056 21.4203 22.515L22.8203 23.02C23.4315 23.2115 24.0945 22.9631 24.4303 22.4168L26.0543 19.6112C26.3918 19.0148 26.2497 18.2614 25.7183 17.8296ZM13.1183 18.2084C10.7987 18.2084 8.91827 16.3242 8.91827 14C8.91827 11.6758 10.7987 9.79162 13.1183 9.79162C15.4379 9.79162 17.3183 11.6758 17.3183 14C17.3183 15.1161 16.8758 16.1866 16.0881 16.9758C15.3005 17.765 14.2322 18.2084 13.1183 18.2084Z"
              fill="#6CB9FE"
            />
          </svg>
        ) : (
          <svg
            width="27"
            height="28"
            viewBox="0 0 27 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.7183 17.8296L24.5983 16.9038C23.9192 16.339 23.5456 15.4864 23.5903 14.6032C23.5903 14.4068 23.5903 14.1964 23.5903 14C23.5903 13.8036 23.5903 13.5932 23.5903 13.3968C23.5456 12.5136 23.9192 11.661 24.5983 11.0962L25.7183 10.1704C26.2497 9.73857 26.3918 8.98516 26.0543 8.38882L24.4303 5.58324C24.0861 4.99747 23.3722 4.74328 22.7363 4.98004L21.3363 5.48504C20.5101 5.79444 19.5867 5.69567 18.8443 5.21851C18.5152 4.99069 18.1688 4.78901 17.8083 4.61531C17.0205 4.2105 16.4702 3.45623 16.3243 2.58126L16.0863 1.17846C15.9754 0.492417 15.3798 -0.00882641 14.6863 0.000117823H11.4663C10.7727 -0.00882641 10.1772 0.492417 10.0663 1.17846L9.82827 2.58126C9.69455 3.44518 9.16656 4.19726 8.40027 4.61531C8.03977 4.78901 7.69338 4.99069 7.36427 5.21851C6.62187 5.69567 5.69847 5.79444 4.87227 5.48504L3.47227 4.98004C2.84444 4.75876 2.14792 5.01094 1.80627 5.58324L0.182275 8.38882C-0.15523 8.98516 -0.0131368 9.73857 0.518275 10.1704L1.63827 11.0962C2.31734 11.661 2.6909 12.5136 2.64627 13.3968C2.64627 13.5932 2.64627 13.8036 2.64627 14C2.64627 14.1964 2.64627 14.4068 2.64627 14.6032C2.6909 15.4864 2.31734 16.339 1.63827 16.9038L0.518275 17.8296C-0.0131368 18.2614 -0.15523 19.0148 0.182275 19.6112L1.80627 22.4168C2.1505 23.0025 2.86433 23.2567 3.50027 23.02L4.90027 22.515C5.72647 22.2056 6.64987 22.3043 7.39227 22.7815C7.72138 23.0093 8.06777 23.211 8.42827 23.3847C9.21605 23.7895 9.76636 24.5438 9.91227 25.4187L10.1503 26.8215C10.2612 27.5076 10.8567 28.0088 11.5503 27.9999H14.7703C15.4638 28.0088 16.0594 27.5076 16.1703 26.8215L16.4083 25.4187C16.5542 24.5438 17.1045 23.7895 17.8923 23.3847C18.2528 23.211 18.5992 23.0093 18.9283 22.7815C19.6707 22.3043 20.5941 22.2056 21.4203 22.515L22.8203 23.02C23.4315 23.2115 24.0945 22.9631 24.4303 22.4168L26.0543 19.6112C26.3918 19.0148 26.2497 18.2614 25.7183 17.8296ZM13.1183 18.2084C10.7987 18.2084 8.91827 16.3242 8.91827 14C8.91827 11.6758 10.7987 9.79162 13.1183 9.79162C15.4379 9.79162 17.3183 11.6758 17.3183 14C17.3183 15.1161 16.8758 16.1866 16.0881 16.9758C15.3005 17.765 14.2322 18.2084 13.1183 18.2084Z"
              fill="#344B47"
            />
          </svg>
        )}
        <p
          className={`abeezee-regular cursor-pointer  ${
            flag == "Setting"
              ? "text-ligth-blue-500 text-2xl"
              : "text-olive-green text-xl"
          } font-bold`}
        >
          Setting
        </p>
      </div>
      <div className="flex items-center justify-center  absolute bottom-20 right-32 cursor-pointer">
        <p className="text-xl">Help</p>
        <HelpCenter />
      </div>
    </div>
  );
}