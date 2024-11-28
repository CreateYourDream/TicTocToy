import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const defaultState = {
    cash: 0.4
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case value:

            break;
    
        default:
            return state;
    }
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
