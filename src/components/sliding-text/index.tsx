import React from "react";

interface SlidingTextProps {
  texts: string[];
}

const SlidingText: React.FC<SlidingTextProps> = ({ texts }) => {
  return (
    <div className="relative overflow-hidden ">
      <div className="animate-scroll whitespace-nowrap flex items-center space-x-6">
        {texts.map((text, index) => (
          <React.Fragment key={index}>
            <span className="text-sm md:text-base inline-block">{text}</span>
            {index < texts.length - 1 && (
              <div className="w-[10px] h-[10px] bg-primary-black-90/50 rounded-full flex-shrink-0"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SlidingText;
