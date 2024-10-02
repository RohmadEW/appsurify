import { BsChatDots } from "react-icons/bs";
import { PiSignIn } from "react-icons/pi";
import avatar from "../../../assets/avatar.png";

export default function HeaderMain() {
  return (
    <div className="w-full h-[58px] flex items-center justify-end gap-3 px-[24px]">
      <button className="btn btn-sm btn-primary btn-outline font-normal px-8 mr-8">
        <BsChatDots className="w-[15px] h-[15px]" />
        Provide Feedback
      </button>
      <div className="text-base text-[#393939]">Brooklyn Simmons</div>
      <img
        src={avatar}
        alt="avatar"
        className="w-[32px] h-[32px] rounded-full"
      />
      <button className="btn btn-sm btn-primary btn-ghost">
        <PiSignIn className="w-[20px] h-[20px]" />
      </button>
    </div>
  );
}
