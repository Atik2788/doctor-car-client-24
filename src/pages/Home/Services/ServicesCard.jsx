import { FaArrowRight } from "react-icons/fa6";

const ServicesCard = ({ service }) => {
    const { title, img, price } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="flex text-xl text-[#FF3811] items-center">
                    <p className=" ">Price: ${price}</p>
                    <div className="card-actions bg-base-300 rounded-full p-4 hover:bg-base-400">
                        <button className=""><FaArrowRight /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default ServicesCard;