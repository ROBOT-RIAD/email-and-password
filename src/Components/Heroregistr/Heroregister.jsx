
import {createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
const Heroregister = () => {
     
    const handleregistr = (e) => {
        e.preventDefault(); 
        const email = e.target.email.value; 
        const password = e.target.password.value;
        createUserWithEmailAndPassword(auth,email,password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error);
        });
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
               
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
               
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={ handleregistr } className="card-body">
                     
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email" 
                                placeholder="Enter your email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                      
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"  
                                placeholder="Enter your password"
                                className="input input-bordered"
                                required
                            />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">
                                    Forgot password?
                                </a>
                            </label>
                        </div>
               
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Heroregister;
