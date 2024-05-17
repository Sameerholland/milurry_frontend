import React from "react";
import logo from "../../Visules/Img/logoo.png";
import "../../Style/Home.css";
import profile from '../../Visules/Img/sumu.jpeg'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useDispatch } from "react-redux";
import { ChangeNavigation } from "./NavSlice";
export default function TopNavBar() {
  const styleForPaper = {
    width: '40px',
    height: '40px',
    textAlign: 'center',
    display: 'inline-block',
  };
  const dispatch = useDispatch();
 
  return (
    <div>
      <div className="flex w-full justify-between items-center h-[100px] bg-white pl-[80px] pr-20">
         <div className="flex justify-center items-center  h-[80px]">
        <img src={logo} alt="logo" />
        <div className="flex search">
          <input type="search" placeholder="Search Here..." className="outline-none" />
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_476_18)">
              <path
                d="M20.875 19.4602L16.875 15.4554C16.7454 15.3226 16.6012 15.2051 16.445 15.105L15.445 14.4142C17.5019 11.866 17.521 8.23099 15.491 5.66125C13.461 3.09151 9.92359 2.27284 6.9731 3.68991C4.0226 5.10699 2.44643 8.38161 3.17773 11.5751C3.90902 14.7686 6.75261 17.0287 10.025 17.0173C11.613 17.0178 13.1541 16.4776 14.395 15.4855L15.145 16.4867C15.234 16.6156 15.3344 16.7362 15.445 16.8471L19.445 20.8519C19.5389 20.9467 19.6667 21 19.8 21C19.9333 21 20.0611 20.9467 20.155 20.8519L20.855 20.1511C21.0448 19.9631 21.0536 19.6589 20.875 19.4602ZM10.025 15.0149C7.26357 15.0149 5.025 12.7736 5.025 10.0089C5.025 7.24411 7.26357 5.00284 10.025 5.00284C12.7864 5.00284 15.025 7.24411 15.025 10.0089C15.025 11.3365 14.4982 12.6099 13.5605 13.5487C12.6228 14.4875 11.3511 15.0149 10.025 15.0149Z"
                fill="#DDDDDD"
              />
            </g>
            <defs>
              <clipPath id="clip0_476_18">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        </div>
        <div className="flex items-center gap-12">
         <div className="flex relative" onClick={()=>dispatch(ChangeNavigation("Notification"))}>
            <span className="p-[5px]  rounded-full bg-red absolute right-0 -top-1"></span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_476_24)">
              <path
                d="M10.0003 20H14.0003C14.0003 21.1046 13.1048 22 12.0003 22C10.8957 22 10.0003 21.1046 10.0003 20ZM18.8803 14.88C18.3175 14.3179 18.001 13.5554 18.0003 12.76V10C18.0003 8.70178 17.5792 7.43858 16.8003 6.4L15.9003 5.2C15.3337 4.44458 14.4445 4 13.5003 4H13.0003V2.5C13.0003 2.22386 12.7764 2 12.5003 2H11.5003C11.2241 2 11.0003 2.22386 11.0003 2.5V4H10.5003C9.55599 4 8.66683 4.44458 8.10027 5.2L7.20026 6.4C6.42133 7.43858 6.00027 8.70178 6.00027 10V12.76C5.99957 13.5554 5.68303 14.3179 5.12026 14.88L4.29026 15.71C4.10552 15.8963 4.00137 16.1477 4.00026 16.41V17C4.00026 17.5523 4.44798 18 5.00026 18H19.0003C19.5525 18 20.0003 17.5523 20.0003 17V16.41C19.9992 16.1477 19.895 15.8963 19.7103 15.71L18.8803 14.88ZM5.59027 5.21C5.70956 5.05475 5.6829 4.83262 5.53027 4.71L4.53027 3.93C4.44666 3.86047 4.33834 3.82797 4.23026 3.84C4.13559 3.86112 4.05299 3.91858 4.00026 4C2.8083 5.58596 2.11241 7.48923 2.00026 9.47C1.99023 9.60792 2.04144 9.74327 2.14027 9.84C2.23184 9.94239 2.3629 10.0006 2.50027 10H3.50027C3.76675 9.99523 3.98463 9.78607 4.00026 9.52C4.10434 7.96023 4.65644 6.46367 5.59027 5.21ZM20.0003 4C19.9375 3.91026 19.8391 3.85194 19.7303 3.84C19.6193 3.82964 19.5085 3.86181 19.4203 3.93L18.4203 4.71C18.2676 4.83262 18.241 5.05475 18.3603 5.21C19.312 6.45798 19.8816 7.95503 20.0003 9.52C20.0108 9.78447 20.2256 9.99492 20.4903 10H21.4903C21.6271 9.99818 21.7572 9.94035 21.8503 9.84C21.9448 9.73981 21.9984 9.60777 22.0003 9.47C21.8834 7.4902 21.188 5.58824 20.0003 4Z"
                fill="#344B47"
              />
            </g>
            <defs>
              <clipPath id="clip0_476_24">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          </div>
          <div className="flex relative">
          <span className="p-[7px] bg-green rounded-full absolute -right-1 -top-1"></span>
          <AccountBoxIcon style={styleForPaper} zDepth={2} />
            <img src={profile} className="w-10 " alt="Profile" onClick={()=>dispatch(ChangeNavigation("Profile"))}/>
          </div>
        </div>
      </div>
    </div>
  );
}
