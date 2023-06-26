import {createContext} from 'react'

const contextApp = createContext({})

const AppProvider = ({children}) => {
    
    return (
        <contextApp.Provider>
            {children}
        </contextApp.Provider>
    )
}

export {contextApp, AppProvider}