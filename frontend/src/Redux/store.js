import { configureStore } from '@reduxjs/toolkit';
import formDataReducer from './formDataSlice';
import themeReducer from "./ThemeSlice";
import templateReducer from "./templateSlice";


const store = configureStore({
  reducer: {
    formData: formDataReducer,
    theme: themeReducer,
    template:templateReducer
  },
});

export default store;
