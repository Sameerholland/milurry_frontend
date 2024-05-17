import React, { useState } from "react";
import man from "../../../Visules/Img/man.jpg";
import "../../../Style/main.css";
import "../../../Style/Signup.css";
import RemoveRedEyeTwoToneIcon from "@mui/icons-material/RemoveRedEyeTwoTone";
import VisibilityOffTwoToneIcon from "@mui/icons-material/VisibilityOffTwoTone";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoggedSupplier, LoginSupplierAsync } from "../AuthSlice";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(LoggedSupplier)
  const [seepassword, setSeePassword] = useState(false);
  const [error, setError] = useState("");
  const [state, setState] = useState({
    Contact_Number: "",
    Password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((preProps) => ({
      ...preProps,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    setError("");
    event.preventDefault();
    if (!state.Contact_Number) {
      setError("Please Fill Phone Number");
      return;
    }
    if (!state.Password) {
      setError("Password is required");
      return;
    }
    dispatch(
      LoginSupplierAsync({
        Phone_Number: 91 + state.Contact_Number,
        Password: state.Password,
      })
    );

    navigate('/splash')
  };
  return (
    <div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 mx-40 justify-center items-center h-[100vh]">
        <div className=" bg-light-blue-100 px-6 h-[87.3vh] flex flex-col justify-center items-center rounded-l-2xl w-full py-10">
          <div className=" flex flex-col justify-center items-center ">
            <p className=" text-olive-green text-5xl linden-hill-bold">Login</p>
            <p className="kurale-regular text-lg pt-1">
              Let Digitilize your Shop{" "}
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="pt-10 px-20">
              <div className="pt-4 gap-1 flex ">
                <label className="text-xl abhaya-libre-regular lg:w-[245px]">
                  Phone Number :-
                </label>
                <input
                  type="tel"
                  name="Contact_Number"
                  maxLength="10"
                  value={state.Contact_Number}
                  onChange={handleInputChange}
                  className=" outline-none w-full bg-light-blue-100 border-b-[1px] border-olive-green placeholder:text-2xl abeezee-regular placeholder:font-bold focus:border-b-olive-green"
                />
              </div>

              <div className="pt-4 gap-1 flex ">
                <label className="text-xl abhaya-libre-regular lg:w-[130px]">
                  Password :-
                </label>
                <div className="border-olive-green border-b-[1px] flex w-full">
                  <input
                    type={!seepassword ? "password" : "text"}
                    name="Password"
                    value={state.Password}
                    onChange={handleInputChange}
                    autoComplete="off"
                    className=" outline-none  bg-light-blue-100  placeholder:text-2xl abeezee-regular w-full placeholder:font-bold focus:border-b-olive-green"
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
                <p
                  className=" flex justify-center items-center pt-3 cursor-pointer"
                  onClick={() => navigate("/forget-password")}
                >
                  Forget Password
                </p>
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
                className=" bg-olive-green px-10 py-3 abeezee-regular"
                id="btn"
              >
                Log In
              </button>
            </div>
          </form>
          <p className="flex w-full justify-center items-center pt-6 cursor-default">
            {" "}
            Have not an Account?
            <p
              className="text-olive-green cursor-pointer pl-2 text-lg font-semibold"
              id="login"
              onClick={() => navigate("/signup")}
            >
              Create Account
            </p>
          </p>
        </div>
        <div>
          <img src={man} alt="Signup" className=" rounded-r-2xl" />
        </div>
      </div>
    </div>
  );
}
