import {createContext,useState} from 'react'
import {v4 as uuidv4} from 'uuid'
const FeedbackContext = createContext()// Creates a context object

export const FeedbackProvider = ({children})=>{

    const [feedback,setFeedback] = useState([
        {
            id:1,
            text:"This is Feedback item 1",
            rating:10
        },

        {
            id:2,
            text:"This is Feedback item 2",
            rating:9
        },

        {
            id:3,
            text:"This is Feedback item 3",
            rating:8
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit:false
    })

    const addFeedback = (newFeedback)=>{
        newFeedback.id =uuidv4()
        setFeedback([newFeedback,...feedback]);
    }
    

    const deleteFeedback = (id) =>{
        if(window.confirm('Are you sure want to delete?')){
            setFeedback(feedback.filter((item)=>item.id!==id))
        }
    }

    const editFeedback = (item)=>{
        setFeedbackEdit({
            item,
            edit: true
        })
    }

        return ( <FeedbackContext.Provider value={{
                feedback,
                deleteFeedback,
                addFeedback,
                editFeedback,
                feedbackEdit
        }}>{/* ContextObject.provider value={}*/}
            {children}
        </FeedbackContext.Provider>
)}

export default FeedbackContext