"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AlterEvent() {
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

    // Whenever the page loades functions inside useEffect
    // will be executed automatically
    useEffect(() => {
        getEventList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const DeleteEvent = async (id) => {
        try {
            const token = localStorage.getItem("aToken");
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/admin/deleteevent/${id}`, {
                method: "DELETE",
                headers: {
                    "content-type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = await response.json();
            // console.log('Event deleted successfully');
            alert(data.message);

            // Here we use getEventList function so that
            // when we delete a todo and deletion is completed
            // then using the below function page refreshes
            // and we get updated todo list
            // means we don't need to refresh it manually
            getEventList();
        } catch (error) {
            console.log(error);
        }
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
                    {/* Get My Profile API */}

                    <h1 className="text-yellow">Get Event List</h1>
                    {/* <button onClick={getSavedToke}>Saved Token Details</button> */}

                    {/* Get Evets List */}
                    <div className="h-[20rem] w-[30rem] flex flex-col justify-center items-center text-center">
                        {eves.map((tod) => {
                            return (
                                <div key={tod._id}>
                                    <h3>Event Name: {tod.event_name}</h3>
                                    <p>Venue: {tod.venue}</p>
                                    <p>Date: {tod.date}</p>
                                    <p>Total Seats: {tod.total_seats}</p>
                                    <button onClick={() => DeleteEvent(tod._id)}>Delete Event</button>
                                    <br />
                                </div>
                            );
                        })}
                    </div>
                    <div className="flex flex-col justify-center items-center text-center">
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
