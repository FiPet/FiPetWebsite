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
            {/* MOBILE: 2‑column grid, all 7 cards */}
            <div className="grid grid-cols-2 sm:hidden gap-x-12 gap-y-6">
              {teamHeads.map((head, i) =>
                i === teamHeads.length - 1 ? (
                  <div key={i} className="col-span-2 flex justify-center">
                    <div style={{ maxWidth: "calc((100% - 3rem)/2)" }}>
                      <TeamHeadCard {...head} />
                    </div>
                  </div>
                ) : (
                  <div key={i}>
                    <TeamHeadCard {...head} />
                  </div>
                )
              )}
            </div>

            {/* DESKTOP TOP ROW: 4 cards */}
            <div className="hidden sm:grid grid-cols-8 gap-x-12 gap-y-6">
              {/* --- TOP ROW --- */}
              {/* Each card spans 2 of the 8 columns */}
              <div className="col-span-2">
                {" "}
                <TeamHeadCard {...teamHeads[0]} />{" "}
              </div>
              <div className="col-span-2">
                {" "}
                <TeamHeadCard {...teamHeads[1]} />{" "}
              </div>
              <div className="col-span-2">
                {" "}
                <TeamHeadCard {...teamHeads[2]} />{" "}
              </div>
              <div className="col-span-2">
                {" "}
                <TeamHeadCard {...teamHeads[3]} />{" "}
              </div>

              {/* --- BOTTOM ROW --- */}
              {/* We use col-start-2 to create a manual offset, centering the 3 cards */}
              <div className="col-start-2 col-span-2">
                {" "}
                <TeamHeadCard {...teamHeads[4]} />{" "}
              </div>
              <div className="col-span-2">
                {" "}
                <TeamHeadCard {...teamHeads[5]} />{" "}
              </div>
              <div className="col-span-2">
                {" "}
                <TeamHeadCard {...teamHeads[6]} />{" "}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          {teams.map((team) => (
            <TeamMembersPanel
              key={team.teamName}
              image={team.image}
              teamName={team.teamName}
              teamMembers={team.teamMembers}
            />
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
