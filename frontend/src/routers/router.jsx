import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/home";
import CategoryPage from "../pages/category/CategoryPage";
import Search from "../pages/search/Search";
import ShopPage from "../pages/shop/ShopPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path: "/", element: <Home></Home>},
      {path: "/categories/:categoryName" , element: <CategoryPage></CategoryPage>},
      {path: "/search", element: <Search></Search>},
      {path: "/shop", element: <ShopPage></ShopPage>}
              
    ],
  },
]);
export default router;




  {/* <section className='section__container'>
      <div className='w-full mb-12 flex flex-col md:flex-row items-center justify-center gap-4'>
        <input type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for products" />

          <button className='search-button w-full md:w-auto py-2 px-8 bg-primary text-white rounded'
          onClick={handleSearch}
          >Search</button>
      </div>

      
    </section> */}