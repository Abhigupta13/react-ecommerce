import NavBar from '../features/navbar/Navbar';
import UserOrders from '../features/user/components/UserOrders';

function UserOrdersPage() {
  return (
    <div>
      <NavBar>
        <UserOrders/>
      </NavBar>
    </div>
  );
}

export default UserOrdersPage;