import styles from './Search.module.css'

//hooks
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useQuery } from '../../hooks/UseQuery'
import { Link } from 'react-router-dom'
//components
import PostDetail from '../../components/PostDetail'


const Search = () => {

    const query = useQuery()
    const search = query.get("q").toLowerCase()

    const {documents: posts} = useFetchDocuments("posts", search)

  return (
    <div className={styles.search_container}>
      <h1>Search: {search}</h1>
      <div>
        {posts && posts.length === 0 && (
            <div className='styles.noposts'>
                <p>Não foram encontrados posts a partir da sua busca...</p>
                <Link className='btn btn-dark' to="/">Voltar</Link>
            </div>
        )}
        {posts && posts.map((post) => (
            <PostDetail key={post.id} post={post}/>
        ))}
      </div>
    </div>
  )
}

export default Search
