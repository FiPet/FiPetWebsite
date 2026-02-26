import TeamHeadCard from "@/components/team/team-head-card";
import TeamMembersPanel from "@/components/team/team-members-panel";
import { teamHeads, teams } from "@/components/team/config/constants";
import styles from "./page.module.css";
import "../globals.css";
import CorpSocialLinks from "../../src/components/team/corp-social-links";

export default function TeamPage() {
  return (
    <div className={`${styles.customBg} ${styles.grayText} py-8 pt-20`}>
      <div className="w-full max-w-6xl mx-auto px-4">
        <h1 className="text-6xl font-bold py-4">
          We&apos;re shaping the way teens learn finance.
        </h1>
        <h6 className="text-3xl font-bold text-gradient-orange py-4">
          And we have fun doing it ;)
        </h6>

        <div
          className={`w-screen ml-[calc(50%-50vw)] my-12 py-12 ${styles.gradientContainer}`}
        >
          <div className="mx-auto max-w-6xl px-8 py-6">
            {/* MOBILE: 2‑column grid, all 6 cards */}
            <div className="grid grid-cols-2 sm:hidden gap-x-6 gap-y-6">
              {teamHeads.map((head, i) => (
                <div key={i} className="max-w-[180px] mx-auto">
                  <TeamHeadCard {...head} />
                </div>
              ))}
            </div>

            {/* DESKTOP: 2 rows of 3 cards */}
            <div className="hidden sm:grid grid-cols-12 gap-x-6 gap-y-8 justify-items-center">
              {/* --- TOP ROW (3 cards) --- */}
              {/* Each card spans 4 of the 12 columns */}
              {teamHeads.slice(0, 3).map((head, index) => (
                <div className="col-span-4 max-w-[240px]" key={index}>
                  <TeamHeadCard {...head} />
                </div>
              ))}

              {/* --- BOTTOM ROW (3 cards) --- */}
              {teamHeads.slice(3, 6).map((head, index) => (
                <div className="col-span-4 max-w-[240px]" key={index}>
                  <TeamHeadCard {...head} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 px-4">
          {teams.map((team, idx) => (
            <div
              key={team.teamName}
              className={
                idx === 4 ? "col-span-2 flex justify-center sm:col-span-1" : ""
              }
            >
              <TeamMembersPanel
                image={team.image}
                teamName={team.teamName}
                teamMembers={team.teamMembers}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center my-6 mt-16 sm:hidden"></div>

        <div className="block">
          <CorpSocialLinks />
        </div>
      </div>
    </div>
  );
}
