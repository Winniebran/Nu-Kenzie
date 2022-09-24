import { useState } from "react";
import { TotalMoney } from "../TotalMoney/TotalMoney";
import "./Form.css";

export const Form = ({ listTransactions, setListTransactions, filterTransactions }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("Entrada");

  const submit = (event) => {
    const newTransaction = {
      description: description,
      type: type,
      value: value,
    };
    event.preventDefault();
    setListTransactions([...listTransactions, newTransaction]);
    setDescription("");
    setValue("");
  };

  return (
    <>
      <form onSubmit={submit} className="Form">
        <div className="block-description">
          <label className="label-default">Descrição</label>
          <input
            className="Form-input"
            type="text"
            placeholder="Digite aqui a sua descrição"
            required
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <span className="Form-span">Ex: Compra de roupas</span>
        </div>
        <div className="Form-block">
          <div className="block-value">
            <label className="label-default">Valor</label>
            <input
              className="value-input"
              type="number"
              placeholder="1"
              required
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
          </div>
          <div className="block-type">
            <label className="label-default">Tipo de Valor</label>
            <select
              className="type-select"
              required
              defaultValue={type}
              onChange={(event) => setType(event.target.value)}
            >
              <option>Entrada</option>
              <option>Saída</option>
            </select>
          </div>
        </div>
        <button className="Form-button">Inserir valor</button>
      </form>

      {listTransactions.length !== 0 && (
        <TotalMoney filterTransactions={filterTransactions} />
      )}
    </>
  );
};
