import {Link} from "react-router-dom"
import {faCartPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default ({product}) => {
    return <div
        className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
        <Link to={`${product.id}`}>
            <img src={product.image} alt="Product" className="h-72 w-full object-contain object-center"/>
            <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">
                    {product.category}
                </span>
                <p className="text-lg font-bold text-black truncate block capitalize">
                    {product.title}
                </p>
                <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                        ${product.price}
                    </p>
                    <del>
                        <p className="text-sm text-gray-600 cursor-auto ml-2">
                            ${product.price + 199}
                        </p>
                    </del>
                    <div className="ml-auto">
                        <FontAwesomeIcon icon={faCartPlus}/>
                    </div>
                </div>
            </div>
        </Link>
    </div>
}
