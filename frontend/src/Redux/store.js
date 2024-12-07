import { configureStore } from '@reduxjs/toolkit';
import formDataReducer from './formDataSlice';
import themeReducer from "./themeSlice";


const store = configureStore({
  reducer: {
    formData: formDataReducer,
    theme: themeReducer,
  },
});

export default store;
