
import FilterableProductTable from './components/FilterableProductTable'
import './App.css'

function App() {

  const products = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$3", stocked: false, name: "Banana" },
    { category: "Fruits", price: "$2", stocked: true, name: "Cherry" },
    { category: "Fruits", price: "$4", stocked: false, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: true, name: "Grapes" },
    { category: "Fruits", price: "$5", stocked: true, name: "Mango" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Carrot" },
    { category: "Vegetables", price: "$2", stocked: false, name: "Broccoli" },
    { category: "Vegetables", price: "$3", stocked: true, name: "Cucumber" },
    { category: "Vegetables", price: "$4", stocked: true, name: "Peas" },
    { category: "Vegetables", price: "$3", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$5", stocked: true, name: "Spinach" },
    { category: "Snacks", price: "$1", stocked: true, name: "Chips" },
    { category: "Snacks", price: "$2", stocked: false, name: "Pretzels" },
    { category: "Snacks", price: "$3", stocked: true, name: "Popcorn" },
    { category: "Snacks", price: "$4", stocked: true, name: "Nachos" },
    { category: "Beverages", price: "$1", stocked: true, name: "Water" },
    { category: "Beverages", price: "$3", stocked: true, name: "Soda" },
    { category: "Beverages", price: "$5", stocked: false, name: "Juice" },
    { category: "Beverages", price: "$2", stocked: true, name: "Tea" }
  ]

  return (
    <>
      <FilterableProductTable products={products} />
    </>
  )
}

export default App
