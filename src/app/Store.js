import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/users/usersSlice";
import { Provider } from "react-redux";


const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

const ConfigStoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
export default ConfigStoreProvider;
