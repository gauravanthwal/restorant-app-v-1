import Cookie from "js-cookie";

export const setInStorage = (key: string, value: any) => {
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.setItem(key, value);
  }
};

export const getFromStorage = (key: string) => {
  if (typeof window !== "undefined" && window.localStorage) {
    return localStorage.getItem(key);
  }
};

export const clearStorage = () => {
  Cookie.remove("token");
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.clear();
  }
};
