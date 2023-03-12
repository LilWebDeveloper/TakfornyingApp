import { createStore } from "redux";

const initialState = {
  adminPanel: false,
  managerPanel: false,
  employeePanel: false,
};

const counterReducer = (state = initialState, action: any) => {
  if (action.type === "Admin") {
    return {
      adminPanel: !state.adminPanel,
      managerPanel: state.managerPanel,
      employeePanel: state.employeePanel,
    };
  }

  if (action.type === "Manager") {
    return {
      adminPanel: state.adminPanel,
      managerPanel: !state.managerPanel,
      employeePanel: state.employeePanel,
    };
  }

  if (action.type === "Employee") {
    return {
      adminPanel: state.adminPanel,
      managerPanel: state.managerPanel,
      employeePanel: !state.employeePanel,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
