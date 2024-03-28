import "./styles/global.scss";

//components
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/menu";
import Footer from "./components/footer/Footer";
//pages
import Home from "./pages/home/Home";
import Login from "../src/pages/login/Login";
//Icons

//React-Router
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Orders from "./pages/orders/Orders";
import Items from "./pages/items/Items";


const queryClient = new QueryClient();
function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar/>
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          </div>
        </div>
        <Footer/>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/orders/:id",
          element: <Items />,
        },
      ],
      
    },
    {
      path: "/login",
      element: <Login/>,
    },
  ]);
  return <RouterProvider router={router} />;
} 

export default App;
