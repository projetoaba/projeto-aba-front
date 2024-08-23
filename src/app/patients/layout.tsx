import {
  LoggedNavbar,
  LoggedNavigationMenu,
} from "@/components/shared/navbar/logged";

export default function PatientsLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <LoggedNavigationMenu />
      <div className="flex flex-col">
        <LoggedNavbar />
        {children}
      </div>
    </div>
  );
}
