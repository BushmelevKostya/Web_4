import React, { useState, createContext } from "react";

export const DotsFormContext = React.createContext(null);

export const CoordinatesProvider = ({ children }) => {
    const [getCoordinates, setCoordinates] = useState({
        x: -2,
        y: "-2",
        r: 1,
    });

    const [getDots, setDots] = useState([]);

    const updateX = (newX) => {
        setCoordinates((prevCoordinates) => ({
            ...prevCoordinates,
            x: newX,
        }));
    };

    const updateY = (newY) => {
        setCoordinates((prevCoordinates) => ({
            ...prevCoordinates,
            x: newY,
        }));
    };

    const updateR = (newR) => {
        setCoordinates((prevCoordinates) => ({
            ...prevCoordinates,
            x: newR,
        }));
    };

    const addDot = (dot) => {
        setDots((prevState) => [...prevState, dot]);
    }

    const store = {
        getX: getCoordinates.x,
        getY: getCoordinates.y,
        getR: getCoordinates.r,
        getDots: getDots,
        setDots: setDots,
        setX: updateX,
        setY: updateY,
        setR: updateR,
        addDot: addDot,
    };

    return (
        <DotsFormContext.Provider value={store}>
            {children}
        </DotsFormContext.Provider>
    );
};