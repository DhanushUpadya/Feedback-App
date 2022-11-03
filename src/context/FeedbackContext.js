import {createContext,useState,useEffect} from 'react'

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
        const response = await fetch(`/feedback?_sort=id&_order=desc`)

        const data = await response.json()

        setFeedback(data);
        setIsLoading(false);
    }

    const addFeedback = async (newFeedback)=>{
        const response = await fetch('/feedback',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(newFeedback)
        })

        const data = await response.json()
        setFeedback([data,...feedback]);
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