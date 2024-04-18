"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Register() {
  const [registerData, setregisterData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    category: "",
    venue: "",
    duration: "",
    date: "",
    costume: "",
    type: "",
  });

  // Create Hook router to use in button or to navigate
  const router = useRouter();

  // Create function to Hook router using button or to navigate automatically
  const navigate = (page_link) => {
    router.push(page_link);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(registerData);
    fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerData),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.message);
        alert(data.message);
        if (data.message === "User registered successfully")
          navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <main className="bg-slate-300 p-4">
      {/* <div className="flex flex-col text-center items-center justify-center py-20"> */}
      <div className="flex flex-wrap items-center place-content-evenly p-6 text-black gap-6">

        {/* {Registration for Participation starts here} */}
        <div className="p-8 border-4 border-yellow bg-black shadow-2xl rounded-3xl">
          {/* Register API */}

          <h1 className="text-yellow">Event Participation</h1>
          <form /*action = "/send-data-here"*/ method="post" className="flex flex-col mt-8 text-center items-center justify-center gap-6">
            <input
              type="text"
              placeholder="Name"
              required
              onChange={(e) => {
                setregisterData({ ...registerData, name: e.target.value });
              }}
            />
            <input
              type="text"
              placeholder="Email"
              required
              onChange={(e) => {
                setregisterData({ ...registerData, email: e.target.value });
              }}
            />
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => {
                setregisterData({ ...registerData, password: e.target.value });
              }}
            />
            <select
              onChange={(e) => {
                setregisterData({ ...registerData, gender: e.target.value });
              }}
            >
              <option value="" disabled selected hidden>
                Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <input
              type="text"
              placeholder="Category"
              onChange={(e) => {
                setregisterData({ ...registerData, category: e.target.value });
              }}
            />
            <select
              required
              onChange={(e) => {
                setregisterData({ ...registerData, venue: e.target.value });
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
              type="text"
              placeholder="Duration (minutes)"
              onChange={(e) => {
                setregisterData({ ...registerData, duration: e.target.value });
              }}
            />
            <input
              type="date"
              required
              onChange={(e) => {
                setregisterData({ ...registerData, date: e.target.value });
              }}
            />

            <select
              onChange={(e) => {
                setregisterData({ ...registerData, costume: e.target.value });
              }}
            >
              <option value="" disabled selected hidden>
                Costume
              </option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
            </select>

            <select
              onChange={(e) => {
                setregisterData({ ...registerData, type: e.target.value });
              }}
            >
              <option value="" disabled selected hidden>
                Type
              </option>
              <option value="Solo">Solo</option>
              <option value="Group">Group</option>
            </select>
            <button type="submit" className="custom-button-1" onClick={handleRegister}>
              Register
            </button>
          </form>
          <a className="text-yellow float-right mb-10 mt-3 text-xs" href="/login">
            <p className="">Already have an account? Sign in..</p>
          </a>
        </div>
        {/* {Registration for Participation ends here} */}


      </div>
    </main>
  );
}
