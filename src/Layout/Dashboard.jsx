import { FaCalendar, FaEnvelope, FaHome, FaList, FaMemory, FaRegIdBadge, FaShoppingCart, FaUsers, FaUtensilSpoon } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
    const [cart] = useCart();

    //TODO: get this admin value from db
    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                    {
                        isAdmin ?
                            <><li>
                                <NavLink to="/dashboard/adminHome"><FaHome></FaHome> Admin Home</NavLink>
                            </li>
                                <li>
                                    <NavLink to="/dashboard/addItems"><FaUtensilSpoon></FaUtensilSpoon> Add Items</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/manageItems"><FaList></FaList> Manage Items</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/bookings"><FaMemory></FaMemory> Manage Bookings</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/users"><FaUsers></FaUsers> My All Users</NavLink>
                                </li></>
                            :
                            <><li>
                                <NavLink to="/dashboard/userHome"><FaHome></FaHome> User Home</NavLink>
                            </li>
                                <li>
                                    <NavLink to="/dashboard/paymentHistory"><FaCalendar></FaCalendar> Payment History</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/cart"><FaShoppingCart></FaShoppingCart> My Cart({cart.length})</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/review"><FaMemory></FaMemory>Add a Review</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/bookings"><FaList></FaList> My Bookings</NavLink>
                                </li></>
                    }
                    {/* shared navlinks */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/"><FaHome></FaHome> Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad"><FaRegIdBadge></FaRegIdBadge> Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact"><FaEnvelope></FaEnvelope> Contact</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;