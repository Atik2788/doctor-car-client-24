import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";
import axios from "axios";

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    // console.log(bookings);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    useEffect(() => {

        axios.get(url, {withCredentials: true})
        .then(res =>{
            setBookings(res.data)
        })

        
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => {
        //         setBookings(data);
            // })
    }, [url])

    const handleDelete = id => {
        const proceed = confirm('Are you sure want to DELETE??')

        if (proceed) {
            // axios.delete(`http://localhost:5000/bookings${id}`)
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.acknowledged) {
                        const remaining = bookings.filter(booking => booking._id !== id)
                        setBookings(remaining)

                        alert('Delete Booking Successfully')
                    }
                })
            // .catch(err => console.log("error", err))
        }
    }

    const handleBookingConfirm = id =>{
        const proceed = confirm('Are you want to Confirm??')
        
        if(proceed){
            fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH', 
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify({status: 'confirm'})
        })
        .then(res=> res.json())
        .then(data =>{
            // console.log(data);
            if(data.modifiedCount > 0){
                const remaining = bookings.filter(booking => booking._id !== id)
                const updated = bookings.find(booking => booking._id === id)
                updated.status = 'confirm';
                const newBookings = [updated, ...remaining]
                setBookings(newBookings)

                alert('Confirm Successfully!!')
            }
        })
        }
    }

    return (
        <div>
            <h2 className="text-5xl">Your Bookings {bookings.length}</h2>

            <div className="overflow-x-auto">
                <table className="table mt-5">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                {/* <label>
                                    <input type="checkbox" className="checkbox" />
                                </label> */}
                            </th>
                            <th>Image</th>
                            <th>Service Name</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleBookingConfirm={handleBookingConfirm}
                            ></BookingRow>)
                        }
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default Bookings;