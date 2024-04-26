import Image from "next/image";
import React from "react";
import profileImg from "/public/profile.png";
import { Facebook, Linkedin, Lock, Twitter } from "lucide-react";
import Button from "./Button";

const data = [
  {
    id: 1,
    label: "Followers",
    value: "2423",
    hasBorderRight: true,
  },
  {
    id: 2,
    label: "Following",
    value: "324",
    hasBorderRight: true,
  },
  {
    id: 3,
    label: "Projects",
    value: "12",
    hasBorderRight: false,
  },
];

const Card = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-y-0 p-4 rounded-3xl shadow-md border-8 border-white w-[90%] md:w-[40%]">
      {/** first column */}
      <div className="flex flex-col items-center md:col-span-1 gap-y-6">
        <Image
          src={profileImg}
          height={150}
          width={150}
          alt="profile_image"
          className="border-8 border-[#E4DAE5] rounded-full"
        />
        <div className="flex items-center gap-x-4">
          <Facebook size={20} />
          <Linkedin size={20} />
          <Twitter size={20} />
        </div>
      </div>
      {/** second column */}
      <div className="md:col-span-2 space-y-2 text-center md:text-left px-3">
        <div className="px-3">
          <h1 className="text-2xl font-bold">Ashok Kumar</h1>
          <p className="text-slate-600">Frontend Developer</p>
        </div>
        <p>
          Passionate frontend developer with expertise in HTML, CSS,JavaScript,
          and React.
        </p>
        <div className="flex items-center justify-center md:justify-start">
          {data.map((item) => (
            <div
              className={`${item.hasBorderRight && "border-r border-black"}`}
              key={item.id}
            >
              <h2 className="text-slate-600">{item.value}</h2>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center md:justify-start gap-x-2">
          <Button className="bg-[#BC43B1] text-white hover:text-black">
            Follow
          </Button>
          <Button className="bg-[#FFBD95]" icon={Lock}>
            Message
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
