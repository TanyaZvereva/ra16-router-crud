import { useJsonFetch } from "../../useJSONFetch"
import { useNavigate, NavLink } from "react-router-dom"
const PostList = () => {
    const [newList, isLoading] = useJsonFetch('http://localhost:' + process.env.REACT_APP_PORT + '/posts')
    const navigate = useNavigate()
    console.log(newList)
    return <section>
        <NavLink to="/posts/new">Create post</NavLink>
        {isLoading && <div>Данные загружаются</div>}
        {newList && newList.map(post => {
            return <div key={post.id} onClick={() => navigate('/edit/'+ post.id)}>
                <h2>{post.content}</h2>
            </div>
        })}
    </section>
}

export default PostList