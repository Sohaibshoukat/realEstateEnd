import React, { useState } from 'react'
import VillaContext from './TownVillaContext'

const TownVillaState = (props) => {
    const host = "http://localhost:5000";

    const initialstate = []
    const [villa, setVilla] = useState(initialstate)

    const getVillas = async () => {
        const response = await fetch(`${host}/api/villa/FetchAllVilla`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        const json = await response.json();
        console.log(json)
        setVilla(json)
    }

    return (
        <VillaContext.Provider value={{villa, getVillas }}>
            {props.children}
        </VillaContext.Provider>
    )
}

export default TownVillaState