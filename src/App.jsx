import "./App.css";
import { useState } from "react";
import { Homepage } from "./components/Homepage/Homepage";
import { Header } from "./components/Header/Header";
import { Form } from "./components/Form/Form";
import { List } from "./components/List/List";

function App() {
  const [showHomepage, setShowHomepage] = useState(true);
  const [listTransactions, setListTransactions] = useState([]);
  
  const [filter, setFilter] = useState("")
  const filterTransactions = listTransactions.filter (transaction => filter === "" ? true : transaction.type === filter)

  return (
    <div className="App">
      {showHomepage ? (
        <Homepage setShowHomepage={setShowHomepage} />
      ) : (
        <main className="App-main">
          <Header setShowHomepage={setShowHomepage} />
          <div className="main-block">
            <div className="container">
              <Form
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
                filterTransactions={filterTransactions}
              />
            </div>
            <List
              filterTransactions={filterTransactions}
              setListTransactions={setListTransactions}
              setFilter = {setFilter}
              filter={filter}
            />
          </div>
        </main>
      )}
    </div>
  );
}

export default App;
