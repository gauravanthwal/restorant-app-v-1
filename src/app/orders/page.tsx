"use client";
import PrivateRoute from "@/components/auth/PrivateRoute";
import { checkStatus } from "@/config/helper";
import { fetchOrders } from "@/redux/features/orderSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const OrdersPage = () => {
  const dispatch = useDispatch();

  const { myOrders } = useSelector((state: any) => state.order);

  useEffect(() => {
    dispatch(fetchOrders());
  }, []);
  return (
    <PrivateRoute>
      <div className="p-4 lg:px-10 xl:px-20">
        <table className="w-full border-separate border-spacing-3">
          <thead>
            <tr className="text-left">
              <th className="hidden md:block">Order Id</th>
              <th>Date</th>
              <th>Price</th>
              <th className="hidden md:block">product</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {myOrders &&
              myOrders.length > 0 &&
              myOrders.map((order: any) => (
                <tr
                  key={order._id}
                  className="text-sm md:text-base odd:bg-gray-100"
                >
                  <td className="hidden md:block py-6 px-1">{order._id}</td>
                  <td className="py-6 px-1">
                    {new Date(order?.createdAt).toDateString()}
                  </td>
                  {order.product ? (
                    <>
                      <td className="py-6 px-1">${order?.product?.price}</td>
                      <td className="hidden md:block py-6 px-1">
                        {order?.product?.product_name}, {order?.quantity}qty
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="py-6 px-1">NA</td>
                      <td className="py-6 px-1">NA</td>
                    </>
                  )}
                  <td className="py-6 px-1">
                    <span
                    className="p-[3px] text-sm rounded-md"
                      style={{ background: checkStatus(order?.order_status) }}
                    >
                      {order?.order_status}
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </PrivateRoute>
  );
};

export default OrdersPage;
