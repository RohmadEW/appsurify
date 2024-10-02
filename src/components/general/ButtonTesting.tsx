import React from "react";
import { ButtonType } from "../../types/button";

interface ButtonTestingProps {
  type: ButtonType;
  children: React.ReactNode;
}

export default function ButtonTesting({ type, children }: ButtonTestingProps) {
  switch (type) {
    case ButtonType.TESTED:
      return (
        <button className="btn w-full btn-ghost btn-warning btn-outline border-l-8 border-[#6DFF8D] p-0">
          <div className="w-full px-[24px] py-[12px] text-left font-normal text-[16px] text-[#111111]">
            {children}
          </div>
        </button>
      );

    case ButtonType.UNTESTED:
      return (
        <button className="btn w-full btn-ghost btn-error btn-outline border-l-8 border-[#FF7070] hover:bg-[#FF7070] hover:text-white p-0">
          <div className="w-full px-[24px] py-[12px] text-left font-normal text-[16px] text-[#111111] hover:text-white">
            {children}
          </div>
        </button>
      );

    default:
      return null;
  }
}
