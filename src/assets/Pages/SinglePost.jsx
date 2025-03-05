import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; /* useParams è un hook che ci permette di accedere ai parametri passati nell'URL */

function SinglePost() {
    const [post, setPost] = useState({});
    const { id } = useParams(); /* id è il parametro che passiamo nell'URL */
    const url = import.meta.env.VITE_ENDPOINT_URL 


    useEffect(() => {
        fetch(`${url}/${id}`)
            .then((response) => response.json())
            .then((data) => setPost(data));
    }, [id]);
  return (
    <>
      <h1>Singolo Post: {id}/ {post.title}</h1>
    </>
  );
}

export default SinglePost;