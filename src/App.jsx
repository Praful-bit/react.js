import "./App.css";
// import "./ExpenseItem.css";
import ExpenseItem from "./Components/Expense/ExpenseItem.jsx";
import NewExpense from "./Components/NewExpense/NewExpense.jsx";
const expenses = [
  {
    id: 1,
    title: "Car",
    amount: "$256.89",
    date: new Date(),
    location: "Main Street Garage",
  },
  {
    id: 2,
    title: "Groceries",
    amount: "$75.32",
    date: new Date(),
    location: "FreshMart",
  },
  {
    id: 3,
    title: "Electronics",
    amount: "$499.99",
    date: new Date(),
    location: "Tech Haven",
  },
  {
    id: 4,
    title: "Clothing",
    amount: "$124.50",
    date: new Date(),
    location: "Fashion Emporium",
  },
  {
    id: 5,
    title: "Restaurant",
    amount: "$45.67",
    date: new Date(),
    location: "Cuisine Paradise",
  },
  {
    id: 6,
    title: "Gas",
    amount: "$40.00",
    date: new Date(),
    location: "Quick Fuel Station",
  },
  {
    id: 7,
    title: "Movie Tickets",
    amount: "$25.00",
    date: new Date(),
    location: "Cineplex",
  },
  {
    id: 8,
    title: "Books",
    amount: "$30.25",
    date: new Date(),
    location: "Bookworm's Den",
  },
  {
    id: 9,
    title: "Home Decor",
    amount: "$99.99",
    date: new Date(),
    location: "HomeStyle",
  },
  {
    id: 10,
    title: "Travel",
    amount: "$300.00",
    date: new Date(),
    location: "Travel Hub",
  },
  {
    id: 11,
    title: "Printer Purchase",
    amount: "$150.00",
    date: new Date(),
    location: "Tech Supply Store",
  },
  {
    id: 12,
    title: "Scanner Purchase",
    amount: "$100.00",
    date: new Date(),
    location: "Tech Haven",
  },
  {
    id: 13,
    title: "Headphones Purchase",
    amount: "$50.00",
    date: new Date(),
    location: "AudioTech",
  },
  {
    id: 14,
    title: "Speaker Purchase",
    amount: "$80.00",
    date: new Date(),
    location: "AudioTech",
  },
  {
    id: 15,
    title: "Microphone Purchase",
    amount: "$70.00",
    date: new Date(),
    location: "AudioTech",
  },
  {
    id: 16,
    title: "Gaming Console Purchase",
    amount: "$400.00",
    date: new Date(),
    location: "GameStop",
  },
  {
    id: 17,
    title: "Furniture Purchase",
    amount: "$700.00",
    date: new Date(),
    location: "Home Furniture Mart",
  },
  {
    id: 18,
    title: "Kitchen Appliance Purchase",
    amount: "$300.00",
    date: new Date(),
    location: "Kitchen Essentials",
  },
  {
    id: 19,
    title: "Laptop Purchase",
    amount: "$1200.00",
    date: new Date(),
    location: "Tech Haven",
  },
  {
    id: 20,
    title: "Smartphone Purchase",
    amount: "$800.00",
    date: new Date(),
    location: "Tech Store",
  },
];

const App = () => {
  return (
    <>
      <NewExpense />
      <div className="expense">
        <ExpenseItem title={expenses} />
      </div>
    </>
  );
};

export default App;
