import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default function ProductTable({ products, searchProduct, inStockOnly }) {
    // console.log(products)

    const rows = [];
    let lastCategory = null;

    products.forEach(product => {
        console.log(product)

        if(product.name.toLowerCase().indexOf(searchProduct.toLowerCase()) === -1){
            return;
        }
        if(inStockOnly && !product.stocked){
            return;
        }

        if (product.category !== lastCategory) {
            rows.push(<ProductCategoryRow category={product.category} key={product.category} />)
        }
        rows.push(<ProductRow product={product} key={product.name} />)

        lastCategory = product.category;
    })

    return (
        <table className=" w-full">
            <thead className="bg-gray-300 border-b border-black">
                <tr className="h-10">
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}7