import DashboardNavbar from "../components/dashboard-navbar";
import Chat from "../components/chat";

const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen text-white">
      <div className=" top-0 left-0 w-full z-10">
        <DashboardNavbar />
      </div>
      <div className="flex-1 items-end justify-end">
        <Chat />
      </div>
    </div>
  );
};

export default Dashboard;
