import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Buttons from "../../common/Buttons";
import InputFiels from "../../common/InputFiels";

function Register() {
    const history = useHistory()

    const LoginFornBtn = () =>{
        history.push("/")
    }

    return (
    <>
      <div class="flex flex-col w-full max-w-2xl px-4 py-16 bg-gray-50 relative rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10 md:mt-48 mt-24 mx-auto">
        <div className="text-center w-full bg-white">
          <img
            src="./images/logo.png"
            width={100}
            alt=""
            className=" -mt-28 mx-auto bg-white px-2 py-3 rounded-full border-2 border-green-600"
          />
        </div>
        <div class="self-center mb-6 text-xl font-light text-green-600 sm:text-2xl  font-bold	">
          Sign Up
        </div>
        <div class="mt-2">
          <h5 className="text-center mb-6 text-gray-900 font-bold text-xl">
            Field With <span className="text-red-800">*</span> Required
          </h5>
          <div>
            <div class="md:flex w-full gap-4 mb-5">
              <div class=" md:w-1/2 w-full  md:mt-0 mt-5">
                <h5 className=" mb-2 text-gray-900 font-medium text-base">
                  <span className="text-red-800">*</span> Email
                </h5>
                <input
                  type="Email"
                  id="sign-in-email"
                  class=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-green-600 focus:border-transparent"
                  placeholder="Enter a vailid Email Address"
                />
              </div>
              <div class=" md:w-1/2 w-full md:mt-0 mt-5">
                <h5 className=" mb-2 text-gray-900 font-medium text-base">
                  <span className="text-red-800">*</span> Phone Number
                </h5>
                <input
                  type="tel"
                  id="sign-in-email"
                  class=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-green-600 focus:border-transparent"
                  placeholder="Enter a vailid Phone Number"
                />
              </div>
            </div>

            <div class="md:flex w-full gap-4 mb-5">
              <div class=" md:w-1/2 w-full  md:mt-0 mt-5">
                <h5 className=" mb-2 text-gray-900 font-medium text-base">
                  <span className="text-red-800">*</span> First Name
                </h5>
                <input
                  type="text"
                  id="sign-in-email"
                  class=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-green-600 focus:border-transparent"
                  placeholder="Enter a vailid First Name"
                />
              </div>
              <div class=" md:w-1/2 w-full  md:mt-0 mt-5">
                <h5 className=" mb-2 text-gray-900 font-medium text-base">
                  <span className="text-red-800">*</span> Last Name
                </h5>
                <input
                  type="text"
                  id="sign-in-email"
                  class=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-green-600 focus:border-transparent"
                  placeholder="Enter a vailid Last Name"
                />
              </div>
            </div>

            <div class="md:flex w-full gap-4 mb-5">
              <div class=" md:w-1/2 w-full  md:mt-0 mt-5">
                <h5 className=" mb-2 text-gray-900 font-medium text-base">
                  <span className="text-red-800">*</span> Password
                </h5>
                <input
                  type="password"
                  id="sign-in-email"
                  class=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-green-600 focus:border-transparent"
                  placeholder="Enter a very secure Password"
                />
                <p className="text-sm text-gray-600 mt-2 text-center">Minimum 6 Characters (must have an Upparcase letter a lowercase letter and a Number)</p>
              </div>
              <div class=" md:w-1/2 w-full  md:mt-0 mt-5">
                <h5 className=" mb-2 text-gray-900 font-medium text-base">
                  <span className="text-red-800">*</span> Confirm Password
                </h5>
                <input
                  type="password"
                  id="sign-in-email"
                  class=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-green-600 focus:border-transparent"
                  placeholder="Re Enter Password"
                />
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="offers"
                  name="offers"
                  type="checkbox"
                  className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm
              
              ">
                <label htmlFor="offers" className="font-medium text-gray-700">
                  I Agree to the Terms {"&"} Condition
                </label>
              </div>
            </div>

            <div class="flex w-full mt-4">
              <button
                type="submit"
                class="py-2 px-4 text-white	 bg-gradient-to-r from-green-400 to-green-600 green-800 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Register
              </button>
            </div>

            <div className="mt-5 sm:mt-8">
              <div className="mt-3 sm:mt-0 text-center">
                <button className="md:w-1/2 w-full  py-2 px-4 border-2 border-green-600 text-base font-semibold  rounded-md text-green-700 bg-white" onClick={LoginFornBtn}>
                  I Have Alreadt Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
