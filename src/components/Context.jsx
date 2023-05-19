import React, { createContext, useState } from 'react'
const Context  = createContext();


const ContextProvider = (props) => {
    const [theme, setTheme] = useState(false)
    const handleChangeTheme = () => {
        setTheme((prev) => {
            return prev ? false : true
        })
    }
    console.log(theme)
  return (
    <>
    <Context.Provider value={{
        handleChangeTheme,
        theme: theme,
        }}>
        {props.children}
    </Context.Provider>
      
    </>
  )
}

export {ContextProvider, Context}
