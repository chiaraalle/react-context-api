import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import { useGlobalPostContext } from "../context/GlobalPostContext";

function Posts() {
    //const [posts, setPosts] = useState([]);
    //const url = import.meta.env.VITE_ENDPOINT_URL /*il file .env permette di definire variabili che vengono poi usate nell'applicazione e mi permette di modificarli senza dover cambiare il codice */


    useEffect(() => {
        /*fetch( url )
            .then((response) => response.json())
            .then((data) => setPosts(data));*/

    }, []);


    return (
        <>
            <h1>Posts</h1>
            <div className="container-posts">
                <div className="cards-post">
                    {posts.map((post) => (
                        <div key={post.id} className="card">
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">{post.content}</p>

                                <Link to={`/posts/${post.id}`}>
                                    <button className="btn-post">vai al post</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
            
        </>
    )
}

export default Posts