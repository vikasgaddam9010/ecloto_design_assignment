const CartSummary = ({cartItems}) => {

    let total = 0
    cartItems && cartItems.map((each) =>  total += each.id !== 99 && each?.quantity*each?.price)

    let progress = (total/1000)*100

    return (
        <div className="bg-white p-3">
            <div className="flex items-center justify-between font-bold">
                <h2>Sub Total</h2>
                <p className={`${total < 1000 ? "text-red-500" : "text-green-700"} text-xl`}>₹ {total}</p>
            </div>
            <hr className='w-full my-2 rounded-full bg-gray-500 h-0.5'/>
            {
                total < 1000 ? <div className="bg-red-100  p-3">
                    <p>Add <span className={`${total < 1000 ? "text-red-500" : "text-green-700"} font-bold`}>₹{1000 - total} /-</span> more to get FREE Wirless Mouse!</p>
                    <div className="h-2 w-full bg-amber-200 mt-5 rounded-full overflow-hidden">
                        <div style={{width:`${progress}%`, transition:"width 0.3s ease"}} className="h-full bg-amber-950"></div>
                    </div>
                </div>
                :
                 <p className="bg-green-100  p-3 text-green-900">You Got Free Wirless Mouse</p>
            }
        </div>
    )
}

export default CartSummary