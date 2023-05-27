import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import classes from "../../style/List.module.css";
import { OrdersResData, OrderType } from "../../interfaces/Order";
import { ordersList } from "../../utils/TestsRoles";
import { Pagination, Stack } from "@mui/material";
import capitalizeFirst from "../../utils/CapitalizeFirst";
import OrdersSearchBar from "../searchBar/OrdersSearchBar";
import axios from "axios";
import { getAuthToken } from "../../utils/auth";
import useDebounce from "../../utils/debounceHook";

const OrdersList = ({ orders, pagination }: OrdersResData) => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [ordersData, setOrdersData] = useState([]);
  const [employeeId, setEmployeeId] = useState("");
  const [employeeOrders, setEmployeeOrders] = useState([]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    navigate(`?p=${value}`);
  };

  const search = (employeeId: string) => {
    setEmployeeId(employeeId);
  };

  const searchData = async () => {
    const token = getAuthToken();

    const response = await axios
      .get(
        `${process.env.REACT_APP_FETCH_ADDRESS!}/orders/all?empId=${employeeId}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .catch((err) => {
        console.log({
          message: "Could not fetch employee orders.",
          status: 500,
        });
      });

    if (response) {
      setOrdersData(response.data);
    }
  };

  useDebounce(employeeId, 500, searchData)

  useEffect(() => {
    if (orders) {
      setOrdersData(orders as never[]);
    }

    if (pagination) {
      setPageCount(+pagination.pageCount);
    }
  }, [pagination, orders]);

  console.log(ordersData);

  return (
    <div className={classes.orders}>
      <h1>All orders</h1>
      <header className={classes.header}>
        <OrdersSearchBar search={search} />
      </header>
      {ordersData.map((data: OrderType) => (
        <Grid key={data._id} item xs={12} role={ordersList}>
          <Paper
            className={classes.paper}
            sx={{ m: 2, p: 2, display: "flex", flexDirection: "column" }}
          >
            <Link to={`/dashboard/orders/${data._id}?p=${page}`}>
              <div className={classes.content}>
                <h2>{capitalizeFirst(data.address)}</h2>
              </div>
            </Link>
          </Paper>
        </Grid>
      ))}
      <footer className={classes.pagination}>
        <Stack spacing={2}>
          <Pagination
            count={pageCount}
            page={page}
            onChange={handleChange}
            color="primary"
          />
        </Stack>
      </footer>
    </div>
  );
};

export default OrdersList;
