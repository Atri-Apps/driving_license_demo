import create from "zustand";

const useIoStore = create((set) => {
  return {
  "Home": {},
  "viewtest": {},
  "newtest": {
    "Upload1": {
      "io": {
        "files": {
          "type": "files",
          "mode": "upload"
        }
      }
    }
  },
  "newtestresult": {},
  "login": {}
}});

export default useIoStore;
