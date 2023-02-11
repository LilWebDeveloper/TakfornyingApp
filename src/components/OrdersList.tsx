import { Link } from "react-router-dom";
import classes from "../style/OrdersList.module.css";

interface Orders {
    orders: any
}

const EventsList = ({orders}: Orders) => {

  return (
    <div className={classes.events}>
      <h1>All Orders</h1>
      <ul className={classes.list}>
        {orders.map((order: any) => (
          <li key={order.id} className={classes.item}>
            <Link to={`/orders/${order.id}`}>
              <div className={classes.content}>
                <h2>Address: {order.address}</h2>
                <h3>Roof paint: {order.roofPaint}</h3>
                <h3>Roof size: {order.roofSize} square meters</h3>
                <h3>Roof angle: {order.roofAngle} degrees</h3>
                <h3>Description: {order.description}</h3>
              </div>
              </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsList;