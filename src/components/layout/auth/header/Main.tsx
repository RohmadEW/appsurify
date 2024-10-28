import { BsChatDots } from "react-icons/bs";
import { PiSignIn } from "react-icons/pi";
import { useLogout } from "../../../../hooks/useLogout";
import { useAppSelector } from "../../../../hooks/useStore";

export default function HeaderMain() {
  const { user } = useAppSelector((state) => state.auth);
  const { mutate: logout, isPending: logingOut } = useLogout();

  const handleLogout = () => {
    logout({});
  };

  return (
    <div className="w-full h-[58px] flex items-center justify-end gap-3 px-[24px]">
      <button className="btn btn-sm btn-primary btn-outline font-normal px-8 mr-8">
        <BsChatDots className="w-[15px] h-[15px]" />
        Provide Feedback
      </button>
      <div className="text-base text-[#393939]">
        {user?.first_name} {user?.last_name} ({user?.email})
      </div>
      <img
        src={user?.avatar_url}
        alt="avatar"
        className="w-[32px] h-[32px] rounded-full"
      />
      <button
        className="btn btn-sm btn-primary btn-ghost"
        onClick={handleLogout}
      >
        {logingOut ? (
          <div className="loading loading-spinner"></div>
        ) : (
          <PiSignIn className="w-[20px] h-[20px]" />
        )}
      </button>
    </div>
  );
}
