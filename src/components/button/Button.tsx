import Image from 'next/image';
import React from 'react';


interface ButtonProps {
  icon? : string;
  text: string;
  size?: "sm" ;
  variant: "filled" | "bordered";


}

export const Button = ({icon, text, size, variant} : ButtonProps) => {
  const baseStyle = "flex gap-2 items-center rounded-lg text-sm ";
  const variantSytle =` ${variant === "filled" ? "bg-red-45 text-white" : "bg-black-08 border border-black-15"} `;

  const sizeStyle = `${size === "sm" ? 'py-2 px-2': "py-3 px-8"}`


  return (
    <button className={` ${baseStyle} ${variantSytle} ${sizeStyle}`}>
      {icon && (
        <span>
          <Image src={icon} alt='button_icon' />
        </span>
      )
      }
      <p>
        {text}
      </p>
      
    </button>
  )
}
