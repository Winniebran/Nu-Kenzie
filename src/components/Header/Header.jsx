import NuKenzie from "../../assets/NuKenzie2.svg";
import "./Header.css";

export const Header = ({ setShowHomepage }) => {
  const changePage = () => {
    setShowHomepage(true);
  };

  return (
    <header className="Header">
      <div className="Header-block">
        <img className="Header-img" src={NuKenzie} alt="logo" />
        <button className="Header-button" onClick={() => changePage()}>
          Início
        </button>
      </div>
    </header>
  );
};
