import { Route, Routes } from "react-router-dom";
import { Home, PostsPage } from "../pages";

export const AppRouter = () => {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/posts" element={<PostsPage />} />
         {/* <Route path="posts" element={<Posts />}>
               <Route path=":post-slug" element={<PostInfo />} />
             
            </Route> */}
      </Routes>
   );
};
