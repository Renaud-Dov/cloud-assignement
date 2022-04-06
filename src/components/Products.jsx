import {Link} from "react-router-dom";
import {PlusIcon} from '@heroicons/react/solid'
import {Rating} from "./Rating";
import {useEffect, useState} from "react";


const list = [
    {
        name: 'Product 1',
        id_product: 1,
        price: '$100',
        img: 'https://flowbite.com/docs/images/products/product-1.png',
        alt: 'Product 1 image',
        rating: 3,
    },
    {
        name: 'Product 2',
        id_product: 2,
        price: '$200',
        img: 'https://flowbite.com/docs/images/products/product-1.png',
        alt: 'Product 2 image',
        rating: 4,
    },
    {
        name: 'Product 3',
        id_product: 3,
        price: '$300',
        img: 'https://flowbite.com/docs/images/products/product-1.png',
        alt: 'Product 3 image',
        rating: 2,
    }
];

function addToBasket(id_product) {
}

function Card(element) {
    return <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <Link to={`product/${element.id_product}`}>
            <img className="p-8 rounded-t-lg" src={element.img} alt={element.alt}/>
        </Link>
        <div className="px-5 pb-5">
            <Link to={`product/${element.id_product}`}>
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{element.name}</h5>
            </Link>
            <Rating className="flex items-center mt-2.5 mb-5" value={element.rating}/>

            <div className="flex justify-between items-center">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">{element.price}</span>
                <div onClick={() => {
                    addToBasket(element.id_product)
                }}
                   className="text-white flex bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
                    to basket
                    <PlusIcon className="ml-2 block h-5 w-5"/>
                </div>


            </div>
        </div>
    </div>
}

export default function Products() {
    const [elements, setElements] = useState([]);
    useEffect(() => {
        setElements(list);
    }, []);
    return <div className="flex mt-4 flex-wrap gap-4 justify-center">
        {elements.map(element => <Card key={element.id_product} {...element}/>)}
    </div>
}