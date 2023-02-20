import { Button, TextField, MenuItem } from "@mui/material";

import { RoofPaint } from "../../fake-db/RoofPaint";

import { Form } from "react-router-dom";

import classes from "../../style/Froms.module.css";

function OrderForm({ method, order, selectEmployees }: any) {
  return (
    <div>
      <Form method={method} className={classes.order_form}>
        <TextField
          sx={{ m: 1 }}
          className={classes.input_size}
          id="address"
          name="address"
          type="text"
          label="Address"
          variant="outlined"
          defaultValue={order ? order.address : ""}
        />
        <TextField
          sx={{ m: 1 }}
          className={classes.input_size}
          id="roofPaint"
          name="roofPaint"
          select
          label="Roof Paint"
          defaultValue={order ? order.roofPaint : ""}
        >
          {RoofPaint.map((option: any) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          sx={{ m: 1 }}
          className={classes.input_size}
          id="roofSize"
          name="roofSize"
          type="number"
          label="Roof Size"
          variant="outlined"
          defaultValue={order ? order.roofSize : ""}
        />
        <TextField
          sx={{ m: 1 }}
          className={classes.input_size}
          id="roofAngle"
          name="roofAngle"
          type="number"
          label="Roof Angle"
          variant="outlined"
          defaultValue={order ? order.roofAngle : ""}
        />
        <TextField
          sx={{ m: 1 }}
          className={classes.input_size}
          id="description"
          name="description"
          type="text"
          label="Description"
          variant="outlined"
          defaultValue={order ? order.description : ""}
        />
        <TextField
          sx={{ m: 1 }}
          className={classes.input_size}
          id="worker"
          name="worker"
          select
          label="Select Worker"
          defaultValue={order ? order.worker : ""}
        >
          {selectEmployees.map((option: any) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Button type="submit" sx={{ m: 1 }} variant="contained" color="primary">
          save
        </Button>
      </Form>
    </div>
  );
}

export default OrderForm;
