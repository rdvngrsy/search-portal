import { Route, Routes } from "react-router-dom";
import Homepage from "../../pages/Homepage/Homepage";

const Dashboard = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </>
  );
};

export default Dashboard;