import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data";

function App() {
  let cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <div className="App">
      <Header />
      {cards}
    </div>
  );
}

export default App;
