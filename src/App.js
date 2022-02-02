import "./App.css";
import FilteredTable from "./components/FilteredTable";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>List of Products</h2>
        <FilteredTable />
      </header>
    </div>
  );
}

export default App;
