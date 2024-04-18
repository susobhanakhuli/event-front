"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Booking() {
    // const [show, setShow] = useState(false);
    const [ticks, setTicks] = useState([]);
    const [show, setshow] = useState(false);
    const [ticketData, setTicketData] = useState("");

    // Create Hook router to use in button or to navigate
    const router = useRouter();

    // Create function to Hook router using button or to navigate automatically
    const navigate = (page_link) => {
        router.push(page_link);
    };

    const getTicketDetails = () => {
        // console.log(ticketData);
        setshow(!show);
        fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/ticket/${ticketData}`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setTicks(data.user);
            })
            .catch((err) => {
                console.log(err);
                // alert(err);
                // navigate("/booking");
            });
    };

    return (
        <main className="bg-slate-300 p-4">
            {/* <div className="flex flex-col text-center items-center justify-center py-20"> */}
            <div className="flex flex-wrap items-center place-content-evenly p-6 text-black gap-6">

                {/* {Ticket Details Searching starts here} */}
                <div className="p-8 border-4 border-yellow bg-black shadow-2xl rounded-3xl">
                    <form method="post" className="flex flex-col mt-8 text-center items-center justify-center gap-6">
                        <h1 className="text-yellow">Booked Ticket Search</h1>
                        <input
                            type="text"
                            placeholder="Ticket ID"
                            onChange={(e) => {
                                setTicketData(e.target.value);
                            }}
                        />
                        {/* <button type="submit" className="custom-button-1" onClick={handleBooking}>
                            Book Ticket
                        </button> */}
                        <button type="submit" className="custom-button-1 w-[13rem]" onClick={getTicketDetails}>{show? "Hide Ticket Details" : "Search Ticket Details"}</button>
                    </form>
                    <div className="h-[12rem] w-[30rem] flex flex-col justify-center items-center text-center text-yellow">
                        {ticks && show && (
                            <div className="flex flex-col justify-center items-center text-center">
                                <h3>Name: {ticks.name}</h3>
                                <p>Email: {ticks.email}</p>
                                <p>Venue: {ticks.venue}</p>
                                <p>Date: {ticks.date}</p>
                                <p>Booked Seats: {ticks.seat}</p>
                                <br />
                            </div>
                        )}
                    </div>
                </div>
                {/* {Ticket Details Searching ends here} */}
            </div>
        </main>
    );
}
