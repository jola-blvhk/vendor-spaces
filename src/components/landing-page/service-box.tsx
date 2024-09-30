import Image from "next/image";
import React from "react";

interface ServiceBoxProps {
  image: any;
  title: string;
}
const ServiceBox: React.FC<ServiceBoxProps> = ({ image, title }) => {
  return (
    <div className="  rounded-2xl h-[250px] border border-secondary-green-100/40 flex flex-col items-center text-center relative z-10">
      <Image
        src={image}
        alt={title}
        className=" rounded-2xl w-full h-[60%] object-cover"
        width={300}
        height={200}
        objectFit="cover"
      />
      <p className="text-center my-auto font-medium text-secondary-green-100 px-6">
        {title}
      </p>
    </div>
  );
};

export default ServiceBox;
