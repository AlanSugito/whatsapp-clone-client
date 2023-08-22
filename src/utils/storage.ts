class Storage {
  setToStorage(key: string, data: unknown) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getItem(key: string) {
    return JSON.parse(localStorage.getItem(key) as string);
  }
}

const storage = new Storage();

export default storage;
