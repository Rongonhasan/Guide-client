import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blogs from "../page/Blogs";
import Login from "../page/Login";
import Card from "../page/Card";
import Errorpage from "../page/Errorpage";
import Home from "../page/Home";
import Service from "../page/Service";
import AddService from "../page/AddService";
import Register from "../page/Register";
import MyReviewAdmin from "../page/MyReviewAdmin";
import PrivateRoute from "./PrivateRoute";


const Routs =  createBrowserRouter([
    { path:'/',
   element: <Main></Main>,
   errorElement: <Errorpage></Errorpage>,
  children:[
{
    path:'/',
    element: <Home></Home>,
    loader:()=>fetch('https://guide-server.vercel.app')

   
},
{
    path:'/blogs',
    element: <Blogs></Blogs>
},
{
    path:'/login',
    element: <Login></Login>
},
{
path:'/register',
element: <Register></Register>
},
{
    path:'/services',
    element: <Service></Service>,
    loader:()=> fetch('https://guide-server.vercel.app/services')
},
{
    path:'/services/:id',
    element: <PrivateRoute><Card></Card></PrivateRoute>,
    loader:({params})=> fetch(`https://guide-server.vercel.app/services/${params.id}`)
},
{ path: '/addservices', 
element: <AddService></AddService>
},
{ 
    path: '/myreview',
 element:  <MyReviewAdmin></MyReviewAdmin>
}

 ]}
])
   

export default Routs;