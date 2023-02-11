import { useParams, Link } from 'react-router-dom'

function OrderDetailPage() {
    const params = useParams();

    return <>
    <h1>Porduct Details!</h1>
    <p>Event ID: {params.orderId}</p>
    <p><Link to='..' relative='path'>Back</Link></p>
    </>
};

export default OrderDetailPage;