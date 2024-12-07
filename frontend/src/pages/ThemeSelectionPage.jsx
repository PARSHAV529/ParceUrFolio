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

  return (
    <div className={`p-6 ${themes[selectedTheme].backgroundColor} min-h-screen`}>
      <h1 className={`text-3xl font-bold text-center mb-6 ${themes[selectedTheme].textColor}`}>
        Select a Theme
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(themes).map(([key, theme]) => (
          <div
            key={key}
            className={`p-4 rounded-lg border-2 cursor-pointer ${
              selectedTheme === key ? 'border-blue-600' : 'border-gray-300'
            }`}
            onClick={() => handleThemeSelect(key)}
          >
            <h2 className={`text-lg font-semibold mb-2 ${theme.textColor}`}>{key}</h2>
            <div className="flex space-x-2">
              {/* Using primaryGradient as a visual representation */}
              <div
                className="w-16 h-8 rounded-lg"
                style={{
                  background: `linear-gradient(to right, var(--tw-gradient-stops))`,
                  '--tw-gradient-from': theme.primaryGradient.split(' ')[0],
                  '--tw-gradient-to': theme.primaryGradient.split(' ')[1],
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
