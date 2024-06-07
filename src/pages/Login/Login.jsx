import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';


const Login = () => {

    const {signIn} = useContext(AuthContext)

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email,password);
        
        signIn(email, password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error => console.log(error))

        form.reset('')

    }

    return (
        <div className="mt-20">
            <div className="hero-content flex-col lg:flex-row">

                <div className="w-1/2 mr-12">
                    <img src={logoImg} alt="" />
                </div>

                <div className="card shrink-0 w-1/2 max-w-xl border p-14">
                    <form onSubmit={handleLogin} className=" mt-5">
                        <h1 className="text-5xl font-bold text-center">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <input className="btn bg-[#FF3811] hover:text-black hover:font-bold hover:bg-[#FF6811] text-white" type="submit" value="Login" />
                        </div>

                    </form>
                    
                    <h3 className="text-center font-bold my-4">Or Sign In With</h3>
                    <p className='text-center'>New to Car Doctors <Link className='text-[#FF3811] font-bold' to='/signup'>Sign Up</Link></p>
                </div>

            </div>
        </div>
    );
};

export default Login;