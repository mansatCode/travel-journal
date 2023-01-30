import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import LOCATIONS from './data/data';

function App() {
  const cards = LOCATIONS.map(item => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div className="App">
      <Header />
      <section className="cardsList">
        {cards}
      </section>
    </div>
  );
}

export default App;
