import React, { useState } from 'react'
import DeveloperContext from './DeveloperContext'

const DeveloperState = (props) => {
    const host = "http://localhost:5000";

    const initialstate = []
    const [developer, setDeveloper] = useState(initialstate)

    const getDeveloper = async () => {
        const response = await fetch(`${host}/api/dev/FetchAlldeveloper`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        const json = await response.json();
        console.log(json)
        setDeveloper(json)
    }

    return (
        <DeveloperContext.Provider value={{developer, getDeveloper }}>
            {props.children}
        </DeveloperContext.Provider>
    )
}

export default DeveloperState