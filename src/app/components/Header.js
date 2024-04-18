const links = ["Home", "Articles", "Services", "About", "Contact Us"];
import Image from "next/image";
import mygym from "../images/event_logo.png";
import './navstyle.css';

export default function Side() {
  return (
    <nav className="bg-black flex justify-between items-center h-20 p-4 sticky top-0">
      <a href="/" className="flex ml-4 md:ml-8">
        <Image
          src={mygym}
          width={400}
          height={400}
          alt="MY GYM"
          className="w-7 md:w-10 lg:w-12 h-8 md:h-10 lg:h-13 text-white mt-1 invert-[.50]"
        />
        <p className="text-yellow ml-2 font-bold text-xl md:text-2xl lg:text-3xl xl:text-[2rem] font-delicious">
          řízení
        </p>
      </a>
      <div>
        <ul className="flex text-yellow p-2 list-none text-xs md:text-sm lg:text-base xl:text-lg">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/admin">Admin Login</a>
          </li>
          <li>
            <a href="/booking">Ticket Booking</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a id="black-yellow" href="/contact">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
