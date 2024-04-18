"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function GetMyProfile() {
    const [show, setShow] = useState(false);
    const [eves, setEves] = useState([]);

    // const getSavedToke = () => {
    //   const token = localStorage.getItem("aToken");
    //   console.log(token);
    // };

    const logOut = async () => {
        try {
            const token = localStorage.getItem("aToken");
            localStorage.removeItem("aToken");
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/logout`, {
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

    const getEventList = () => {
        setShow(!show);
        const token = localStorage.getItem("aToken");
        fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/admin/geteventlist`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setEves(data);
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
            <div className="flex gap-[2vh] flex-wrap justify-evenly py-10 text-2xl font-serif">
                <a href="/admin/manage/cevent">
                    <div className="w-[50vh] h-[17rem] border flex justify-center items-center">
                        Create Event
                    </div>
                </a>
                <a href="/admin/manage/aevent">
                    <div className="w-[50vh] h-[17rem] border flex justify-center items-center">
                        Alter Event
                    </div>
                </a>
                <a href="/about">
                    <div className="w-[50vh] h-[17rem] border flex justify-center items-center">
                        See Feedbacks
                    </div>
                </a>
            </div>
            <div className="flex flex-col justify-center items-center text-center py-16">
                <div className="p-8 border-4 border-yellow bg-black text-white shadow-2xl rounded-3xl">
                    {/* Get My Profile API */}

                    <h1 className="text-yellow">Event List</h1>
                    {/* <button onClick={getSavedToke}>Saved Token Details</button> */}

                    {/* Get My Profile */}
                    <button className="custom-button-2 my-5" onClick={getEventList}>{show ? "Hide Events List" : "Show Events List"}</button>
                    {eves && show && (
                        <div className="flex flex-col justify-center items-center text-center">
                            {eves.map((tod) => {
                                return (
                                    <div key={tod._id}>
                                        <h3>Event Name: {tod.event_name}</h3>
                                        <p>Venue: {tod.venue}</p>
                                        <p>Date: {tod.date}</p>
                                        <p>Total Seats: {tod.total_seats}</p>
                                        <br />
                                    </div>
                                );
                            })}
                        </div>
                    )}
                    <div className="flex flex-col justify-center items-center text-center">
                        <div className="flex my-5 gap-4">
                            {/* Log Out */}
                            <button className="custom-button-1" onClick={logOut}>Log Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
