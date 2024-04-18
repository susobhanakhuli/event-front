import Image from "next/image";
import HeroImage from "../images/hero.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faInstagram,
    faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export default function HeroSection() {
    return (
        <div className="flex bg-black px-10">
            <div className="w-[60vw] text-white mt-[25vh]">
                <div>
                    <h1>
                        Welcome to Rizeni <br />
                        <span className="text-yellow">Crafting Unforgettable Moments</span>
                    </h1>
                    <p className="mt-10">
                        Here we specialize in creating bespoke event experiences that exceed your 
                        wildest expectations. With a harmonious blend of creativity and precision, 
                        we are dedicated to transforming your vision into a flawless reality. From 
                        intimate gatherings to grand celebrations, every detail is meticulously curated 
                        to perfection, ensuring an unforgettable experience for you and your guests. 
                        Trust Rizeni to elevate your events to new heights of sophistication and elegance.
                    </p>
                    <div className="flex mt-10 ml-8">
                        <a href="/register">
                            <button className="custom-button-1">
                                REGISTER
                            </button>
                        </a>
                        <a href="/login">
                            <button className="custom-button-2">
                                PARTICIPANT LOGIN
                            </button>
                        </a>
                    </div>
                </div>
                <div className="flex gap-4 align-bottom mt-[6rem]">
                    <a href="https://www.facebook.com/susobhan.akhuli.1/" target="_blank">
                        <div className="flex justify-center items-center rounded-full mb-3">
                            <FontAwesomeIcon
                                icon={faFacebook}
                                className="w-7 h-6 text-yellow hover:text-black hover:bg-yellow rounded-full"
                            />
                        </div>
                    </a>
                    <a href="https://www.instagram.com/susobhanakhuli/" target="_blank">
                        <div className="flex justify-center items-center rounded-full mb-3">
                            <FontAwesomeIcon
                                icon={faInstagram}
                                className="w-7 h-6 text-yellow hover:text-black hover:bg-yellow rounded-full"
                            />
                        </div>
                    </a>
                    <a href="https://twitter.com/SusobhanAkhuli" target="_blank">
                        <div className="flex justify-center items-center rounded-full mb-3">
                            <FontAwesomeIcon
                                icon={faTwitter}
                                className="w-7 h-6 text-yellow hover:text-black hover:bg-yellow rounded-full"
                            />
                        </div>
                    </a>
                </div>
            </div>
            <Image
                src={HeroImage}
                alt="Hero Image"
                width={500}
                height={500}
                priority={true}
                className="backimage h-[42rem] w-[60vw] shadow-inner"
            />
        </div>
    );
}
