import "./TotalMoney.css";

export const TotalMoney = ({ filterTransactions }) => {
  const totalMoney = filterTransactions.reduce(
    (acc, act) =>
      act.type === "Entrada" ? acc + +act.value : acc - +act.value,
    0
  );

  return (
    <section className="total-money">
      <div className="money-block">
        <p className="total-text">Valor Total:</p>
        <span className="money-span">Valor referente ao saldo</span>
      </div>
      {totalMoney >= 0 ? (
        <span className="total-value-green">
          {totalMoney.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      ) : (
        <span className="total-value-red">
          {totalMoney.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      )}
    </section>
  );
};
