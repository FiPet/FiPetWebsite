import TeamHeadCard from "./components/team-head-card";
import TeamMembersPanel from "./components/team-members-panel";
import { teamHeads, teams } from "./config/constants";
import styles from "./page.module.css";
import "../globals.css";
import CorpSocialLinks from "./components/corp-social-links";

export default function TeamPage() {
  return (
    <div className={`${styles.customBg} ${styles.grayText} py-8 pt-20`}>
      <div className="w-full max-w-6xl mx-auto px-4">
        <h1 className="text-6xl font-bold py-4">We&apos;re shaping the way teens learn finance.</h1>
        <h6 className="text-3xl font-bold text-gradient-orange py-4">And we have fun doing it ;)</h6>

        <div className={`w-screen ml-[calc(50%-50vw)] my-12 py-12 ${styles.gradientContainer}`}>
          <div className="mx-auto max-w-6xl px-8 py-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-12 gap-y-6">
              {teamHeads.map((teamHead, idx) => (
                <TeamHeadCard key={idx} {...teamHead} />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[8%] mt-6">
          {teams.map((team, idx) => (
            <div key={idx}>
              <TeamMembersPanel {...team} />
            </div>
          ))}
        </div>
        
        <div className="flex justify-center my-6 mt-16 sm:hidden">
          <div className="w-3/4 h-3 bg-[#EDEDED] rounded-full shadow-md "></div>
        </div>
        
        <div className="hidden sm:block">
          <CorpSocialLinks />
        </div>
      </div>
    </div>
  );
}
