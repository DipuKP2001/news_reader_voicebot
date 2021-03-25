import React,{useEffect} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'

const App = () => {
    useEffect(() => {
        alanBtn({
            key: process.env.REACT_APP_ALAN_API_KEY,
            onCommand: ({ command }) => {
                if( command === 'test' ) {
                    alert('Test was executed')
                }
            }
        })
    },[])

    return(
        <div>
            <h1>This is Alan AI</h1>
        </div>
    )
}

export default App