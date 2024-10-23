import { useState } from "react"
import ProductTable from "./ProductTable"
import SearchBar from "./SearchBar"

export default function FilterableProductTable({products}) {
    // console.log(products)

    const [searchProduct, setSearchProduct] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    return(
        <div className="container mx-auto  p-10 shadow-[0px_1px_10px_gray]">
            <SearchBar searchProduct={searchProduct} inStockOnly={inStockOnly} onSearchProductChange={setSearchProduct} onInStockOnlyChange={setInStockOnly}/>

            <ProductTable products={products} searchProduct={searchProduct} inStockOnly={inStockOnly}/>
        </div>
    )
}