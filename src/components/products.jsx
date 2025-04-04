const Products = ({productsList, increament, decreament, addItem}) => {
    
    return (
        <ul className="mt-4 grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-3">
            {
                productsList.map(each => (
                    <li className={`p-4 rounded-lg font-bold ${each.color}`} key={each.id}>
                        <h3>{each.name}</h3>
                        <p className="mt-2">₹ {each.price}/-</p>
                        <div className="flex items-center justify-between ">
                            <p>Quantity</p>
                            <div>
                                <button onClick={()=>{increament(each.id)}} className="outline-none p-0 m-0 text-white !bg-green-500 hover:!bg-green-400  hover:scale-105 transition-transform">+</button>
                                <span className="mx-3">{each?.quantity}</span>
                                <button onClick={()=>{decreament(each.id)}}  className="outline-none p-0 m-0 text-white !bg-red-500 hover:!bg-red-400  hover:scale-105 transition-transform">-</button>
                            </div>
                        </div>
                        <button onClick={()=>{addItem(each.id)}} className="outline-none w-full mt-4 text-white !bg-blue-700 hover:!bg-blue-600  hover:scale-105 transition-transform">Add to Cart</button>
                    </li>
                ))
            }
        </ul>
    )
}

export default Products