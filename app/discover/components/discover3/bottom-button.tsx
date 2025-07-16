"use client";

type Discover3BottomButtonProps = {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Discover3BottomButton({ text, onClick }: Discover3BottomButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        mx-auto flex justify-center items-center
        py-2 px-12 rounded-full font-bold
        bg-gradient-to-b from-[#FBA94C] via-[#F98513] to-[#F97D14]
        overflow-hidden cursor-pointer
      `}
      style={{
        boxShadow: `
          0 0 0 3px rgba(255,255,255,0.35),
          0 6px 40px 6px #fbb957 inset, 
          0 1.5px 36px 0px #0008 inset
        `,
      }}
    >
      {text}
    </button>
  );
}
