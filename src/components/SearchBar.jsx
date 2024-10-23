export default function SearchBar({ searchProduct, inStockOnly, onSearchProductChange, onInStockOnlyChange }) {
    return (
        <form className="text-center mb-5 -mt-5 flex gap-3 lg:gap-10 justify-center items-center sticky top-0 bg-white border-b py-5 backdrop-blur-md bg-opacity-40">
            <h1 className="font-bold text-xl">Smart Product Search </h1>
            <input className="border border-black rounded h-11 px-4" type="text" value={searchProduct} onChange={(e) => onSearchProductChange(e.target.value)} placeholder="Search..." />
            <label className="text-lg font-serif">
                <input type="checkbox" checked={inStockOnly} onChange={(e) => onInStockOnlyChange(e.target.checked)} />
                <span className="ml-2">Only show products in stock</span>
            </label>
        </form>
    )
}