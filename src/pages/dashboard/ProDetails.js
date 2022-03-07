import React from "react";
import Buttons from "../../common/Buttons";
import Slider from "react-slick";



function ProDetails(props) {
    const [openTab, setOpenTab] = React.useState(1);

    const viewMore = () => {

    }


    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    };

    const mediaImag = [
        {
            teamAvtar: './img/p1.png',
        },
        {
            teamAvtar: './img/p2.png',
        },
        {
            teamAvtar: './img/p3.png',
        },
        {
            teamAvtar: './img/p4.png',
        },
        {
            teamAvtar: './img/p5.png',
        },
        {
            teamAvtar: './img/mobile.png',
        },
    ]


    const teamsmember = [
        {
            teamAvtar: './img/avtar.png',
            memberName: 'Adam Clark',
            memberEmail: 'adam123@scogo.in',
        },
        {
            teamAvtar: './img/avtar1.png',
            memberName: 'James White',
            memberEmail: 'jameswhite@scogo.in',
        },

        {
            teamAvtar: './img/avtar2.png',
            memberName: 'Michael Johnson',
            memberEmail: 'michaelj@scogo.in',
        },


    ]

    const process = [
        {
            processStatus: 'Waiting for SP to accept the Ticket',
            processTime: 'Ticket Broadcasted on 05-07-2021 5:17 pm',
            status: true
        },
        {
            processStatus: 'FE Status',
            processTime: 'Waiting for SP to Accept the Ticket',
            status: true
        },
        {
            processStatus: 'Work In Progress',
            processTime: 'Waiting for SP to Accept the Ticket',
            status: false
        },
        {
            processStatus: 'FE Status',
            processTime: 'Waiting for SP to Accept the Ticket',
            status: true
        },
        {
            processStatus: 'Work In Progress',
            processTime: 'Waiting for SP to Accept the Ticket',
            status: true
        },



    ]

    const cancleProBtn = () =>{
        props.closeProSide()
    }
    return (
        <div className="sticky top-16 border-scogoddd border-l">
            <div className="flex items-center px-3 py-2">
                <div className="w-full items-center ">
                    <p className="text-scogo15 text-font16 font-rubik font-medium">P-CSNC-CS-0002</p>
                </div>
                <div className="flex">
                    <div className="cursor-pointer">
                        <span class="material-icons text-scogoprimary ">
                            more_vert
                        </span>
                    </div>
                    <div className="cursor-pointer" onClick={cancleProBtn}>
                        <span class="material-icons text-scogogray" >
                            highlight_off
                        </span>
                    </div>
                </div>
            </div>
            <div className="border-2 border-scogof2 h-16">
                <div className="flex w-full h-16 items-center px-3">
                    <div>
                        <div className="">
                            <ul className="flex">
                                <li>
                                    <a href="#"
                                        className={
                                            "2xl:text-font16 text-font12 font-bold  px-5 pt-3 pb-5 block leading-normal " +
                                            (openTab === 1
                                                ? "scogoprimary border-b-2 border-scogoprimary"
                                                : "text-scogogray bg-white")
                                        }
                                        onClick={e => {
                                            e.preventDefault();
                                            setOpenTab(1);

                                        }}
                                        data-toggle="tab"
                                        href="#link1"
                                        role="tablist"
                                    >
                                        Details
                                    </a>
                                </li>
                                <li>
                                    <a href="#"
                                        className={
                                            "2xl:text-font16 text-font12 font-bold px-5 pt-3 pb-5 block leading-normal " +
                                            (openTab === 2
                                                ? "scogoprimary border-b-2 border-scogoprimary"
                                                : "text-scogogray bg-white")
                                        }
                                        onClick={e => {
                                            e.preventDefault();
                                            setOpenTab(2);

                                        }}
                                        data-toggle="tab"
                                        href="#link2"
                                        role="tablist"
                                    >
                                        Members
                                    </a>
                                </li>
                                <li>
                                    <a href="#"
                                        className={
                                            "2xl:text-font16 text-font12 font-bold  px-5 pt-3 pb-5 block leading-normal " +
                                            (openTab === 3
                                                ? "scogoprimary border-b-2 border-scogoprimary"
                                                : "text-scogogray bg-white")
                                        }
                                        onClick={e => {
                                            e.preventDefault();
                                            setOpenTab(3);

                                        }}
                                        data-toggle="tab"
                                        href="#link2"
                                        role="tablist"
                                    >
                                        Resources
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* <div className="">
                            <div className="absolute top-5 left-1 mr-4 cursor-pointer">
                                <span class="material-icons" >
                                    highlight_off
                                </span>
                            </div>
                        </div> */}

                    </div>

                </div>
            </div>


            <div className="h-screen overflow-y-auto bg-white overflow-x-hidden pb-168">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                    <div className="">
                        <div className="md:flex pl-5 pt-6">
                            <div className="md:w-6/12">
                                <h3 className="text-scogo99 2xl:text-font15 text-font12 font-medium">Project Name</h3>
                                <h5 className="2xl:text-font15 text-font12 font-medium text-scogo11">Demo_Support</h5>
                            </div>
                            <div className="md:w-6/12">
                                <h3 className="text-scogo99 2xl:text-font15 text-font12 font-medium">Name</h3>
                                <h5 className="2xl:text-font15 text-font12 font-medium text-scogo11">Demo_Support</h5>
                            </div>

                        </div>

                        <div className="md:flex pl-5 pt-6">
                            <div className="md:w-6/12">
                                <h3 className="text-scogo99 2xl:text-font15 text-font12 font-medium">Client Name</h3>
                                <h5 className="2xl:text-font15 text-font12 font-medium text-scogo11">Finance</h5>
                            </div>

                            <div className="md:w-6/12">
                                <h3 className="text-scogo99 2xl:text-font15 text-font12 font-medium">SPOC Detail</h3>
                                <h5 className="flex 2xl:text-font15 text-font12 font-medium text-scogo11">Nitin Dhawal
                                </h5>
                                <h5 className="flex 2xl:text-font15 text-font12 font-medium text-scogoprimary">9876543215
                                </h5>
                            </div>
                        </div>

                        <div className="md:flex pl-5 pt-6">
                            <div className="md:w-6/12">
                                <h3 className="text-scogo99 2xl:text-font15 text-font12 font-medium">Service Type</h3>
                                <h5 className="2xl:text-font15 text-font12 font-medium text-scogo11">Customer Support</h5>
                            </div>
                            <div className="md:w-6/12">
                                <h3 className="text-scogo99 2xl:text-font15 text-font12 font-medium">SPOC Detail</h3>
                                <h5 className="2xl:text-font15 text-font12 font-medium text-scogo11">Networking</h5>
                            </div>

                        </div>

                        <div className="pt-6 pl-5">
                            <h3 className="text-scogo99 2xl:text-font15 text-font12 font-medium">Description</h3>
                            <h5 className="2xl:text-font15 text-font12 font-medium text-scogo11">Lorem ipsum dolor sit amet, nue consect tur adi iscing euisd ferm entum ornare vitae, pretium et pretium risus.</h5>
                        </div>
                        <div className="pt-6 pl-5 flex">
                            <Buttons
                                buttonClass="border-2 px-6 2xl:h-8 h-6 mr-2 rounded-md border-scogoprimary bg-scogoprimary text-white font-medium 2xl:text-font16 text-font14"
                                type=""
                                children="Edit"
                            />
                            <Buttons
                                buttonClass="text-scogoprimary whitespace-nowrap bg-white mr-2 px-6 2xl:h-8 h-6 font-medium 2xl:text-font16 text-font14 flex items-center justify-center rounded-6px border border-scogoprimary"
                                children="Tag PM"
                                Btnalt=""
                                onClick={viewMore}
                            />
                            <Buttons
                                buttonClass="text-scogoprimary whitespace-nowrap bg-white mr-2 px-6 2xl:h-8 h-6 font-medium 2xl:text-font16 text-font14 flex items-center justify-center rounded-6px border border-scogoprimary"
                                children="Notify"
                                Btnalt=""
                                onClick={viewMore}
                            />
                        </div>
                    </div>





                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                    Two
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link2">
                    Three
                </div>
            </div>
        </div>
    )
}

export default ProDetails
