import Image from "next/image";
import { TeamMember } from "../config/interfaces";

export default function TeamMembersPanel({
  image,
  teamName,
  teamMembers,
}: TeamMember) {
  return (
    <div className="flex flex-col items-start sm:items-center">
      <div className="w-32 h-32 rounded-full bg-gradient-to-r from-[#8F48FD] to-[#8FA9FD] flex items-center justify-center my-4 aspect-square">
        <Image
          src={image}
          alt={teamName}
          width={64}
          height={64}
          className="w-16 h-16"
          priority
        />
      </div>
      <h6 className="text-lg font-semibold text-[#F97216] my-2">{teamName}</h6>
      {teamMembers.map((member, idx) => {
        return <p key={idx} className="font-normal">{member}</p>;
      })}
    </div>
  );
}
