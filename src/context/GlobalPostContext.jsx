import { createContext, useState, useContext } from "react";

//creo il context
const GlobalPostContext = createContext();

//creo il provider
export const GlobalPostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const [singlePost, setSinglePost] = useState({});
  const url = import.meta.env.VITE_ENDPOINT_URL;

  // Caricamento dei post
  useEffect(() => {
      fetch(url)
          .then((response) => response.json())
          .then((data) => setPosts(data));
  }, [url]);

  // Funzione per caricare un singolo post
  const fetchSinglePost = (id) => {
    fetch(`${url}/${id}`)
        .then((response) => response.json())
        .then((data) => setSinglePost(data));
};

return (
    
);
}



