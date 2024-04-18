import Image from "next/image";
import "./about.css"
import Article1 from "../images/5.png";
import mem1 from "../images/m1.jpg";
import mem2 from "../images/m2.jpg";
import mem3 from "../images/m3.jpg";
import mem4 from "../images/m4.jpg";
import mem5 from "../images/m5.jpg";
import mem6 from "../images/m6.jpg";
import mem7 from "../images/m7.jpg";
import mem8 from "../images/m8.jpg";

export default function About() {
  return (
    <div className=" text-white">
      <div className="flex flex-col justify-center items-center">

        {/* Abous US part starts*/}
        <div className="flex flex-col bg-black justify-center items-center pt-10">
          <h5>
            About Us
          </h5>
          <h3 className="mt-8">
            Rizeni Event Manager
          </h3>
          <p className="w-2/3 m-5 text-base md:text-lg">
            Welcome to Rizeni Event Manager, where we blend creativity with precision to craft extraordinary events tailored to your every need. 
            Established in 2010 by a team of seasoned professionals, Rizeni was born from a shared passion for redefining event experiences. 
            With a commitment to innovation and personalized service, we've spent over a decade orchestrating unforgettable moments that leave a lasting impression.
          </p>
        </div>
        {/* About Us part ends */}

        {/* Faculty list part starts */}
        <div className="w-[100vw] bg-slate-200">
          <div className="flex flex-col flex-wrap my-6 justify-center items-center text-black">
            <h1>Our Team</h1>
            <div className="row-faculty-details">
              <div className="faculty-details">
                <Image className="faculty-image"
                  src={mem1}
                  alt="HOD Image"
                  width={500}
                  height={500}>
                </Image>
                <p className="faculty-name">Shraddha Gadit</p>
                <p className="faculty-role">Founder & CEO</p>
              </div>
              <div className="faculty-details">
                <Image className="faculty-image"
                  src={mem2}
                  alt="Article Image"
                  width={500}
                  height={500}>
                </Image>
                <p className="faculty-name">Vishal Pevekar</p>
                <p className="faculty-role">Creative Director</p>
              </div>
              <div className="faculty-details">
                <Image className="faculty-image"
                  src={mem3}
                  alt="Article Image"
                  width={500}
                  height={500}>
                </Image>
                <p className="faculty-name">Ayaan Soni</p>
                <p className="faculty-role">Head of Operations</p>
              </div>
            </div>
            <div className="row-faculty-details">
              <div className="faculty-details">
                <Image className="faculty-image"
                  src={mem4}
                  alt="Article Image"
                  width={500}
                  height={500}>
                </Image>
                <p className="faculty-name">Akhil Kumar</p>
                <p className="faculty-role">Technical Director</p>
              </div>
              <div className="faculty-details">
                <Image className="faculty-image"
                  src={mem5}
                  alt="Article Image"
                  width={500}
                  height={500}>
                </Image>
                <p className="faculty-name">Shreyash Gujarati</p>
                <p className="faculty-role">Finance Manager</p>
              </div>
              <div className="faculty-details">
                <Image className="faculty-image"
                  src={mem6}
                  alt="Article Image"
                  width={500}
                  height={500}>
                </Image>
                <p className="faculty-name">Karan Sonic</p>
                <p className="faculty-role">Event Coordinator</p>
              </div>
            </div>
            <div className="row-faculty-details">
              <div className="faculty-details">
                <Image className="faculty-image"
                  src={mem7}
                  alt="Article Image"
                  width={500}
                  height={500}>
                </Image>
                <p className="faculty-name">Nikhil Desale</p>
                <p className="faculty-role">Marketing Manager</p>
              </div>
              <div className="faculty-details">
                <Image className="faculty-image"
                  src={mem8}
                  alt="Article Image"
                  width={500}
                  height={500}>
                </Image>
                <p className="faculty-name">Nikita Nadkarni</p>
                <p className="faculty-role">Client Relations Manager</p>
              </div>
            </div>
          </div>
        </div>
        {/* Faculty list part ends */}
      </div>

    </div>
  );
}
