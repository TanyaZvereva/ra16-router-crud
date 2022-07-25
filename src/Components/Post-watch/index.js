import {useFetch, useJsonFetch} from "../../useJSONFetch";
import {useParams, useNavigate} from 'react-router-dom'
import {useState, useEffect} from "react";
import '../Post-create/style.css'

const PostWatch = () => {
    const [newList, isLoading] = useJsonFetch('http://localhost:' + process.env.REACT_APP_PORT + '/posts')
    const [content, setContent] = useState('')
    const [sendNewPublish] = useFetch()
    const navigate = useNavigate()
    const {id} = useParams()
    useEffect(()=>{
        newList && newList.length && setContent(newList[id -1].content)
    },[newList && newList.length, id])

    const handleEditPost = (value, id) => () => {
        const data = {content: value, id: id}
        sendNewPublish('http://localhost:'+ process.env.REACT_APP_PORT +'/posts', {method: 'POST', body: JSON.stringify(data)}, ()=>navigate('/'))
    }

    const handleRemovePost = (id) => () => {
        sendNewPublish('http://localhost:'+ process.env.REACT_APP_PORT +'/posts/'+ id, {method: 'DELETE'}, ()=>navigate('/'))
    }

    return <div className="create">
        <input onChange={e => setContent(e.target.value)} defaultValue={newList && newList.length && newList[id - 1].content}/>
        <button onClick={handleEditPost(content, id)}>Опубликовать</button>
        <button className='remove-btn' onClick={handleRemovePost(id)}>Удалить</button>
    </div>
}

export default PostWatch