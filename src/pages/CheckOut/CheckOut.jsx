import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";


const CheckOut = () => {
    const service = useLoaderData()
    const {title, _id, price, img} = service;
    const {user} = useContext(AuthContext)
    // console.log(service);


    const handleBooking = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking = {
            customerName: name,
            date,
            email,
            img,
            service_id: _id,
            service: title,
            price
        }

        // console.log(booking);

        axios.post('http://localhost:5000/bookings', booking)
        // .then(res => res.json())
        .then( data => {
            // console.log(data)
            if(data.data.acknowledged){
                alert('Services booking successfully!')
            }
        })
        .catch(err => console.log(err))

        // fetch('http://localhost:5000/bookings',{
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(booking)
        // })
        // .then(res => res.json())
        // .then( data => {
        //     console.log(data.data);
        // })

        form.reset()

    }



    return (
        <div>
            <h2 className="text-center text-3xl font-bold">Book Service: {title}</h2>

            <form onSubmit={handleBooking} className="card-body">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your Name" defaultValue={user?.displayName} className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Booking Date</span>
                        </label>
                        <input type="date" name="date" placeholder="" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                    <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={user?.email} className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                    <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" name="price" defaultValue={"$"+price} className="input input-bordered" required />
                    </div>

                </div>



                <div className="form-control mt-6">
                    <input type="submit" className="text-white text-lg rounded-md bg-[#FF3811] btn btn-block" />
                </div>
            </form>

        </div>
    );
};

export default CheckOut;