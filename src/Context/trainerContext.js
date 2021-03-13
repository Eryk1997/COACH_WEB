
import React from 'react';
const trainerContext = React.createContext({trainer: {
    name: "Eryk-Context",
}}); // Create a context object

export {
    trainerContext // Export it so it can be used by other Components
};