
import Expenses from './components/Expenses/Expenses';


function App() {

  const expenses = [
    {
      expenseName: "Car Fix",
      amount: 250,
      date: new Date("2022, 02, 18")
    }, {
      expenseName: "Home Rent",
      amount: 1000,
      date: new Date("2022, 02, 31")
    }, {
      expenseName: "Super Market Shopping",
      amount: 150,
      date: new Date("2022, 02, 23")
    }, {
      expenseName: "Clothes Shopping",
      amount: 400,
      date: new Date("2022, 5, 02")
    }
  ]

  return (
    <div className="App">
      <Expenses exp = {expenses}/>
    </div>
  );
}

export default App;
