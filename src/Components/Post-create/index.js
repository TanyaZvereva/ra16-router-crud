import { useState } from "react";
import './style.css'
import { useFetch } from "../../useJSONFetch";
import { useNavigate } from "react-router-dom";

const PostCreate = () => {
    const [content, setContent] = useState('')
    const navigate = useNavigate()
    const [sendNewPublish] = useFetch()
    const handlePublish = (value)=>{
        sendNewPublish('http://localhost:'+ process.env.REACT_APP_PORT +'/posts', {method: 'POST', body: JSON.stringify({content:value, id: 0})}, ()=>navigate('/'))
    }
    return <section className="create">
        <header>
            <span onClick={()=> navigate('/')}>X</span>
        </header>
        <div><textarea onChange={(e)=>setContent(e.target.value)}></textarea></div>
        <footer>
            <button onClick={()=>handlePublish(content)}>Опубликовать</button>
        </footer>
    </section>
}

export default PostCreate