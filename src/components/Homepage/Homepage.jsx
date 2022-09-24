import illustration from "../../assets/illustration.svg";
import NuKenzie from "../../assets/NuKenzie.svg";
import "./Homepage.css";

export const Homepage = ({setShowHomepage}) => {

    const changePage = () => {
        setShowHomepage(false)
    };

  return (
    <main className="Homepage-header">
      <section className="Homepage-section">
        <img className="Homepage-logo" src={NuKenzie} alt="logo" />
        <h1>Centralize o controle das suas finanças</h1>
        <p>de forma rápida e segura</p>
        <button className="Homepage-button" onClick={() => changePage()}>
          Iniciar
        </button>
      </section>

      <aside className="Homepage-aside">
        <img className="Homepage-illustration" src={illustration} alt="" />
      </aside>
    </main>
  );
};
