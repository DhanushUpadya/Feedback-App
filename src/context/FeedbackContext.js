import {createContext,useState} from 'react'
import {v4 as uuidv4} from 'uuid'
const FeedbackContext = createContext()// Creates a context object

export const FeedbackProvider = ({children})=>{

    const [feedback,setFeedback] = useState([
        {
            id:1,
            text:"This item is from Context",
            rating:10
        }
    ])

    const addFeedback = (newFeedback)=>{
        newFeedback.id =uuidv4()
        setFeedback([newFeedback,...feedback]);
    }
    

    const deleteFeedback = (id) =>{
        if(window.confirm('Are you sure want to delete?')){
            setFeedback(feedback.filter((item)=>item.id!==id))
        }
 

    }

        return ( <FeedbackContext.Provider value={{
                feedback,
                deleteFeedback,
                addFeedback
        }}>{/* ContextObject.provider value={}*/}
            {children}
        </FeedbackContext.Provider>
)}

export default FeedbackContext