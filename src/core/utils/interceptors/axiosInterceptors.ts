import  axios  from 'axios';
//import { store } from '../../../store/store';
import { decreaseRequestCount, increaseRequestCount } from '../../../store/slices/loadingSlice';
import { EnhancedStore } from '@reduxjs/toolkit';

let store:EnhancedStore

export const injectStore = (_store: EnhancedStore) => {
  store = _store
}

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api/"
});

axiosInstance.interceptors.request.use(config => {

  store.dispatch(increaseRequestCount());

  return config;
})


axiosInstance.interceptors.response.use(
  response => {
    store.dispatch(decreaseRequestCount());
    return response
  },
)



export default axiosInstance;