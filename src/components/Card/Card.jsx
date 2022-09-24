import trash from "../../assets/trash.svg";
import "./Card.css";

export const Card = ({ transaction, index, removeTransaction }) => {

  return (
    <>
      <div className="Card">
        <div className="Card-block-1">
          <h2 className="Card-description">{transaction.description}</h2>
          <span className="Card-type">{transaction.type}</span>
        </div>
        <div className="Card-block-2">
          <span className="Card-value">
            {transaction.type === "Saída"
              ? (transaction.value * -1).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })
              : (transaction.value * 1).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
          </span>
          <img className="Card-trash" onClick={() => removeTransaction(transaction)} src={trash} alt="lixeira" />
        </div>
      </div>
    </>
  );
};
