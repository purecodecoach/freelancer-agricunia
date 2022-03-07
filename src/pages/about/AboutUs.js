import React from "react";

const AboutUs = () => {


    const listing = [
        
            {
                name:"Cassava Produce (Garri) and stems for replanting",
            },
            
            {
                name:"Fishery ",
            },
            {
                name:"Edible Birds (Chicken & Turkey) ",
            },
            {
                name:"Pigs ",
            },
            {
                name:"Rabbits ",
            },
            {
                name:"Edible and medicinal vegetables ",
            },
            {
                name:"Whole grains ",
            },
            {
                name:"Livestock ",
            },
            {
                name:"Cocoa beans ",
            },
            {
                name:"Plantain plants ",
            },
            {
                name:"Cashew seeds ",
            },
            {
                name:"Sesame seeds ",
            },
            {
                name:"	Ginger ",
            },
            {
                name:"	Frozen shrimps ",
            },
            {
                name:"	Cotton ",
            },
            {
                name:"	And lots more ",
            },
          

        
    ]

  return (
    <div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 mt-20">
            <div class="flex flex-col lg:flex-row justify-between gap-8">
                <div class="w-full lg:w-5/12 ">
                <p class="text-base leading-6 text-green-600 font-semibold uppercase">
                    About AGRICUNIA 
                </p>
                <h4 class="mt-2 text-2xl leading-8 font-extrabold text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
              Some of our products 
              </h4>
                    <p class="font-normal text-base leading-6 text-gray-600 mt-4">AGRICUNIA is a leading Nigeria based bio-organic agricultural firm established to run the business of environmentally friendly agriculture using the best agricultural technology in farming, sales and supply of all kind of agricultural products. As bio-organic agricultural practitioners, we use non toxic Insecticides known as PEMASEPT BIO Insecticides on all our farms. As an extension of a leading globally recognized company known as AFRICUNIA, we are determined to transform agricultural practice in Nigeria by undertaking opportunities for growth and businesses that will engender sustainable food production and increased incomes for farmers in Nigeria. Our project is driven by team of experts with several years of experience in agricultural business, which brings to bare the best experience and expertise pedigree to our business.</p>

                    <p class="font-normal text-base leading-6 text-gray-600 mt-4">As a Nigerian globally affiliated Organic Bio Farm we are into production of major agricultural products and technologies varying from crops, livestock, birds, fishery to edible animals, and general pest control innovation technologies in conjunction with some of our active partners like <b> PEMA Innotech Swiss GmbH </b>.</p>
                </div>
                <div class="w-full lg:w-8/12">
                    <img class="w-full h-auto" src="./images/about-1.jpg" alt="A group of People" />
                </div>
            </div>


        </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 mt-12">
        <div class="relative">
          <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div class="lg:col-start-2 lg:max-w-2xl ml-auto">
              <p class="text-base leading-6 text-green-600 font-semibold uppercase">
                About AGRICUNIA 
              </p>
              <h4 class="mt-2 text-2xl leading-8 font-extrabold text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
              Some of our products 
              </h4>
              <p class="mt-4 font-normal text-base leading-6 text-gray-600">
              We aim to increase the general availability of agricultural produce and also help connect more private investors and farmers to better ways of incorporating unique effective agricultural technologies into their farms and businesses. This means we are not just here to create an unlimited flow of agricultural produce, but we are also ready to help the nation and its neighboring African countries grow their economies through the extensive rise of agriculture as a culture.

              </p>
              <ul class="mt-8 md:grid md:grid-cols-2 gap-6">
                {listing.map((items) => 
                <li class="mt-6 lg:mt-0">
                  <div class="flex">
                    <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                      <svg
                        class="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span class="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                        {items.name}
                    </span>
                  </div>
                </li>
                )}
              </ul>
              <p class="mt-4 font-normal text-base leading-6 text-gray-600">
              The purpose is to complement Nigerian most challenging Agricultural problems by creating better means of improving agricultural produce and at the same time offering thousands of ready investors and farmers the ability to tap into African next agricultural identity -  AGRICUNIA. We also pride ourselves as passionate agents out to make the world an environmentally secure place for humans, animals, and crops through the supply of effective pesticide technology with zero toxicity against the ecosystem. AGRICUNIA is the new Face of Africa’s Agriculture and we come prepared for everything.


              </p>
            </div>
            <div class="mt-10 lg:-mx-4 relative relative-20 lg:mt-0 lg:col-start-1">
              <div class="relative space-y-4">
                <div class="flex items-end justify-center lg:justify-start space-x-4">
                  <img
                    class="rounded-lg shadow-lg w-32 md:w-56"
                    width="200"
                    src="./images/about-1.jpg"
                    alt="1"
                  />
                  <img
                    class="rounded-lg shadow-lg w-40 md:w-64"
                    width="260"
                    src="./images/about-2.jpg"
                    alt="2"
                  />
                </div>
                <div class="flex items-start justify-center lg:justify-start space-x-4 ml-12">
                  <img
                    class="rounded-lg shadow-lg w-24 md:w-40"
                    width="170"
                    src="./images/about-3.jpg"
                    alt="3"
                  />
                  <img
                    class="rounded-lg shadow-lg w-32 md:w-56"
                    width="200"
                    src="./images/about-4.jpg"
                    alt="4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
