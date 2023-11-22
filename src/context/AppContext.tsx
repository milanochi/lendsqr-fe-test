import React, { useContext, createContext, useState, useEffect } from 'react'

const AppContext = createContext({} as any)

export function useAppContext() {
    return useContext(AppContext)
}

export function AppContextProvider({ children }: any) {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const subLink = '/subscriptions'

    useEffect(() => {
        const storedValue = localStorage.getItem('firstName');
        if (storedValue) {
            setFirstName(storedValue);
        }
    }, [])

    useEffect(() => {
        const storedValue = localStorage.getItem('lastName');
        if (storedValue) {
            setLastName(storedValue);
        }
    }, [])

    return (
        <AppContext.Provider value={{
            subLink,
            firstName,
            lastName,
            setFirstName,
            setLastName,
        }}>
            {
                children
            }
        </AppContext.Provider>
    )
}


