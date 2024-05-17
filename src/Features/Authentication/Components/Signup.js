import React, { useState } from "react";
import man from "../../../Visules/Img/man.jpg";
import "../../../Style/main.css";
import "../../../Style/Signup.css";
import RemoveRedEyeTwoToneIcon from "@mui/icons-material/RemoveRedEyeTwoTone";
import VisibilityOffTwoToneIcon from "@mui/icons-material/VisibilityOffTwoTone";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../Context/AuthContext/AuthUserContext";
import PhoneInput from "react-phone-number-input";
import { useDispatch} from "react-redux";
import { CreateSupplierASync} from "../AuthSlice";
import { BeatLoader} from "react-spinners";
import toast, { Toaster } from "react-hot-toast";

export default function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { reCaptcha } = useAuthContext();
  const [flag, setFlag] = useState(true);
  const [flag1, setFlag1] = useState(!true);
  const [flag2, setFlag2] = useState(true);
  const [OTP, setOTP] = useState();
  const [seepassword, setSeePassword] = useState(false);
  const [error, setError] = useState("");
  const [confirmObj, setConfirmObj] = useState();
  const [value, setValue] = useState();
  const [state, setState] = useState({
    First_Name: "",
    Last_Name: "",
    Mail_Id: "",
    Password: "",
    Confirm_Password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((preProps) => ({
      ...preProps,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    if (!state.First_Name) {
      setError("Please Fill First Name");
      return;
    }
    if (!state.Last_Name) {
      setError("Please Fill Last Name");
      return;
    }
    if (!value) {
      setError("Please Fill Phone Number");
      return;
    }
    if (!state.Mail_Id) {
      setError("Please Fill Email ID");
      return;
    }
    if (!state.Password) {
      setError("Please Fill Password");
      return;
    }
    if (!state.Confirm_Password) {
      setError("Please Confirm Password");
      return;
    }
    if (state.Password != state.Confirm_Password) {
      setError("Password do not Match");
      return;
    }
    const number = value;
    try {
      const response = await reCaptcha(number);
      setConfirmObj(response);
      setFlag(false);
    } catch (err) {
      setError("Invalid Phone Number");
    }
  };
  const handleOTP = async (e) => {
    setFlag1(true);
    e.preventDefault();

    try {
      await confirmObj.confirm(OTP);
      dispatch(
        CreateSupplierASync({
          First_Name: state.First_Name,
          Last_Name: state.Last_Name,
          Mail_ID: state.Mail_Id,
          Phone_Number: value,
          Password: state.Password,
        })
      );

      navigate("/splash");
    } catch (err) {
      setError(err.message);
    }
  };
  const Checkotp = (e) => {
    setOTP(e);
    document.getElementById("btn1").style.background = "#3131318a";
    document.getElementById("btn1").style.cursor = "default";

    if (e.length == 6) {
      document.getElementById("btn1").style.background = "#344B47";
      document.querySelector("#btn1").disabled = false;
      document.getElementById("btn1").style.color = "white";
      document.getElementById("btn1").style.cursor = "pointer";
    }
  };
  return (
    <div>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      <div className="grid lg:grid-cols-2 xl:mx-40 lg:mx-30 md:mx-20 justify-center items-center h-[100vh]">
        <div>
          <img src={man} alt="Signup" className=" rounded-l-2xl" />
        </div>
        {flag ? (
          <div className=" bg-light-blue-100   lg:px-0 xl:px-6 h-[86.3vh] rounded-r-2xl w-full py-10">
            <div className=" flex flex-col justify-center items-center ">
              <p className=" text-olive-green xl:text-5xl lg:text-4xl linden-hill-bold">
                Registration
              </p>
              <p className="kurale-regular xl:text-lg lg:text-sm pt-1">
                Let Digitilize your Shop{" "}
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="pt-10 xl:px-20 lg:px-10">
                <div className="flex  gap-1">
                  <label className="xl:text-xl lg:text-base abhaya-libre-regular w-[160px]">
                    First Name :-
                  </label>
                  <input
                    type="text"
                    name="First_Name"
                    value={state.First_Name}
                    onChange={handleInputChange}
                    className=" outline-none w-full bg-light-blue-100 border-b-[1px] border-olive-green lg:placeholder:text-sm  abeezee-regular placeholder:font-bold focus:border-b-olive-green"
                  />
                </div>
                <div className="flex  gap-1 mt-4">
                  <label
                    className="xl:text-xl lg:text-base  abhaya-libre-regular cursor-pointer w-[160px]"
                    ht="Last_Name"
                  >
                    Last Name :-
                  </label>
                  <input
                    type="text"
                    id="Last_Name"
                    name="Last_Name"
                    value={state.Last_Name}
                    onChange={handleInputChange}
                    className=" outline-none w-full  bg-light-blue-100 border-b-[1px] border-olive-green placeholder:text-2xl abeezee-regular placeholder:font-bold focus:border-b-olive-green"
                  />
                </div>
                <div className="pt-4 gap-1 flex ">
                  <label className="xl:text-xl lg:text-base abhaya-libre-regular lg:w-[250px]">
                    Phone Number :-
                  </label>
                  <PhoneInput
                    id="Phone_Number"
                    className="w-full  border-b-[1px] border-olive-green"
                    maxLength="11"
                    defaultCountry="IN"
                    value={value}
                    onChange={setValue}
                  />
                </div>
                <div className="pt-4 gap-1 flex">
                  <label className="xl:text-xl lg:text-base abhaya-libre-regular lg:w-[110px]">
                    Email Id :-
                  </label>
                  <input
                    type="email"
                    name="Mail_Id"
                    value={state.Mail_Id}
                    onChange={handleInputChange}
                    className=" outline-none w-full bg-light-blue-100 border-b-[1px] border-olive-green placeholder:text-2xl abeezee-regular placeholder:font-bold focus:border-b-olive-green"
                  />
                </div>
                <div className="pt-4 gap-1 flex">
                  <label className="xl:text-xl lg:text-base abhaya-libre-regular lg:w-[130px]">
                    Password :-
                  </label>

                  <input
                    type="password"
                    name="Password"
                    value={state.Password}
                    onChange={handleInputChange}
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    autoComplete="off"
                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                    className=" outline-none border-b-[1px] bg-light-blue-100 border-olive-green placeholder:text-2xl abeezee-regular w-full placeholder:font-bold focus:border-b-olive-green"
                  />
                </div>
                <div className="pt-4 gap-1 flex">
                  <label className="xl:text-xl lg:text-base abhaya-libre-regular lg:w-[300px]">
                    Confirm Password :-
                  </label>
                  <div className="flex w-full border-b-[1px] border-olive-green  ">
                    <input
                      type={!seepassword ? "password" : "text"}
                      name="Confirm_Password"
                      value={state.Confirm_Password}
                      onChange={handleInputChange}
                      autoComplete="off"
                      className=" outline-none w-full bg-light-blue-100 placeholder:text-2xl abeezee-regular placeholder:font-bold "
                    />
                    {seepassword ? (
                      <div onClick={() => setSeePassword(!seepassword)}>
                        <VisibilityOffTwoToneIcon />
                      </div>
                    ) : (
                      <div onClick={() => setSeePassword(!seepassword)}>
                        {" "}
                        <RemoveRedEyeTwoToneIcon />
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-4">
                  <p className="flex justify-center items-center  text-red">
                    {error}
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center pt-6 ">
                <button
                  type="submit"
                  className={` bg-olive-green px-10 py-3 ${
                    flag ? "none" : "block"
                  } abeezee-regular`}
                  id="btn"
                >
                  Register
                </button>
              </div>
            </form>
            <div
              id="recaptcha-contanier"
              className="flex py-2 justify-center items-center"
            />
            <p className="flex w-full justify-center items-center pt-6 cursor-default">
              Alredy Have an Account?
              <p
                className="text-olive-green cursor-pointer pl-2 text-lg font-semibold"
                id="login"
                onClick={() => navigate("/login")}
              >
                Login Now
              </p>
            </p>
          </div>
        ) : (
          <div className=" bg-light-blue-100 px-6 h-[86.3vh] flex flex-col justify-center items-center rounded-r-2xl w-full py-10">
            <div className=" flex flex-col justify-center items-center ">
              <p className=" text-olive-green text-3xl linden-hill-bold">
                Verify Phone
              </p>
              <p className="kurale-regular text-lg pt-1">
                Let Digitilize your Shop{" "}
              </p>
            </div>
            <form onSubmit={handleOTP} autoComplete="false">
              <div className="pt-10 px-20">
                <div className="pt-4 gap-1 flex ">
                  <label className="text-xl abhaya-libre-regular lg:w-[160px]">
                    Enter OTP :-
                  </label>
                  <input
                    type="text"
                    name="OTP"
                    value={OTP}
                    autoComplete="off"
                    maxLength="6"
                    onChange={(e) => Checkotp(e.target.value)}
                    className=" outline-none w-full bg-light-blue-100 border-b-[1px] border-olive-green placeholder:text-2xl abeezee-regular placeholder:font-bold focus:border-b-olive-green"
                  />
                </div>
              </div>
              <div className="flex justify-center items-center pt-6 ">
                {flag1 ? (
                  <BeatLoader color="#344B47" />
                ) : (
                  <button
                    type="submit"
                    className=" bg-olive-green-100 px-10 py-3 cursor-default abeezee-regular rounded-full  "
                    id="btn1"
                    disabled
                  >
                    Verify
                  </button>
                )}
              </div>
            </form>
            <p className="flex w-full justify-center items-center pt-6 cursor-default">
              {" "}
              Alredy Have an Account?
              <p
                className="text-olive-green cursor-pointer pl-2 text-lg font-semibold"
                id="login"
                onClick={() => navigate("/login")}
              >
                Log In
              </p>
            </p>
          </div>
        )}
      </div>
      :
    </div>
  );
}
