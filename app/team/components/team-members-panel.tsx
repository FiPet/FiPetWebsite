import { TeamMember } from "../config/interfaces";

export default function TeamMembersPanel({ teamName, teamMembers }: TeamMember) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-32 h-32 rounded-full bg-[#D9D9D9] flex items-center justify-center my-4 hidden sm:block"></div>
      <h6 className="text-lg font-semibold">{teamName}</h6>
      {teamMembers.map((member, idx) => {
        return <p key={idx}>{member}</p>;
      })}
    </div>
  );
}
