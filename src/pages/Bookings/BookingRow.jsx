
const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
    const { _id, date, service, price, img, status } = booking;
    // console.log(booking);


    // console.log(customerName);
    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="rounded-full w-24 h-24">
                        {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
                    </div>

                </div>
            </td>
            <td>{service}</td>
            <td>{date}</td>
            <td>$ {price}</td>
            <th>
                {status === 'confirm' ?
                    <button className="text-purple-600 w-28 btn-md">Confirmed</button>
                    :
                    <button onClick={() => handleBookingConfirm(_id)} className="btn bg-[#FF3811] text-white w-28 btn-md">Confirm</button>

                }
            </th>
        </tr>
    );
};

export default BookingRow;