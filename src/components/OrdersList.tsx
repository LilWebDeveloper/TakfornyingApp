import { Link } from "react-router-dom";
import classes from "./OrdersList.module.css";

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
                <h2>{order.address}</h2>
                <h3>{order.roofPaint}</h3>
                <h3>{order.roofSize}</h3>
                <h3>{order.roofAngle}</h3>
                <h3>{order.description}</h3>
              </div>
              </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsList;