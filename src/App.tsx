import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/system/toaster";

export const Application = () => {
  return (
    <>
      {/* Toaster Component will be used to display the notifications, documentation https://ui.shadcn.com/docs/components/toast */}
      <Toaster />
      {/* Header, Navigation, Footer like Global Components that will be used in all pages can be put here, and Outlet will be used to render the children components based on the route and the router definition provided in the main.tsx file*/}
      <Outlet />
    </>
  );
};
