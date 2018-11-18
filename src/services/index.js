export const localStorageApi = {
  getItem(value = "token") {
    return localStorage[value];
  },
  setItem(prop, value) {
    localStorage[prop] = value;
  },
  removeItem(prop) {
    localStorage.removeItem(prop);
  },
  clear() {
    localStorage.clear();
  }
};
