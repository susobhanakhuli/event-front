import Image from "next/image";
import Article1 from "../images/5.png"
import Article2 from "../images/6.jpg"
import Article3 from "../images/7.png"
import Article4 from "../images/8.jpg"

export default function Crousal() {
    return (
        <div className="flex gap-[2vh] flex-wrap justify-evenly py-10 bg-gray-200">
            <div className="w-[45vh] h-[25rem]">
                <a href="/articles">
                    <Image className="crousalimage"
                        src={Article1}
                        alt="Article Image"
                        width={500}
                        height={500}>
                    </Image>
                </a>
            </div>
            <div className="w-[45vh] h-[25rem]">
                <a href="/articles">
                    <Image className="crousalimage"
                        src={Article2}
                        alt="Article Image"
                        width={500}
                        height={500}>
                    </Image>
                </a>
            </div>
            <div className="w-[45vh] h-[25rem]">
                <a href="/articles">
                    <Image className="crousalimage"
                        src={Article3}
                        alt="Article Image"
                        width={500}
                        height={500}>
                    </Image>
                </a>
            </div>
            <div className="w-[45vh] h-[25rem]">
                <a href="">
                    <Image className="crousalimage"
                        src={Article4}
                        alt="Article Image"
                        width={500}
                        height={500}>
                    </Image>
                </a>
            </div>
        </div>
    );
};