
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />

                <div className="absolute flex items-center rounded-xl h-full flex bg-gradient-to-r from-[#151515] to-[]#151515 ">
                    <div className='text-white space-y-7 w-1/3 pl-12'>
                        <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                        <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-outline btn-primary font-semibold mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary font-semibold">Latest Project</button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex right-5 gap-5 transform -translate-y-1/2 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-xl" />

                <div className="absolute flex items-center rounded-xl h-full flex bg-gradient-to-r from-[#151515] to-[]#151515 ">
                    <div className='text-white space-y-7 w-1/3 pl-12'>
                        <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                        <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-outline btn-primary font-semibold mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary font-semibold">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex right-5 gap-5 transform -translate-y-1/2 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-xl" />

                <div className="absolute flex items-center rounded-xl h-full flex bg-gradient-to-r from-[#151515] to-[]#151515 ">
                    <div className='text-white space-y-7 w-1/3 pl-12'>
                        <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                        <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-outline btn-primary font-semibold mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary font-semibold">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex right-5 gap-5 transform -translate-y-1/2 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-xl" />

                <div className="absolute flex items-center rounded-xl h-full flex bg-gradient-to-r from-[#151515] to-[]#151515 ">
                    <div className='text-white space-y-7 w-1/3 pl-12'>
                        <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                        <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-outline btn-primary font-semibold mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary font-semibold">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex right-5 gap-5 transform -translate-y-1/2 bottom-0">
                    <div>

                    </div>
                </div>
                <div className="absolute flex right-5 gap-5 transform -translate-y-1/2 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={img5} className="w-full rounded-xl" />

                <div className="absolute flex items-center rounded-xl h-full flex bg-gradient-to-r from-[#151515] to-[]#151515 ">
                    <div className='text-white space-y-7 w-1/3 pl-12'>
                        <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                        <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-outline btn-primary font-semibold mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary font-semibold">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex right-5 gap-5 transform -translate-y-1/2 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={img6} className="w-full rounded-xl" />

                <div className="absolute flex items-center rounded-xl h-full flex bg-gradient-to-r from-[#151515] to-[]#151515 ">
                    <div className='text-white space-y-7 w-1/3 pl-12'>
                        <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                        <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-outline btn-primary font-semibold mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary font-semibold">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex right-5 gap-5 transform -translate-y-1/2 bottom-0">
                    <a href="#slide5" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;