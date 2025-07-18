"use client";

type Discover3BottomButtonProps = {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function DiscoverActionButton({
  text,
  onClick,
}: Discover3BottomButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        mx-auto flex justify-center items-center
        py-2 rounded-full w-full
        bg-transparent font-light text-white
        overflow-hidden cursor-pointer
        bg-white/5 border border-white/20 
        backdrop-blur-[7.5px] 
        shadow-[0_0_0_1.5px_rgba(255,255,255,0.3),inset_0_2px_3px_rgba(255,255,255,0.4),inset_0_0_20px_10px_rgba(0,0,0,0.1)]
      `}
    >
      {text}
    </button>
  );
}
