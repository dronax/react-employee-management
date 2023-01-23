import { legacy_createStore as createStore} from "redux";
import empReducer from "./Reducer";
const store=createStore(empReducer)
export default store;