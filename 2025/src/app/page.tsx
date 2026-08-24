import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Objectives from "@/components/Objectives";
import CallForPapersAndTimeline from "@/components/CallForPapersAndTimeline";
import WorkshopSchedule from "@/components/WorkshopSchedule";
import SharedTask from "@/components/SharedTask";
import InvitedSpeakers from "@/components/InvitedSpeakers";
import ProgramCommittee from "@/components/ProgramCommittee";
import Organizers from "@/components/Organizers";
import ExpectedOutcomes from "@/components/ExpectedOutCome";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-(family-name:--font-roboto)">
    <Navbar/>
    <Hero/>
    <About/>
    <Objectives/>
    <CallForPapersAndTimeline/>
    <SharedTask/>
    <InvitedSpeakers/>
    <WorkshopSchedule/>
    <ExpectedOutcomes/>
    <ProgramCommittee/>
    <Organizers/>
    <Footer/>
    </div>
  );
}