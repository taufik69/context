import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState('dark')

    useEffect(() => {
        const html = document.documentElement;
        html.classList.remove('light', 'dark');
        html.classList.add(mode);
    }, [mode]);
    return (
        <ThemeContext.Provider value={{ mode, setMode }}>
            {children}
        </ThemeContext.Provider>
    )
}