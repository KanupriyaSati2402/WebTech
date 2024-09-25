import React, { createContext, useEffect, useState } from "react";
import AxiosInstance from "../axiosInstance/AxiosInstance";

export let globalVar = createContext();

const GlobalContext = ({ children }) => {
  let { Provider } = globalVar;
  let [cartData, setCartData] = useState([]);
  let [update, setUpdate] = useState(0);
  let [deleteCount, setDeleteCount] = useState(0);
  let [loginType, setLoginType] = useState("Admin");
  let [addProductPanel, setAddProductPanel] = useState(false);

  let buyProduct = (navigate, ele) => {
    navigate("/payment", { state: ele });
  };

  useEffect(() => {
    // we can't make the function inside useEffect async

    let func = async () => {
      let { data } = await AxiosInstance.get("/Cart");

      setCartData(data);
    };
    func();
  }, [deleteCount, update]);

  let loginTypes = [
    {
      loginName: "Admin",
      loginVal: "Admin",
    },
    {
      loginName: "User",
      loginVal: "User",
    },
  ];
  let deleteCart = (categoryType, id) => {
    console.log(categoryType)
    AxiosInstance.delete(`/${categoryType}/${id}`);
    setUpdate(update + 1);
  };
  return (
    <Provider
      value={{
        deleteCart,
        cartData,
        setCartData,
        deleteCount,
        setDeleteCount,
        update,
        setUpdate,
        buyProduct,
        loginType,
        setLoginType,
        loginTypes,
        addProductPanel,
        setAddProductPanel,
      }}
    >
      {children}
    </Provider>
  );
};

export default GlobalContext;

//we cannot use routerhook inside context api
