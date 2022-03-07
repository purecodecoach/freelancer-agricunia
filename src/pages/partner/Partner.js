import React, { useState } from "react";

const Partner = () => {
    const [show, setShow] = useState(false);

  const partnersLink = [
    {
      targetLink: "https://pema-innotech.com/home-en.html",
      logoImage: "./images/logo-1.png",
    },
    {
        targetLink: "https://sosuiben.org/",
        logoImage: "./images/logo-2.png",
      },
      {
        targetLink: "https://africuniabank.com/",
        logoImage: "./images/logo-3.png",
      },
      {
        targetLink: "https://vendabuy.com/",
        logoImage: "./images/logo-4.png",
      },
      {
        targetLink: "",
        logoImage: "./images/logo-5.png",
      },
  ];

  return (
    <div class="max-w-7xl mx-auto px-4 sm:px-6 mt-20">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center text-center space-y-4">
          <h1 className="text-3xl lg:text-4xl font-semibold leading-9 md:leading-7 lg:leading-9 text-gray-800">
            Our Trusted Partners
          </h1>
          <p className="text-base leading-6 text-center text-gray-600 w-full md:w-10/12">
            We just got featured in the following companies and it has been the
            most incredible journey. We work with the best fashion companies
            across the world
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 w-full lg:grid-cols-3  justify-items-around gap-x-6 gap-y-6 xl:gap-x-8 mt-10">
          {partnersLink.map((items) => (
            <div className="w-full h-72 focus:outline-none border focus:border-gray-800 border-transparent bg-gray-50 flex justify-center items-center flex-col text-center py-14 px-12 space-y-6">
              <a href={items.targetLink} target="_blank">
                <img src={items.logoImage} className="w-full h-auto"/>
              </a>
            </div>
          ))}
        </div>
      </div>


      <div className="bg-gradient-to-b from-green-600 to-green-700 h-96 w-full relative">
            <div className="w-full flex items-center justify-center my-12">
                <div className="absolute top-40 bg-white shadow rounded py-12 lg:px-28 px-8">
                    <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">Let’s Become a Partners</p>
                   
                    
                        <div className="w-full flex flex-col mt-12">
                            
                            <input tabIndex={0} role="input" placeholder="Name" arial-label="Please input company name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-green-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-600 "  />
                        </div>

                        <div className="w-full flex flex-col mt-4">
                          
                            <input tabIndex={0} role="input" placeholder="Email" arial-label="Please input company name" type="email" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-green-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-600 "  />
                        </div>

                        <div className="w-full flex flex-col mt-4">
                            
                            <input tabIndex={0} role="input" placeholder="Phone" arial-label="Please input company name" type="number" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-green-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-600 "  />
                        </div>
                        
                    
                    <div>
                        <div className="w-full flex flex-col mt-8">
                            
                            <textarea tabIndex={0} aria-label="leave a message" placeholder="Tell us what kind of partnership you can provide" role="textbox" type="name" className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-green-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-600 resize-none" defaultValue={""} />
                        </div>
                    </div>
                    <p className="text-xs leading-3 text-gray-600 mt-4">By clicking submit you agree to our terms of service, privacy policy and how we use data as stated</p>
                    <div className="flex items-center justify-center w-full">
                        <button className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-green-700 rounded hover:bg-green-600 focus:ring-2 focus:ring-offset-2 focus:ring-green-700 focus:outline-none">SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Partner;
