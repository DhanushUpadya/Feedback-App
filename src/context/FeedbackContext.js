import {createContext,useState} from 'react'

const FeedbackContext = createContext()// Creates a context object

export const FeedbackProvider = ({children})=>{

    const [feedback,setFeedback] = useState([
        {
            id:1,
            text:"This item is from Context",
            rating:10
        }
    ])

        return ( <FeedbackContext.Provider value={{
                feedback
        }}>{/* ContextObject.provider value={}*/}
            {children}
        </FeedbackContext.Provider>
)}

export default FeedbackContext