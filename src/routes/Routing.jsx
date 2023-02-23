import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddBadgeHome from "../containers/admin-dashboard/add-badge-home-page/AddBadgeHome";
import AllBadges from "../containers/admin-dashboard/all-created-badges/AllBadges";
import AdminDashboardHome from "../containers/admin-dashboard/home/Home";
import Login from "../containers/admin-dashboard/login/Login";
import MyBadge from "../containers/admin-dashboard/myBadge/MyBadge";
import TemplateImages from "../containers/admin-dashboard/template-images/TemplateImages";
import GetStarted from "../containers/get-started/GetStarted";
import Home from "../containers/Home/Home";
import MyNFT from "../containers/my-nft/MyNFT";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/mint-nft" element={<GetStarted />} />
        <Route exact path="/my-nft" element={<MyNFT />} />
        <Route exact path="/admin-dashboard" element={<AdminDashboardHome />} />
        <Route exact path="/add-badge" element={<AddBadgeHome />} />
        <Route exact path="/all-badges" element={<AllBadges />} />
        <Route exact path="/images" element={<TemplateImages />} />
        <Route exact path="/signin" element={<Login />} />
      </Routes>
    </Router>
  );
};
export default AppRoutes;
