

const Login = () => {
    return (
        <div className="container mx-auto flex justify-center mt-52 border border-blue-500 w-52">

            <form>
                <h1 className="text-center text-orange-400 text-2xl">Login</h1>
                <div>
                    <h1>Name:</h1>
                    <input className="border border-green-500" type="text" name="name" id="name" placeholder="Name"/>
                </div>
                <div>
                    <h1>Email:</h1>
                    <input className="border border-green-500" type="email" name="email" id="email" placeholder="Email" />
                </div>
                <div className="text-center pb-4">
                    <button className="text-white bg-orange-400 rounded-lg p-1 text-sm" type="submit">Sign In</button>
                </div>
            </form>
            
        </div>
    );
};

export default Login;