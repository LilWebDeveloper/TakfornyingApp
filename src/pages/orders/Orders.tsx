import { useLoaderData } from 'react-router-dom'

import OrdersList from '../../components/OrdersList';

function EventsPage() {
const orders = useLoaderData();

  return <OrdersList orders={orders} />

}

export default EventsPage;