import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedTheme: 'default', // Default selected theme
    themes: {
      default: { 
        primaryGradient: 'from-blue-500 to-blue-700', 
        textColor: 'text-blue-600', 
        backgroundColor: 'bg-blue-50',
        borderColor: 'border-blue-300',
        btnColor: 'bg-blue-600 text-white'
      },
      dark: { 
        primaryGradient: 'from-gray-800 to-gray-900', 
        textColor: 'text-gray-100', 
        backgroundColor: 'bg-gray-900',
        borderColor: 'border-gray-700',
        btnColor: 'bg-gray-800 text-white'
      },
      vibrant: { 
        primaryGradient: 'from-orange-500 to-pink-500', 
        textColor: 'text-pink-600', 
        backgroundColor: 'bg-orange-50',
        borderColor: 'border-pink-400',
        btnColor: 'bg-pink-600 text-white'
      },
      earthy: { 
        primaryGradient: 'from-gray-500 to-gray-700', 
        textColor: 'text-gray-800', 
        backgroundColor: 'bg-gray-200',
        borderColor: 'border-gray-500',
        btnColor: 'bg-gray-600 text-white'
      },
    },
  };
  

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.selectedTheme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
