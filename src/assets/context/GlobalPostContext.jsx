import { createContext, useState, useContext } from "react";

//creo il context
const GlobalPostContext = createContext();

//creo il provider
export const GlobalPostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});
  const { id } = useParams();

  const url = import.meta.env.VITE_ENDPOINT_URL;

  // Funzione per caricare i posts
  const fetchPosts = () => {
    fetch( url )
        .then((response) => response.json())
        .then((data) => setPosts(data));
  }
  /* Caricamento dei post
  useEffect(() => {
      fetch(url)
          .then((response) => response.json())
          .then((data) => setPosts(data));
  }, [url]);*/

  // Funzione per caricare un singolo post
  const fetchSinglePost = (id) => {
    fetch(`${url}/${id}`)
        .then((response) => response.json())
        .then((data) => setPost(data));
  };

  const value = { posts, post, fetchPosts, fetchSinglePost };



return (
    <GlobalPostContext.Provider value={ value }>
        {children}
    </GlobalPostContext.Provider>
);
}

export const useGlobalPostContext = () => {
  return useContext(GlobalPostContext);
};




