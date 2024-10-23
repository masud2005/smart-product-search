export default function ProductCategoryRow({ category }) {
    // console.log(category)
    return (
        <tr className="bg-green-200">
            <th className="p-2" colSpan='2'>
                {category}
            </th>
        </tr>
    )
}