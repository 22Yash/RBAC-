import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../assets/img/signupimg.jpg"
import logo from "../assets/img/logojpeg.jpeg"

const SignupForm = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Viewer",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally send data to the backend for processing
    console.log(userData);
    // Redirect to dashboard or another page
    navigate("/dashboard");
  };

  return (
    <div
      id="Signup"
      className="bg-gradient-to-b from-[#0a141f] to-[#142e48] w-full h-screen xl:grid xl:grid-cols-2 "
    >
      <div id="first" className="">
        <h2 className="text-[30px] ml-[100px] mt-[120px] font-bold text-white ">
          Log In
        </h2>
        <p className="text-[#E0E1DD] ml-[100px] mt-[10px] text-[20px]">
          Your security is our priority.
        </p>
        <div className=" xl:w-[500px] xl:mt-[20px] xl:p-[20px]     ml-[80px]">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div id="name">
              <label
                htmlFor=""
                className="text-[20px] ml-[0px] text-white font-semibold"
              >
                Name{" "}
              </label>
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="p-2 w-full border mt-[5px] rounded-[10px] text-white bg-transparent"
              />
            </div>
            <div id="email">
              <label
                htmlFor=""
                className="text-[20px] ml-[0px]  mt-[10px] text-white font-semibold"
              >
                Email{" "}
              </label>

              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="p-2 w-full border mt-[5px] text-white rounded-[10px] bg-transparent"
              />
            </div>
            <div id="password">
            <label
              htmlFor=""
              className="text-[20px] ml-[-0px] text-white font-semibold"
            >
              Password{" "}
            </label>

            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="p-2 w-full border mt-[5px] text-white rounded-[10px] bg-transparent"
            />
            </div>

            

            <button type="submit" className="p-2 rounded-[10px] h-[50px] hover:bg-[#0077B6] bg-blue-500 text-white w-full">
             Log In
            </button>
          </form>
        </div>
      </div>
      <div id="second" className=" rounded-bl-[230px] bg-gradient-to-br from-slate-900 to-sky-900"
      style={{
        background: `rgb(7,68,113)`,
        background: 'radial-gradient(circle at center, #0c29eb , #9b7bff)', 
        
        
      }} >
        <div id="login" className="flex flex-col justify-center items-center">
        <img src={logo} alt="" className=" mt-[80px] w-[200px]  " />
        <div id="company" className="border-[1px] border-white w-[400px] rounded-[20px] mt-[20px] ">
        <h1 className="text-[#E0E1DD] w-[400px] mt-[0px] ml-[20px] xl:text-[60px] xl:font-bold">
            VRV Security
          </h1>
          <h1 className="text-[#E0E1DD] w-[400px] text-center  mt-[-30px] ml-[0px] xl:text-[60px] xl:font-bold">
            System
          </h1>
        </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
