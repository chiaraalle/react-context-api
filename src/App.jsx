import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalPostProvider, useGlobalPostContext } from "./assets/context/GlobalPostContext"; // Importa il PostProvider
import Home from "./assets/Pages/Home";
import AboutUs from "./assets/Pages/AboutUs"; 
import Posts from "./assets/Pages/Posts";
import SinglePost from "./assets/Pages/SinglePost";
import DefaultLayout from "./assets/Layout/DefaultLayout";

function App() {
  

  return (
    <>
    <>
      <GlobalPostProvider>  
        <Routes> 
          <Route element={<DefaultLayout />}> 
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<SinglePost />} />
          </Route>  
        </Routes>
        </GlobalPostProvider>
      
    </>

      
    </>
  )
}

export default App
