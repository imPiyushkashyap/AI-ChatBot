import DashboardNavbar from "./dashboard-navbar";

export const description =
  "An application shell with a header and main content area. The header has a navbar, a search input and and a user nav dropdown. The user nav is toggled by a button with an avatar image.";

export const iframeHeight = "825px";

export const containerClassName = "w-full h-full";
const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <DashboardNavbar />
    </div>
  );
};
export default DashboardLayout;
