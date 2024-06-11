import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
    const {_id, title, img, price } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-4 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="flex text-xl text-[#FF3811] items-center">
                    <p className=" ">Price: ${price}</p>
                    <div className="card-actions bg-base-300 hover:bg-red-300 rounded-full hover:bg-base-400">
                        <Link to={`/checkout/${_id}`}>
                            <button className="p-4" ><FaArrowRight /></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default ServicesCard;