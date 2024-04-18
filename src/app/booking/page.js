"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Booking() {
    const [bookingData, setbookingData] = useState({
        name: "",
        email: "",
        venue: "",
        date: "",
        seat: "",
    });

    // Create Hook router to use in button or to navigate
    const router = useRouter();

    // Create function to Hook router using button or to navigate automatically
    const navigate = (page_link) => {
        router.push(page_link);
    };

    const handleBooking = (f) => {
        f.preventDefault();
        console.log(bookingData);
        fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/bookticket`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bookingData),
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data.message);
                alert(data.message);
                if (data.message === "Ticket Booked successfully")
                    alert("Your Ticket id is: " + data.id + "\nSave it for future use...");
                navigate("/");
            })
            .catch((err) => console.log(err));
    };

    return (
        <main className="bg-slate-300 p-4">
            {/* <div className="flex flex-col text-center items-center justify-center py-20"> */}
            <div className="flex flex-wrap items-center place-content-evenly p-6 text-black gap-6">


                {/* {Registration for Ticket Booking starts here} */}
                <div className="p-8 border-4 border-yellow bg-black shadow-2xl rounded-3xl">
                    <h1 className="text-yellow">Ticket Booking</h1>
                    <form /*action = "/send-data-here"*/ method="post" className="flex flex-col mt-8 text-center items-center justify-center gap-6">
                        <input
                            type="text"
                            placeholder="Name"
                            required
                            onChange={(f) => {
                                setbookingData({ ...bookingData, name: f.target.value });
                            }}
                        />
                        <input
                            type="text"
                            placeholder="Email"
                            required
                            onChange={(f) => {
                                setbookingData({ ...bookingData, email: f.target.value });
                            }}
                        />
                        <select
                            required
                            onChange={(f) => {
                                setbookingData({ ...bookingData, venue: f.target.value });
                            }}
                        >
                            <option value="" disabled selected hidden>
                                Venue
                            </option>
                            <option value="I Hall">I Hall</option>
                            <option value="Alumni Seminar Hall">Alumni Seminar Hall</option>
                            <option value="Parade Ground">Parade Ground</option>
                            <option value="Lord's Ground">Lord's Ground</option>
                        </select>
                        <input
                            type="date"
                            required
                            onChange={(f) => {
                                setbookingData({ ...bookingData, date: f.target.value });
                            }}
                        />
                        <input
                            type="text"
                            placeholder="No. of Seats"
                            onChange={(f) => {
                                setbookingData({ ...bookingData, seat: f.target.value });
                            }}
                        />
                        <button type="submit" className="custom-button-1" onClick={handleBooking}>
                            Book Ticket
                        </button>
                    </form>
                    <a className="text-yellow float-right mb-10 mt-3 text-xs" href="/">
                        <p className="">Already booked ticket? GO to Home Page..</p>
                    </a> 
                </div>
                {/* {Registration for Ticket Booking ends here} */}
            </div>
        </main>
    );
}
