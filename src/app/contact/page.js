"use client";
import { useState } from "react";

export default function Contact() {
    const [contactData, setContactData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    const handleContact = async (e) => {
        e.preventDefault();
        console.log(contactData);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contactData),
            });

            const data = await response.json();
            alert(data.message);
        }
        catch (err) {
            console.log(err);
        };

        // Do it this way if you want to clear the input field after submission
        // But for that you need to add value={contact.email} in the every input tag
        setContactData({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
        });
    };

    return (
        <div className="flex flex-col items-center bg-black text-yellow">
            <h1>CONTACT US</h1>
            <div>
                <div className="container text-white">
                    <div className="mx-auto py-10">
                        <form>
                            <div className="mb-3">
                                <div className="flex">
                                    <div className="flex flex-col mr-5">
                                        <label>First name</label>
                                        <input
                                            placeholder="First name"
                                            type="text"
                                            required
                                            onChange={(e) => {
                                                setContactData({ ...contactData, firstName: e.target.value });
                                            }}
                                            value={contactData.firstName}
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label>Last name</label>
                                        <input
                                            placeholder="Last name"
                                            type="text"
                                            required
                                            onChange={(e) => {
                                                setContactData({ ...contactData, lastName: e.target.value });
                                            }}
                                            value={contactData.lastName}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mb-3 flex flex-col">
                                <label>Email address</label>
                                <input
                                    placeholder="Enter your email"
                                    type="email"
                                    required
                                    onChange={(e) => {
                                        setContactData({ ...contactData, email: e.target.value });
                                    }}
                                    value={contactData.email}
                                />
                                <div className="text-white text-xs">
                                    We will never share your email with anyone else.
                                </div>
                            </div>
                            <div className="mb-3 flex flex-col">
                                <label className="flex flex-col">Drop your feedback/query</label>
                                <textarea
                                    placeholder="Enter your message "
                                    rows="3"
                                    required
                                    onChange={(e) => {
                                        setContactData({ ...contactData, message: e.target.value });
                                    }}
                                    value={contactData.message}
                                ></textarea>
                            </div>
                            <button type="submit" className="bg-yellow hover:bg-black text-black hover:text-white border-2 border-yellow w-32 h-10 rounded-lg"
                                onClick={handleContact}>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};