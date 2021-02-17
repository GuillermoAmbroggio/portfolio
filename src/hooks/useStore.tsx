import { useSelector } from "react-redux";
import { IState } from "../store/store.state";

const useStore: () => IState = () => {
  return useSelector((state: IState) => state);
};
export default useStore;
