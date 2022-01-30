// ./src/stores/index.ts
import { createContext, useContext } from "react";
import { STORE_ROUTER, RouterStore, history } from "./router";

function createStores() {
  return {
    [STORE_ROUTER]: new RouterStore(),
  };
}

const stores = createStores();

const StoresContext = createContext(stores);

const useStores = () => useContext(StoresContext);

function useRouterStore() {
  const { routerStore } = useStores();
  return routerStore;
}

export { stores, history, StoresContext, useRouterStore };
