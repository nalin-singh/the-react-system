import { Outlet } from "react-router-dom";

export const Application = () => {
  return (
    <>
      {/* Header, Navigation, Footer like Global Components that will be used in all pages can be put here, and Outlet will be used to render the children components based on the route and the router definition provided in the main.tsx file*/}
      <Outlet />
    </>
  );
};
