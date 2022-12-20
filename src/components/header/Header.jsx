import Logo from "../../assets/images/LogoSVG.svg";
import "./header.scss";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const twitterId = localStorage.getItem("twitterId");

  const handleClickLogout = () => {
    localStorage.removeItem("twitterId");
    navigate("/mint-nft");
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar d-flex justify-content-around align-items-center">
          <a className="navbar-brand" href="/">
            <img src={Logo} alt="revise" className="logo" />
          </a>
          {twitterId === null ? (
            <p className="BuiltWithRevise">#BuiltWithRevise</p>
          ) : (
            <p
              id="logout"
              className={twitterId === null ? "hide" : "show"}
              onClick={handleClickLogout}
            >
              Logout
            </p>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
