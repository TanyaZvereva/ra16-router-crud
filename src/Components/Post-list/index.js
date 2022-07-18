import { useJsonFetch } from "../../useJSONFetch"
import { useNavigate } from "react-router-dom"
const PostList = () => {
    const [newList, isLoading] = useJsonFetch('http://localhost:6666/posts')
    const navigate = useNavigate()
    return <section>
        {isLoading && <div>Данные загружаются</div>}
    {newList && newList.map(post => <div onClick={() => navigate('/edit')}>
        <h2>{post.content}</h2>
    </div>)}
    </section>
}

export default PostList