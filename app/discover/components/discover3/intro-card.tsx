import { ReactNode } from "react";

export default function IntroCard({ children }: { children: ReactNode }) {
  return (
    <div className="h-full p-16 text-white bg-gradient-to-r from-[#904AFD] to-[#8FA4FD] rounded-3xl shadow-md">{children}</div>
  );
}
