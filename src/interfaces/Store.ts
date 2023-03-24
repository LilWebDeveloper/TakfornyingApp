import { WebStorage } from "redux-persist";

export default interface StoreType {
    key: string,
    storage: WebStorage
}