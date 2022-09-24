import { Card } from "../Card/Card";
import NoCard from "../../assets/NoCard.svg";
import "./List.css";

export const List = ({ filterTransactions, setFilter, setListTransactions, filter }) => {

  const removeTransaction = (remove) => {
    const filtering = filterTransactions.filter(
      transaction => transaction !== remove
    );
    setListTransactions(filtering);
  };

  return (
    <section className="List-section">
      <div className="sumary-block">
        <p className="financial-sumary">Resumo financeiro</p>
        <div className="button-sumary">
          <button className={`button-default ${filter === "" ? "ativo" : ""}`} onClick={() => setFilter("")}>
            Todos
          </button>
          <button
            className={`button-default ${filter === "Entrada" ? "ativo" : ""}`}
            onClick={() => setFilter("Entrada")}
          >
            Entradas
          </button>
          <button className={`button-default ${filter === "Saída" ? "ativo" : ""}`} onClick={() => setFilter("Saída")}>
            Despesas
          </button>
        </div>
      </div>
      {filterTransactions.length === 0 ? (
        <>
          <p className="transactions-blank">
            {" "}
            Você ainda não possui nenhum lançamento{" "}
          </p>
          <img className="transactions-blank-img" src={NoCard} alt="" />
        </>
      ) : (
        <>
          <ul className="List-transactions">
            {filterTransactions.map((transaction, index) => (
              <li className="item-transactions" key={index}>
                {transaction.type === "Entrada" ? (
                  <div className="deposit"></div>
                ) : (
                  <div className="out"></div>
                )}
                <Card
                  transaction={transaction}
                  removeTransaction={removeTransaction}
                  key={index}
                />
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
};
