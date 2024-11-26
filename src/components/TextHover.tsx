import React, { useState } from 'react';

type TextHoverProps = {
  index: number;
  text: string;
};

const TextHover = ({ index, text }: TextHoverProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="text-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        key={index}
        className="flex justify-center items-center mx-auto w-[75%] text-sm"
      >
        <span
          className="text-2xl"
          style={{
            color: isHovered ? 'red' : 'black',
            fontSize: isHovered ? '20px' : '16px',
            transition: 'color 0.2s ease, font-size 0.2s ease',
          }}
        >
          {index + 1}.&nbsp;&nbsp;
        </span>
        <span
          style={{
            color: isHovered ? 'red' : 'black',
            fontSize: isHovered ? '20px' : '16px',
            transition: 'color 0.2s ease, font-size 0.2s ease',
          }}
        >
          {text}
        </span>
      </div>
    </div>
  );
};

export default TextHover;
