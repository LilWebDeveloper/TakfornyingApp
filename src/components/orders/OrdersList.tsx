import List from "../items/List";

const OrdersList = ({ orders }: any) => {
  return <List title='All orders' dataset={orders}/>
};

export default OrdersList;