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

const OrdersList = ({ orders, pagination }: OrdersResData) => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [employeeId, setEmployeeId] = useState("");

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    navigate(`?p=${value}&empId=${employeeId}`);
  };

  const search = (employeeId: string) => {
    setEmployeeId(employeeId);
    setPage(1)
  };

  useEffect(() => {
    if (pagination) {
      setPageCount(+pagination.pageCount);
    }
  }, [pagination]);

  const pageZero = () =>{
    setEmployeeId('')
    setPage(1)
  }

  return (
    <div className={classes.orders}>
      <h1>All orders</h1>
      <header className={classes.header}>
        <OrdersSearchBar search={search} page={page}/>
      </header>
      {orders.map((data: OrderType) => (
        <Grid key={data._id} item xs={12} role={ordersList}>
          <Paper
            className={classes.paper}
            sx={{ m: 2, p: 2, display: "flex", flexDirection: "column" }}
          >
            <Link
              to={`/dashboard/orders/${data._id}?p=1`}
              onClick={pageZero}
            >
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
