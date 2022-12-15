import { Link } from "react-router-dom";
import Logo from "../../assets/images/LogoSVG.svg";
import "./header.scss";

const Header = () => {
  const twitterId = localStorage.getItem("twitterId");

  const handleClickLogout = () => {
    localStorage.removeItem("twitterId");
    window.location.reload(false);
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar d-flex justify-content-around align-items-center">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="revise" className="logo" />
          </Link>
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
