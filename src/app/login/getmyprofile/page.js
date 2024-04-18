"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function GetMyProfile() {
  const [userData, setUserData] = useState(null);
  const [show, setShow] = useState(false);

  // const getSavedToke = () => {
  //   const token = localStorage.getItem("accesstoken");
  //   console.log(token);
  // };

  const logOut = async () => {
    try {
      const token = localStorage.getItem("accesstoken");
      localStorage.removeItem("accesstoken");
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/logout`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      alert(data.message);
      navigate("/login");
    }
    catch (err) {
      console.log(err);
    }
  };

  const getUserData = () => {
    setShow(!show);
    const token = localStorage.getItem("accesstoken");
    fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/getmyprofile`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserData(data.user);
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
          {/* Get My Profile API */}

          <h1 className="text-yellow">Get Your Profile</h1>
          {/* <button onClick={getSavedToke}>Saved Token Details</button> */}

          {/* Get My Profile */}
          <button className="custom-button-2 my-5" onClick={getUserData}>{show ? "Hide Profile Details" : "Show Profile Details"}</button>
          {userData && show && (
            <div className="flex flex-col justify-center items-center text-center">
              <h2>User Data</h2>
              <Image
                src={userData.profilePic}
                alt="Profile Image"
                className="profilePic"
                width={200}
                height={200}
              >
              </Image>
              <p>Name: {userData.name}</p>
              <p>Email: {userData.email}</p>
              <p>Gender: {userData.gender}</p>
              <p>Age: {userData.age}</p>
              <p>Height (in cm): {userData.height}</p>
              <p>Weight (in KG): {userData.weight}</p>
              <p>Branch: {userData.branch}</p>
              <div className="flex my-5 gap-4">
                {/* Upload Profile Pic */}
                <button className="custom-button-1 w-[11rem]" onClick={() => navigate("/login/uploadprofilepic")}>
                  Upload Profile Pic
                </button>

                {/* Log Out */}
                <button className="custom-button-1" onClick={logOut}>Log Out</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
