import { useState, useEffect } from 'react'

export const Posts = () => {
    const [posts, setPosts] = useState([])
    const [query, setQuery] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(err => console.log(err))
    }, [])

    const changeHandler = (event) => {
        setQuery(event.target.value)
    }
    const item = (i) => {
        return i.title.includes(query)
    }
    const filtered_posts = posts.filter(item)
    return (
        <>
            <div className="p-5 bg-slate-800">
                <label className="text-white" for="search"> Search: </label>
                <input id="search" type="text" value={query} onChange={changeHandler} />
            </div>
            {
                filtered_posts.map(post => {
                    return (
                        <>
                            <li key={post.id}>{post.title}</li>
                        </>
                    )
               })
            }
        </>
    )
}