import React, { lazy, Suspense , useEffect , useState} from "react";
import ReactDOM  from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import RestaurantMenu from "./src/components/RestaurantMenu";
import userInfo from "./src/utils/userInfo";

// Chunking
// Code Splitting
// Dynamic Bundling
// lazy Loading
// on demand loading
// dynamix imoprt

const About = lazy(() => import("./src/components/About")); // lazy loading 


const AppLayout = () =>{

    const[userName,setuserName] = useState();

    useEffect(() => {

        //Authentication api called
    
        const userdata = {
            name : "Vivek"
        };
        
        setuserName(userdata.name);
    
    },[])

    return(
    <userInfo.Provider value={{loggedUser : userName , setuserName}}>
        <div>    
            <Header/>
            <Outlet/>
        </div>
    </userInfo.Provider>    
)
}

const router = createBrowserRouter([
    {
     path:"/",
     element:<AppLayout />,
     children:[
        {
            path: "/",
            element: <Body />,
        },
        {
        path:"/about",
        element:<Suspense fallback = {<h1>Loading....</h1>}><About/></Suspense>
        },
        {
        path: "/contact",
        element: <Contact />,
        },
        {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
        },
     ],
     errorElement:<Error />,
    },
]);

const rootElement = document.getElementById('root');

// Create a root using ReactDOM.createRoot and render the Heading component
const root = ReactDOM.createRoot(rootElement);

root.render(<RouterProvider router={router}/>);

