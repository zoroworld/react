import { createContext, useContext, useState } from "react"

const  ThemeContext = createContext()

// eslint-disable-next-line react/prop-types, react-refresh/only-export-components
function ThemeProvider({children}){
    
    const[theme, setTheme] = useState("light")

    function toggleTheme(){
        setTheme((prev) => (prev === "light" ? "dark" : "light"))
    }
    return( 

    <ThemeContext.Provider value={{theme, toggleTheme }}>
       {children}
    </ThemeContext.Provider>

    )
}

function useTheme() {
    return useContext(ThemeContext)
}

export default ThemeProvider;
export { useTheme };