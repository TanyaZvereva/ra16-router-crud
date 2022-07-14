import { useState } from "react";
import './style.css'
import { useFetch } from "../../useJSONFetch";
import { useNavigate } from "react-router-dom";

const PostCreate = () => {
    const [content, setContent] = useState('')
    const navigate = useNavigate()
    const [sendNewPublish] = useFetch()
    const handlePublish = (value)=>{
        sendNewPublish('http://localhost:7777/posts', {method: 'POST', body: {content:value}}, ()=>navigate('/'))
    }
    return <section className="create">
        <header>
            <span>X</span>
        </header>
        <div><textarea onChange={(e)=>setContent(e.target.value)}></textarea></div>
        <footer>
            <button onClick={()=>handlePublish(content)}>Опубликовать</button>
        </footer>
    </section>
}

export default PostCreate