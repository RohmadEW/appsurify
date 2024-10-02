import ContentElement from "./Element";

export default function ContentMain() {
  return (
    <div className="p-[24px] flex gap-[20px]">
      <div className="w-[352px] h-[calc(100vh-58px-24px-24px)] overflow-y-auto">
        <ContentElement />
      </div>
    </div>
  );
}
