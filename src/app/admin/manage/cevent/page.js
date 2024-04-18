"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CreateEvent() {

    const [createEventData, setcreateEventData] = useState({
        event_name: "",
        venue: "",
        date: "",
        total_seats: "",
    });

    // const getSavedToke = () => {
    //   const token = localStorage.getItem("aToken");
    //   console.log(token);
    // };

    const logOut = async () => {
        try {
            const token = localStorage.getItem("aToken");
            localStorage.removeItem("aToken");
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/admin/logout`, {
                method: "GET",
                headers: {
                    "content-type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await response.json();
            alert(data.message);
            navigate("/admin");
        }
        catch (err) {
            console.log(err);
        }
    };

    const handleEventCreation = (e) => {
        e.preventDefault();
        const token = localStorage.getItem("aToken");
        console.log(createEventData);
        fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/admin/createevent`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(createEventData),
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data.message);
                alert(data.message);
                if (data.message === "Event Created successfully")
                    navigate("/admin/manage");
            })
            .catch((err) => console.log(err));
    };

    // Create Hook router to use in button
    const router = useRouter();

    // Create function to Hook router using button
    const navigate = (page_link) => {
        router.push(page_link);
    };

    return (
        <main className="bg-slate-300">
            <div className="flex flex-col justify-center items-center text-center py-16">
                <div className="p-8 border-4 border-yellow bg-black text-white shadow-2xl rounded-3xl">
                    <div className="flex flex-col justify-center items-center text-center">
                        {/* {Event Creation starts here} */}
                        <div className="p-8 border-4 border-yellow bg-black shadow-2xl rounded-3xl">
                            <h1 className="text-yellow">Event Creation</h1>
                            <form method="post" className="flex flex-col mt-8 text-center items-center justify-center gap-6">
                                <input
                                    type="text"
                                    placeholder="Event Name"
                                    required
                                    onChange={(e) => {
                                        setcreateEventData({ ...createEventData, event_name: e.target.value });
                                    }}
                                />
                                <select
                                    required
                                    onChange={(e) => {
                                        setcreateEventData({ ...createEventData, venue: e.target.value });
                                    }}
                                >
                                    <option value="" disabled selected hidden>
                                        Venue
                                    </option>
                                    <option value="I Hall">I Hall</option>
                                    <option value="Alumni Seminar Hall">Alumni Seminar Hall</option>
                                    <option value="Parade Ground">Parade Ground</option>
                                    <option value="Lords Ground">Lords Ground</option>
                                </select>
                                <input
                                    type="date"
                                    required
                                    onChange={(e) => {
                                        setcreateEventData({ ...createEventData, date: e.target.value });
                                    }}
                                />
                                <input
                                    type="text"
                                    placeholder="Total Seats"
                                    required
                                    onChange={(e) => {
                                        setcreateEventData({ ...createEventData, total_seats: e.target.value });
                                    }}
                                />
                                <button type="submit" className="custom-button-1" onClick={handleEventCreation}>
                                    Create
                                </button>
                            </form>
                        </div>
                        {/* {Event Creation ends here} */}
                        <div className="flex my-5 gap-4">

                            {/* Log Out */}
                            <button className="custom-button-1" onClick={() => navigate("/admin/manage")}>Menu</button>
                            <button className="custom-button-1" onClick={logOut}>Log Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
