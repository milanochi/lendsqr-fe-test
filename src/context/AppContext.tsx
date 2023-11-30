import React, { useContext, createContext, useState, useEffect } from 'react'

const AppContext = createContext({} as any)

export function useAppContext() {
    return useContext(AppContext)
}

export function AppContextProvider({ children }: any) {

    const [filteredData, setFilteredData] = useState([])

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const [username, setUserName] = useState('')
    const [status, setStatus] = useState('')
    const [date, setDate] = useState('')


    useEffect(() => {
        const storedFirstName = localStorage.getItem('firstName');
        const storedLastName = localStorage.getItem('lastName');
        if (storedFirstName) setFirstName(storedFirstName);
        if (storedLastName) setLastName(storedLastName);
    }, [])

    // console.log({
    //     firstName,
    //     lastName,
    //     username,
    //     status,
    //     date,
    //     filteredData,
    // })
    return (
        <AppContext.Provider value={{
            firstName,
            lastName,
            username,
            status,
            date,
            filteredData,
            setFilteredData,
            setFirstName,
            setLastName,
            setUserName,
            setStatus,
            setDate
        }}>
            {
                children
            }
        </AppContext.Provider>
    )
}


