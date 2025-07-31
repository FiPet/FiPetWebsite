import Image from "next/image";
import { TeamMember } from "./config/interfaces";

export default function TeamMembersPanel({
  image,
  teamName,
  teamMembers,
}: TeamMember) {
  return (
    <div className="flex flex-col items-center p-4 rounded-lg w-full sm:w-64">
      <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#8F48FD] to-[#8FA9FD] flex items-center justify-center mb-3">
        <Image
          src={image}
          alt={teamName}
          width={64}
          height={64}
          className="w-16 h-16"
          priority
        />
      </div>
      <h6 className="text-lg font-semibold text-[#F97216] mb-2 text-center">
        {teamName}
      </h6>
      <div className="text-center space-y-1">
        {teamMembers.map((member, idx) => (
          <p key={idx} className="font-normal text-sm sm:text-base">
            {member}
          </p>
        ))}
      </div>
    </div>
  );
}
