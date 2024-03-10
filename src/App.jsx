import "./App.css";
import ExpenseItem from "./Components/ExpenseItem";

function Expense({ title, amount, date, location }) {
  return (
    <ExpenseItem
      title={title}
      amount={amount}
      date={date}
      location={location}
    />
  );
}

export default function App() {
  const expenses = [
    {
      title: "Car",
      amount: "$256.89",
      date: new Date(),
      location: "Main Street Garage",
    },
    {
      title: "Groceries",
      amount: "$75.32",
      date: new Date(),
      location: "FreshMart",
    },
    {
      title: "Electronics",
      amount: "$499.99",
      date: new Date(),
      location: "Tech Haven",
    },
    {
      title: "Clothing",
      amount: "$124.50",
      date: new Date(),
      location: "Fashion Emporium",
    },
    {
      title: "Restaurant",
      amount: "$45.67",
      date: new Date(),
      location: "Cuisine Paradise",
    },
    {
      title: "Gas",
      amount: "$40.00",
      date: new Date(),
      location: "Quick Fuel Station",
    },
    {
      title: "Movie Tickets",
      amount: "$25.00",
      date: new Date(),
      location: "Cineplex",
    },
    {
      title: "Books",
      amount: "$30.25",
      date: new Date(),
      location: "Bookworm's Den",
    },
    {
      title: "Home Decor",
      amount: "$99.99",
      date: new Date(),
      location: "HomeStyle",
    },
    {
      title: "Travel",
      amount: "$300.00",
      date: new Date(),
      location: "Travel Hub",
    },
    {
      title: "Printer Purchase",
      amount: "$150.00",
      date: new Date(),
      location: "Tech Supply Store",
    },
    {
      title: "Scanner Purchase",
      amount: "$100.00",
      date: new Date(),
      location: "Tech Haven",
    },
    {
      title: "Headphones Purchase",
      amount: "$50.00",
      date: new Date(),
      location: "AudioTech",
    },
    {
      title: "Speaker Purchase",
      amount: "$80.00",
      date: new Date(),
      location: "AudioTech",
    },
    {
      title: "Microphone Purchase",
      amount: "$70.00",
      date: new Date(),
      location: "AudioTech",
    },
    {
      title: "Gaming Console Purchase",
      amount: "$400.00",
      date: new Date(),
      location: "GameStop",
    },
    {
      title: "Furniture Purchase",
      amount: "$700.00",
      date: new Date(),
      location: "Home Furniture Mart",
    },
    {
      title: "Kitchen Appliance Purchase",
      amount: "$300.00",
      date: new Date(),
      location: "Kitchen Essentials",
    },
  ];

  const expenseComponents = expenses.map((expense, index) => (
    <Expense key={index} {...expense} />
  ));

  return (
    <>
      <h1>Welcome</h1>
      {expenseComponents}
    </>
  );
}
