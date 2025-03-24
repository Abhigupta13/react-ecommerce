
import Login from './../features/Auth/components/Login';
function LoginPage() {
    return (
        <div className="">
            <div className="mt-4">
                <Login/>
            </div>
            {/* <div className="mt-8 p-4 bg-yellow-100 border border-blue-200 rounded-lg shadow-sm max-w-2xl mx-auto">
                <p className="text-md text-blue-800 text-center">
                    <span className="font-semibold">⚠️ Note:</span> Login/Signup may take up to 60s as backend is on Render.
                    <p>Thanks for your patience! 🙏</p>
                </p>
            </div> */}
        </div>
    );
}

export default LoginPage;