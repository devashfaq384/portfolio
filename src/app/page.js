import AboutVariant2 from "@/components/About";
import ContactVariant2 from "@/components/Contact";
import ApproachVariant1 from "@/components/Do";
import HeroVariantC from "@/components/Hero";
import ProcessVariant2 from "@/components/HowWork";
import ProjectsVariant1 from "@/components/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroVariantC />
      <ApproachVariant1 />
      <ProcessVariant2 />
      <AboutVariant2 />
      <ProjectsVariant1 />
      <ContactVariant2 />
    </>
  );
}
