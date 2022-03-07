import React from 'react'

function MultiBar({ticketDate, totalTickets, ongoin, hold, closed, totalPercentage}) {
    return (
        <div className="w-full">
            <div className="flex justify-between">
                <div>
                    <p className="td_p_dark">{ticketDate}</p>
                </div>
                <div>
                    <p className="td_p_dark"> <span className="td_p_light"> Tickets:  </span>  {totalTickets}</p>
                </div>
            </div>


            <div className="flex">
                <div className="bg-scogoeee w-full relative h-2.5 rounded-md mt-1 overflow-hidden">
                    <div style={{ width: ongoin }} className="bg-scogogoing absolute top-0 h-2.5  rounded-md z-20"></div>
                    <div style={{ width: hold }} className="bg-scogoclosed absolute top-0 h-2.5 z-10 rounded-md"></div>
                    <div style={{ width: closed }} className="bg-scogoorange absolute top-0 h-2.5 z-0 rounded-md"></div>
                </div>

                <div>
                    <p className="td_p_dark ml-1">{totalPercentage}%</p>
                </div>
            </div>

            <div className="flex justify-between mt-2">
                <div className="text-scogogray text-font11 font-normal">
                    <span class="material-icons text-scogoorange text-font10 mr-1">
                        circle
                    </span>
                    Ongoing (5)
                </div>
                <div className="text-scogogray text-font11 font-normal">
                    <span class="material-icons text-scogoclosed text-font10 mr-1">
                        circle
                    </span>
                    Hold(10)
                </div>
                <div className="text-scogogray text-font11 font-normal">
                    <span class="material-icons text-scogo2e text-font10 mr-1">
                        circle
                    </span>
                    Closed (15)
                </div>
            </div>
        </div>
    )
}

export default MultiBar
