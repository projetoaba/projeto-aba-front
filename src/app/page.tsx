import {LandingHeader, LandingFeatures} from "@/components/home/landing";
import UnloggedNavigationMenu from "@/components/shared/navbar/unlogged";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <UnloggedNavigationMenu />
      <div className="flex min-h-screen flex-col items-center justify-between">
      <LandingHeader/>
      <LandingFeatures/>
      </div>      
    </main>
  );
}
