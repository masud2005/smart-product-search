export default function ProductRow({product}){
    // console.log(product)

    const productName = product.stocked ? product.name : <span style={{color: 'red'}}>{product.name}</span>
    const productPrice = product.stocked ? product.price : <span style={{color: 'red'}}>{product.price}</span>

    return (
        <tr className="border-b">
            <td className="p-2">{productName}</td>
            <td className="p-2">{productPrice}</td>
        </tr>
    )
}