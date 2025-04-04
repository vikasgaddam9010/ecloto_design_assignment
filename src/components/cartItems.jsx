const CartItems = ({cartItems, increamentCart, decreamentCart, deleteItemfromCart}) => {
    return (
        <ul>
            {
                cartItems.map(each => (
                    <li className="bg-white p-3 mt-3 rounded-xl flex items-center justify-between" key={each.id}>
                        <div>
                            <p className="font-bold">{each.name}</p>
                            {each.id !== 99 && <p>₹{each.price} X {each.quantity} = ₹{each.price * each.quantity}</p>}
                        </div>
                        {each.id === 99 ? <p className="px-5 py-2 rounded-2xl bg-green-300 text-green-900">Free Gift </p> :
                        <div className="flex items-center justify-between gap-3">
                            <button onClick={()=>{deleteItemfromCart(each.id)}} className="bg-red-500">Trash</button>
                            <div>
                                <button onClick={()=>{increamentCart(each.id)}} className="outline-none p-0 m-0 text-white !bg-green-500 hover:!bg-green-400  hover:scale-105 transition-transform">+</button>
                                <span className="mx-3">{each?.quantity}</span>
                                <button onClick={()=>{decreamentCart(each.id)}}  className="outline-none p-0 m-0 text-white !bg-red-500 hover:!bg-red-400  hover:scale-105 transition-transform">-</button>
                            </div>
                        </div>}
                    </li>
                ))
            }
        </ul>
    )
}

export default CartItems