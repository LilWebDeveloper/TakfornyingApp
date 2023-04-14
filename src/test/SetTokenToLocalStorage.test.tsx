interface storeType {
  token?: string;
}

const localStorageMock = (function () {
  let store: any = {};

  return {
    getItem(key: string) {
      return store[key];
    },

    setItem(key: string, value: string) {
      store[key] = value;
    },

    clear() {
      store = {};
    },

    removeItem(key: string) {
      delete store[key];
    },

    getAll() {
      return store;
    },
  };
})();

Object.defineProperty(window, "localStorage", { value: localStorageMock });

const setLocalStorage = (id: any, data: {data: string}) => {
  window.localStorage.setItem(id, JSON.stringify(data));
};

test("token is added into local storage", () => {
    const mockId = "token";
    const mockJson = { data: "dummyToken" };
    setLocalStorage(mockId, mockJson);
    expect(localStorage.getItem(mockId)).toEqual(JSON.stringify(mockJson));
  });
