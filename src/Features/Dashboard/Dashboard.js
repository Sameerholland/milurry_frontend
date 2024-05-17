import React from "react";
import "../../Style/Dashboard.css";
import "../../Style/main.css";
import Chart from "react-google-charts";
import sam from "../../Visules/Img/sumu.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { ChangeNavigation } from "../Navigation/NavSlice";
import { FetchedDaily_Sales, Fetchedorder_Amount, Fetchedpedning_order } from "./DashboardSlice";

export default function Dashboard() {
  window.scrollTo(0,0)
const dispatch = useDispatch()
  const date = new Date();
  const monthname = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const Totalorder = useSelector(Fetchedorder_Amount);
const Daily_sales = useSelector(FetchedDaily_Sales);
const pending_Order = useSelector(Fetchedpedning_order);


let day = date.getDate();
let month = monthname[date.getMonth()];
let year = date.getFullYear();
let hour = date.getHours();
let min= date.getMinutes()
let currentDate = `${month.slice(0,3)}-${day}-${year}-${hour}.${min}`;
let date1 = new Date().toJSON();
  const data = [
    ["Year", "Sales", "Dilevered", "Cancled"],
    ["2013", 1000, 400, 300],
    ["2014", 1170, 460, 500],
    ["2015", 660, 1120, 433],
    ["2016", 1030, 540, 400],
  ];
  const data1 = [
    ["Category", "sales"],
    ["Grocery", 11],
    ["Women", 2],
    ["Men", 2],
    ["Kids", 2],
  ];

  const options1 = {
    title: "Most Selling Category",
  };

  const options = {
    title: "Sales Statics",
    hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
    vAxis: { minValue: 0 },
    chartArea: { width: "70%", height: "70%" },
  };
  const transition = [
    {
      Profile_Photo: sam,
      Name: "Sameer Kumar",
      date:currentDate,
      Amount: 400,
      Type: "Debit",
    },
    {
      Profile_Photo: sam,
      Name: "Sameer Kumar",
      date: currentDate,
      Amount: 400,
      Type: "Credit",
    },
  ];
  const Orders = [
    {
      title:"Samsung TV 32”",
      id:"#XY6123",
      price:500,
      status:'Dispatch',
      link:"33"
    },
    {
      title:"Apple MacBook pro ",
      id:"#XY6123",
      price:50089,
      status:'Dilevred',
      link:"33"
    },
    {
      title:"ASamsung TV 32” ",
      id:"#XY6123",
      price:50089,
      status:'canclled',
      link:"33"
    }
  ]
  const menu = [
    "ITEM","PRODUCT ID","PRICE","STATUS","ACTION"
  ]
  const OrderStatus = [
    {
      menu:"Dilevered",
      percente:'77%'
    },
    {
      menu:"Dispatch",
      percente:'34%'
    },
    {
      menu:"canclled",
      percente:'14%'
    }
  ]
  return (
    <div className="pt-5">
      <div className="flex  justify-between items-center px-10  ">
        <div>
          <p className="flex justify-center items-center text-5xl linden-hill-regular text-olive-green">
            Dashboard
          </p>
          <p className="text-base kurale-regular text-olive-green-70 ">
            Welcome to Your dashboard
          </p>
        </div>
        <button  className="px-5 py-2 kurale-regular shadow-drop-2-bl rounded-lg text-white bg-blue">
          Add New Product
        </button>
      </div>
      <div className="grid grid-cols-4 px-10 gap-10 pt-8">
        <div className=" bg-white-10 px-5 py-5 rounded-lg flex ">
          <div>
            <p className="literata-regular text-olive-green text-2xl">{Totalorder}</p>
            <p className="kurale-regular text-olive-green-70">Order Received</p>
            <div className="flex items-baseline gap-1">
              <p className="kurale-regular text-green text-lg">15%</p>
              <svg
                width="15"
                height="10"
                viewBox="0 0 15 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 9L4.499 4.801C4.66201 4.60511 4.87129 4.45296 5.10789 4.35829C5.3445 4.26363 5.60097 4.22944 5.85411 4.25882C6.10726 4.28821 6.34908 4.38024 6.55771 4.52658C6.76634 4.67293 6.93519 4.86898 7.049 5.097C7.15774 5.31411 7.31648 5.50231 7.51214 5.64611C7.70781 5.78991 7.93481 5.8852 8.17449 5.92416C8.41417 5.96311 8.65967 5.94461 8.8908 5.87017C9.12194 5.79574 9.3321 5.6675 9.504 5.496L13.5 1.5"
                  stroke="#00C308"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 1H13.672C13.853 1 14 1.147 14 1.328V6"
                  stroke="#00C308"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="  pl-16  ">
            <svg
              width="38"
              height="34"
              viewBox="0 0 38 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="18.5" cy="17.5" r="16.5" fill="#00C308" />
              <path
                d="M19.0078 22.0069V21.9932M19.0078 16.5069V16.4932M19.0078 11.0069V10.9932"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className=" bg-white-10 px-5 py-5 rounded-lg flex ">
          <div>
            <p className="literata-regular text-olive-green text-2xl">{Daily_sales}</p>
            <p className="kurale-regular text-olive-green-70">
              Average Daily Sales
            </p>
            <div className="flex items-baseline gap-1">
              <p className="kurale-regular text-purple text-lg">15%</p>
              <svg
                width="15"
                height="10"
                viewBox="0 0 15 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 9L4.499 4.801C4.66201 4.60511 4.87129 4.45296 5.10789 4.35829C5.3445 4.26363 5.60097 4.22944 5.85411 4.25882C6.10726 4.28821 6.34908 4.38024 6.55771 4.52658C6.76634 4.67293 6.93519 4.86898 7.049 5.097C7.15774 5.31411 7.31648 5.50231 7.51214 5.64611C7.70781 5.78991 7.93481 5.8852 8.17449 5.92416C8.41417 5.96311 8.65967 5.94461 8.8908 5.87017C9.12194 5.79574 9.3321 5.6675 9.504 5.496L13.5 1.5"
                  stroke="#7239EA"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 1H13.672C13.853 1 14 1.147 14 1.328V6"
                  stroke="#7239EA"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="pl-10 ">
            <svg
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16.5" cy="16.5" r="16.5" fill="#7239EA" />
              <g clip-path="url(#clip0_704_7)">
                <path
                  d="M26.5833 21.9999H25.3333V11.1666C25.3333 10.9456 25.2455 10.7336 25.0893 10.5773C24.933 10.421 24.721 10.3333 24.5 10.3333H9.5C9.27899 10.3333 9.06702 10.421 8.91074 10.5773C8.75446 10.7336 8.66667 10.9456 8.66667 11.1666V21.9999H7.41667C7.30616 21.9999 7.20018 22.0438 7.12204 22.122C7.0439 22.2001 7 22.3061 7 22.4166V22.8333C7 23.0543 7.0878 23.2662 7.24408 23.4225C7.40036 23.5788 7.61232 23.6666 7.83333 23.6666H26.1667C26.3877 23.6666 26.5996 23.5788 26.7559 23.4225C26.9122 23.2662 27 23.0543 27 22.8333V22.4166C27 22.3061 26.9561 22.2001 26.878 22.122C26.7998 22.0438 26.6938 21.9999 26.5833 21.9999ZM17 12.6249C17.3708 12.6249 17.7334 12.7349 18.0417 12.9409C18.35 13.1469 18.5904 13.4398 18.7323 13.7824C18.8742 14.125 18.9113 14.502 18.839 14.8657C18.7666 15.2294 18.588 15.5635 18.3258 15.8257C18.0636 16.088 17.7295 16.2665 17.3658 16.3389C17.0021 16.4112 16.6251 16.3741 16.2825 16.2322C15.9399 16.0903 15.647 15.85 15.441 15.5416C15.235 15.2333 15.125 14.8708 15.125 14.4999C15.1239 14.2534 15.1716 14.0091 15.2655 13.7811C15.3593 13.5531 15.4974 13.346 15.6717 13.1716C15.846 12.9973 16.0532 12.8592 16.2812 12.7654C16.5091 12.6716 16.7535 12.6238 17 12.6249ZM20.5417 21.1666H13.4583C13.3513 21.1668 13.2461 21.1395 13.1526 21.0874C13.0592 21.0353 12.9807 20.96 12.9246 20.8689C12.8686 20.7777 12.8369 20.6737 12.8326 20.5668C12.8283 20.4599 12.8515 20.3536 12.9 20.2583L13.6667 18.7499C13.8045 18.4763 14.0151 18.246 14.2753 18.0843C14.5356 17.9226 14.8353 17.8357 15.1417 17.8333H18.8583C19.1647 17.8357 19.4644 17.9226 19.7247 18.0843C19.9849 18.246 20.1955 18.4763 20.3333 18.7499L21.0833 20.2583C21.1312 20.3524 21.1545 20.4571 21.151 20.5627C21.1475 20.6682 21.1172 20.7712 21.0631 20.8619C21.009 20.9526 20.9328 21.0281 20.8417 21.0814C20.7505 21.1347 20.6473 21.164 20.5417 21.1666Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_704_7">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(7 7)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className=" bg-white-10 px-5 py-5 rounded-lg flex ">
          <div>
            <p className="literata-regular text-olive-green text-2xl">2.3k</p>
            <p className="kurale-regular text-olive-green-70">New Customers </p>
            <div className="flex items-baseline gap-1">
              <p className="kurale-regular text-blue text-lg">15%</p>
              <svg
                width="15"
                height="10"
                viewBox="0 0 15 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 9L4.499 4.801C4.66201 4.60511 4.87129 4.45296 5.10789 4.35829C5.3445 4.26363 5.60097 4.22944 5.85411 4.25882C6.10726 4.28821 6.34908 4.38024 6.55771 4.52658C6.76634 4.67293 6.93519 4.86898 7.049 5.097C7.15774 5.31411 7.31648 5.50231 7.51214 5.64611C7.70781 5.78991 7.93481 5.8852 8.17449 5.92416C8.41417 5.96311 8.65967 5.94461 8.8908 5.87017C9.12194 5.79574 9.3321 5.6675 9.504 5.496L13.5 1.5"
                  stroke="#3E97FF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 1H13.672C13.853 1 14 1.147 14 1.328V6"
                  stroke="#3E97FF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="pl-16">
            <svg
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16.5" cy="16.5" r="16.5" fill="#3E97FF" />
              <path
                d="M19.0035 12.5C19.0035 11.1193 20.1232 10 21.5043 10C22.8854 10 24.005 11.1193 24.005 12.5C24.005 13.8807 22.8854 15 21.5043 15C20.1232 15 19.0035 13.8807 19.0035 12.5ZM14.002 14C15.6594 14 17.0029 12.6569 17.0029 11C17.0029 9.34315 15.6594 8 14.002 8C12.3447 8 11.0011 9.34315 11.0011 11C11.0011 12.6569 12.3447 14 14.002 14ZM19.4537 17.66C18.9447 16.6408 17.9023 15.9978 16.7629 16H11.2412C10.1017 15.9978 9.05932 16.6408 8.55037 17.66L7.10994 20.55C6.95392 20.8595 6.96935 21.2277 7.15071 21.5231C7.33208 21.8185 7.65351 21.999 8.00021 22H20.0038C20.3505 21.999 20.672 21.8185 20.8533 21.5231C21.0347 21.2277 21.0501 20.8595 20.8941 20.55L19.4537 17.66ZM26.8959 20.55L25.9456 18.65C25.4355 17.638 24.3984 16.9997 23.2648 17H21.3542L22.6846 19.66C23.0501 20.3874 23.1043 21.2319 22.8347 22H26.0057C26.3524 21.999 26.6738 21.8185 26.8551 21.5231C27.0365 21.2277 27.0519 20.8595 26.8959 20.55Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div className=" bg-white-10 px-5 py-5 rounded-lg flex ">
          <div>
            <p className="literata-regular text-olive-green text-2xl">{pending_Order}</p>
            <p className="kurale-regular text-olive-green-70">pending orders</p>
            <div className="flex items-baseline gap-1">
              <p className="kurale-regular text-Orange text-lg">15%</p>
              <svg
                width="15"
                height="10"
                viewBox="0 0 15 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 9L4.499 4.801C4.66201 4.60511 4.87129 4.45296 5.10789 4.35829C5.3445 4.26363 5.60097 4.22944 5.85411 4.25882C6.10726 4.28821 6.34908 4.38024 6.55771 4.52658C6.76634 4.67293 6.93519 4.86898 7.049 5.097C7.15774 5.31411 7.31648 5.50231 7.51214 5.64611C7.70781 5.78991 7.93481 5.8852 8.17449 5.92416C8.41417 5.96311 8.65967 5.94461 8.8908 5.87017C9.12194 5.79574 9.3321 5.6675 9.504 5.496L13.5 1.5"
                  stroke="#FF9800"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 1H13.672C13.853 1 14 1.147 14 1.328V6"
                  stroke="#FF9800"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="pl-16">
            <svg
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16.5" cy="16.5" r="16.5" fill="#FF9800" />
              <path
                d="M23.6667 10.8337H21.1667C21.1667 8.53247 19.3012 6.66699 17 6.66699C14.6988 6.66699 12.8333 8.53247 12.8333 10.8337H10.3333C9.8731 10.8337 9.5 11.2068 9.5 11.667V21.667C9.5 22.5875 10.2462 23.3337 11.1667 23.3337H22.8333C23.7538 23.3337 24.5 22.5875 24.5 21.667V11.667C24.5 11.2068 24.1269 10.8337 23.6667 10.8337ZM14.5 13.7503C14.5 13.9804 14.3135 14.167 14.0833 14.167H13.25C13.0199 14.167 12.8333 13.9804 12.8333 13.7503V12.917C12.8333 12.6869 13.0199 12.5003 13.25 12.5003H14.0833C14.3135 12.5003 14.5 12.6869 14.5 12.917V13.7503ZM17 8.33366C18.3807 8.33366 19.5 9.45295 19.5 10.8337H14.5C14.5 9.45295 15.6193 8.33366 17 8.33366ZM21.1667 13.7503C21.1667 13.9804 20.9801 14.167 20.75 14.167H19.9167C19.6865 14.167 19.5 13.9804 19.5 13.7503V12.917C19.5 12.6869 19.6865 12.5003 19.9167 12.5003H20.75C20.9801 12.5003 21.1667 12.6869 21.1667 12.917V13.7503Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="px-10 grid grid-cols-3 pt-8 gap-5">
        <div className="col-span-2">
          <Chart
            chartType="AreaChart"
            width="100%"
            height="400px"
            style={{ backgroundColor: "#F1F5F9" }}
            data={data}
            options={options}
          />
        </div>
        <div>
          <Chart
            chartType="PieChart"
            data={data1}
            options={options1}
            width={"100p%"}
            height={"100%"}
          />
        </div>
      </div>
      <div className="grid grid-cols-4 py-10 px-10 gap-5">
      <div className=" bg-white-10 px-5 py-5 rounded-lg  ">
          <div className="flex justify-between">
            <p className="literata-regular text-xl text-olive-green ">Transactions</p>
            <button className="literata-regular text-xs text-blue " onClick={()=> dispatch(ChangeNavigation("Transactions"))}>View All</button>
          </div>
          {
            transition.map((item)=>{
              return (
                <div className="pt-5">
                  <div className="flex">
                    <img src={item.Profile_Photo} alt={item.Name} className="w-12 rounded-full"/>
                    <div className="pl-2">
                      <p className="literata-regular">{item.Name}</p>
                      <p className="literata-regular text-xs">{item.date}</p>
                      </div>
                  </div>
                  <p className={`literata-regular pl-1 ${item.Type=="Debit"?'text-green':'text-red'}`}>₹{item.Amount}</p>
                </div>
              )
            })
          }
        </div>

        <div className=" bg-white-10 col-span-2 px-5 py-5 rounded-lg  ">
          <div className="flex justify-between">
            <p className="literata-regular text-xl text-olive-green">Recent Orders</p>
            <button  onClick={()=> dispatch(ChangeNavigation("Orders"))} className="literata-regular text-base text-blue">View All</button>
          </div>
          <div className="flex justify-between pt-3 literata-semibold text-olive-green text-xs cursor-pointer font px-3">
            {
              menu.map((item)=>{
                return (
                <p>{item}</p>)
              })
            }

          </div>
          {
            Orders.map((item)=>{
              return (
                <div className="pt-5 flex justify-between">
                 <p className="text-xs literata-regular text-olive-green-100">{item.title.slice(0,7)}...</p>
                 <p className="literata-regular text-sm text-olive-green-100">{item.id}</p>
                 <p className="literata-regular text-sm text-olive-green-100">₹{item.price}</p>
                 <button className={`literata-regular rounded-md ${item.status == 'Dispatch'?'bg-yellow text-black':item.status == 'Dilevred'?'bg-green':'bg-red text-white'} w-24 py-1 opacity-80`}>{item.status}</button>
                 <button className=" px-3 text-white rounded opacity-50 bg-light-blue">View</button>
                </div>
              )
            })
          }
        </div>
        <div className="bg-white-10  px-5 py-5 rounded-lg">
          <p className="literata-regular text-xl text-olive-green cursor-pointer">Order Status</p>
          {
            OrderStatus.map((item)=>{
              return (
                <div className="pt-4">
            <div className="flex justify-between pb-1">
              <p className="literata-regular cursor-pointer">{item.menu}</p>
              <p className="literata-regular cursor-pointer">{item.percente}</p>
            </div>
            <div className="w-full h-3 rounded-full bg-blue-10">
              <div style={{width:item.percente}} className={` ${item.menu == 'Dilevered'?' bg-light-blue':item.menu == 'Dispatch'?' bg-green':'bg-red'} h-full rounded-full`}></div>

            </div>
          </div>

              )
            })
}

          

        </div>
      </div>
    </div>
  );
}
