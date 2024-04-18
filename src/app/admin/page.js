"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Admin() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // Create Hook router to use in button
  const router = useRouter();

  // Create function to Hook router using button
  const navigate = (page_link) => {
    router.push(page_link);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(loginData);
    fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/admin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        // console.log(data);
        console.log(data.aToken);
        localStorage.setItem("aToken", data.aToken);
        if (data.aToken)
          navigate("/admin/manage");
      })
      .catch((err) => console.log(err));
    
    setLoginData({
      email: "",
      password: "",
    });
  };

  const getSavedToke = () => {
    const token = localStorage.getItem('aToken');
    console.log(token);
  };

  return (
    <main className="bg-slate-300">
      <div className="flex flex-col text-center items-center justify-center py-20">
        <div className="p-8 border-4 border-yellow bg-black shadow-2xl rounded-3xl">
          {/* Login API */}

          <h1 className="text-yellow">Admin Login</h1>
          <form /*action = "/send-data-here"*/ method="post" className="flex flex-col mt-8 text-center items-center justify-center gap-6">
            <input
              type="text"
              placeholder="Email"
              required
              onChange={(e) => {
                setLoginData({ ...loginData, email: e.target.value });
              }}
              value={loginData.email}
            />
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => {
                setLoginData({ ...loginData, password: e.target.value });
              }}
              value={loginData.password}
            />
            <button type="submit" className="custom-button-1" onClick={handleLogin}>
              Login
            </button>
          </form>

          <a className="text-yellow float-right mb-10 mt-3 text-xs" href="/">
            <p>Not Admin? Go Back..</p>
          </a>

          {/* <button onClick={getSavedToke}>
          Get My Profile
          </button> */}
        </div>

      </div>
    </main>
  );
}
