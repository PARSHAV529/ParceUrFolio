import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '@/Redux/ThemeSlice';

export default function ThemeSelectionPage() {
  const dispatch = useDispatch();

  // Accessing themes and the selected theme from Redux store
  const { selectedTheme, themes } = useSelector((state) => state.theme);

  const handleThemeSelect = (themeKey) => {
    dispatch(setTheme(themeKey)); // Update the Redux state with the selected theme
  };

  // Dynamically adjust text color based on theme selection
  const getTextColor = (themeKey) => {
    // If the theme is dark, use the theme's textColor; otherwise, use 'text-black'
    return themeKey.toLowerCase().includes('dark') ? 'text-black' : '';
  };

  return (
    <div className={`p-6 ${themes[selectedTheme].backgroundColor} min-h-screen`}>
      <h1
        className={`text-4xl font-semibold text-center mb-8 ${getTextColor(selectedTheme)}`}
      >
        Select a Theme
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Object.entries(themes).map(([key, theme]) => (
          <div
            key={key}
            className={`p-5 rounded-xl border-2 cursor-pointer transition-all transform hover:scale-105 hover:shadow-xl ${
              selectedTheme === key
                ? 'border-blue-600 bg-opacity-80'
                : 'border-gray-300 bg-opacity-60'
            }`}
            onClick={() => handleThemeSelect(key)}
          >
            <h2
              className={`text-xl font-semibold mb-3 ${getTextColor(key)} ${theme.textColor}`}
            >
              {key}
            </h2>
            <div className="flex items-center justify-center space-x-2 mb-4">
              {/* Using primaryGradient as a visual representation */}
              <div
                className="w-16 h-8 rounded-lg"
                style={{
                  background: `linear-gradient(to right, ${theme.primaryGradient.split(' ')[0]}, ${theme.primaryGradient.split(' ')[1]})`,
                }}
              ></div>
            </div>
            <p className={`text-center ${getTextColor(key)}`}>Click to select</p>
          </div>
        ))}
      </div>
    </div>
  );
}
