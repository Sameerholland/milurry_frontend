import React, { useState } from "react";
import man from "../../../Visules/Img/man.jpg";
import "../../../Style/main.css";
import "../../../Style/Signup.css";
import { useNavigate } from "react-router-dom";

export default function Forget_Password() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [state, setState] = useState({
    email:""
  });


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((preprops) => ({
      ...preprops,
      [name]: value,
    }));
  };

  

 
  const handleSubmit = (event) => {
    setError('')
    event.preventDefault();
    if (!state.email) {
      setError("Please Enter Email Id ");
    }
  };
  return (
    <div>
      <div className="grid grid-cols-2 mx-40 justify-center items-center h-[100vh]">
        
          <div className=" bg-light-blue-100 px-6 h-[87.3vh] flex flex-col justify-center items-center rounded-l-2xl w-full py-10">
            <div className=" flex flex-col justify-center items-center ">
              <p className=" text-olive-green text-5xl linden-hill-bold">
                Forget Password
              </p>
              <p className="kurale-regular text-lg pt-1">
                Let Digitilize your Shop{" "}
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="pt-10 px-20">
                <div className="pt-4 gap-1 flex ">
                  <label className="text-xl abhaya-libre-regular lg:w-[130px]">
                    Email Id :-
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={state.email}
                    onChange={handleInputChange}
                    className=" outline-none w-full bg-light-blue-100 border-b-[1px] border-olive-green placeholder:text-2xl abeezee-regular placeholder:font-bold focus:border-b-olive-green"
                  />
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
                  Send Link
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
