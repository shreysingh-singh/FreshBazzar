import { MoveRight } from "lucide-react";

function MoveRightComponent({ text }) {
  return (
    <div className="flex items-center gap-2 text-xs text-green-700 tracking-wider cursor-pointer">
      <p className="text-sm ">{text}</p>
      <MoveRight size={"20"} />
    </div>
  );
}

export default MoveRightComponent;
