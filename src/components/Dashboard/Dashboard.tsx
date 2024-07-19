import { Route, Routes } from "react-router-dom";
import Homepage from "../../pages/Homepage/Homepage";
import Result from "../../pages/Results/Result";

const Dashboard = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/result" element={<Result />} />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </>
  );
};

export default Dashboard;
