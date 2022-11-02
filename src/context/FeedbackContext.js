import {createContext,useState,useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'
const FeedbackContext = createContext()// Creates a context object

export const FeedbackProvider = ({children})=>{

    const [feedback,setFeedback] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit:false
    })

    useEffect(()=>{
        fetchFeedback()
    },[])

    const fetchFeedback = async () =>{
        const response = await fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`)

        const data = await response.json()

        setFeedback(data);
        setIsLoading(false);
    }

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

    const updateFeedback = (id, updItem)=>{
        setFeedback(feedback.map((item)=>item.id === id ? { ...item, ...updItem} : item))
    }

        return ( <FeedbackContext.Provider value={{
                feedback,
                feedbackEdit,
                isLoading,
                deleteFeedback,
                addFeedback,
                editFeedback,
                updateFeedback
        }}>{/* ContextObject.provider value={}*/}
            {children}
        </FeedbackContext.Provider>
)}

export default FeedbackContext