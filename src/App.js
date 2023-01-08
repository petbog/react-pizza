import './App.css';
import Header from './components/header/Header';
import PizzaItems from './components/pizzaList/PizzaItems';
import SearchButton from './components/searchMenuHeader/SearchButton';

function App() {
  return (
    <div className="Container">
      <Header />
      <SearchButton />
      <PizzaItems />
    </div>
  );
}

export default App;
