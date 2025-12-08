import AppHeader from "@/components/AppHeader";
import AppSidebar from "@/components/Sidebar";
import { Outlet, useLoaderData, useRevalidator } from "react-router";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { resetMail } from "@/services/mail";

export default function Layout() {
  const data = useLoaderData();
  const revalidator = useRevalidator();

  function handleResetMail() {
    revalidator.revalidate();
    resetMail();
    toast.success("Mail reset!");
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <Toaster />
      <AppSidebar />
      <div className="flex flex-1 flex-col h-full">
        <AppHeader resetMail={handleResetMail} mail={data.mail} />
        <main className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
