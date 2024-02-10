import PrivateRoute from "@/components/auth/PrivateRoute";
import OrderComponent from "@/components/orders/OrderComponent";
const OrdersPage = () => {
  return (
    <PrivateRoute>
      <OrderComponent />
    </PrivateRoute>
  );
};

export default OrdersPage;
