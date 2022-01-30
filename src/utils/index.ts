import moment from "moment";

const formatDateForPeriod = (date: string) => {
  return moment(date, "DD-MM-YYYY").format("MM/YYYY");
};

const formatDateForInput = (date: string) => {
  return moment(date, "DD-MM-YYYY").format("yyyy-MM-DD");
};

const formatDateFromInput = (date: string) => {
  return moment(date, "YYYY-MM-DD").format("DD-MM-YYYY");
};

const formatDateToMoment = (date: string) => {
  return moment(date, "DD-MM-YYYY");
};

const getDefaultDate = () => {
  return moment("01/01/1990", "DD-MM-YYYY");
};

const removeAllLocalStorage = () => {
  localStorage.clear();
};

const setLocalStorage = (key: string, params: any) => {
  // check the params is object or not , if object json stringify
  if (typeof params === "object") {
    params = JSON.stringify(params);
  }
  localStorage.setItem(key, params);
  return true;
};

const getLocalStorageWithAsync = (key: string) => {
  try {
    const item = localStorage.getItem(key);
    return item;
  } catch (e) {
    return false;
  }
};

const getLocalStorage = (key: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const item = await localStorage.getItem(key);
      resolve(item);
    } catch (e) {
      // reject({ code: 500, message: e.message, data: null });
    }
  });
};

export {
  setLocalStorage,
  getLocalStorage,
  getLocalStorageWithAsync,
  removeAllLocalStorage,
  formatDateForInput,
  formatDateFromInput,
  formatDateForPeriod,
  formatDateToMoment,
  getDefaultDate,
};
