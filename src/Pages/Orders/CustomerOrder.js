import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/shop-context";
import "./CustomerOrder.css";

export const CustomerOrder = () => {
  const { orders } = useContext(ShopContext);
  const [expandedOrders, setExpandedOrders] = useState([]);

  const toggleOrderDetails = (invoiceCode) => {
    if (expandedOrders.includes(invoiceCode)) {
      setExpandedOrders(expandedOrders.filter((code) => code !== invoiceCode));
    } else {
      setExpandedOrders([...expandedOrders, invoiceCode]);
    }
  };

  const currentOrder = orders[orders.length - 1]; 
  const previousOrders = orders.slice(0, orders.length - 1);

  return (
    <div className="customer-order-container">
      <h1 className="customer-order-title">Customer Order</h1>
      
      <h2 className="previous-orders-title">Current Orders</h2>

      {/* Display current order first */}
      {currentOrder && (
        <div key={currentOrder.invoiceCode} className="order-container">
          <div className="order-header">
            <span className="order-invoice-number"><b>Invoice Number: </b>#{currentOrder.invoiceCode}</span>
            <button
              className="view-details-button"
              onClick={() => toggleOrderDetails(currentOrder.invoiceCode)}
            >
              {expandedOrders.includes(currentOrder.invoiceCode) ? "Hide Details" : "View Details"}
            </button>
          </div>
          {expandedOrders.includes(currentOrder.invoiceCode) && (
            <div className="order-details">
              <h2 className="order-details-title">Order Details</h2>
              <p className="order-details-total-amount">
                Total Amount: &#8377; {currentOrder.totalAmount.toLocaleString("en-IN")}
              </p>
              <ul className="order-items-list">
                {currentOrder.items.map((item) => (
                  <li key={item.id} className="order-item-details">
                    <span className="order-item-id">Item ID: {item.id}</span>
                    <span className="order-item-name">Name: {item.name}</span>
                    <span className="order-item-quantity">Quantity: {item.quantity}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    <h2 className="previous-orders-title">Previous Orders</h2>
      {/* Display previous orders */}
      <div className="orders-list">
        {previousOrders.map((order) => (
          <div key={order.invoiceCode} className="order-container">
            <div className="order-header">
              <span className="order-invoice-number"><b>Invoice Number: </b>#{order.invoiceCode}</span>
              <button
                className="view-details-button"
                onClick={() => toggleOrderDetails(order.invoiceCode)}
              >
                {expandedOrders.includes(order.invoiceCode) ? "Hide Details" : "View Details"}
              </button>
            </div>
            {expandedOrders.includes(order.invoiceCode) && (
              <div className="order-details">
                <h2 className="order-details-title">Order Details</h2>
                <p className="order-details-total-amount">
                  Total Amount: &#8377; {order.totalAmount.toLocaleString("en-IN")}
                </p>
                <ul className="order-items-list">
                  {order.items.map((item) => (
                    <li key={item.id} className="order-item-details">
                      <span className="order-item-id">Item ID: {item.id}</span>
                      <span className="order-item-name">Name: {item.name}</span>
                      <span className="order-item-quantity">Quantity: {item.quantity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
