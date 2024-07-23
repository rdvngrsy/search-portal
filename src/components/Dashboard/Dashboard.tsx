import { Route, Routes } from "react-router-dom";
import Homepage from "../../pages/Homepage/Homepage";
import Result from "../../pages/Results/Result";
import AddLinkPage from "../../pages/AddLinkPage/AddLinkPage";

const Dashboard = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/result" element={<Result />} />
        <Route path="/add-link-page" element={<AddLinkPage />} />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </>
  );
};

export default Dashboard;
