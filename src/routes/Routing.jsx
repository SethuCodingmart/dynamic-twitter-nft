import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
      </Routes>
    </Router>
  );
};
export default AppRoutes;
