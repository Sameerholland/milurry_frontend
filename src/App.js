import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signup from "./Features/Authentication/Components/Signup";
import Login from "./Features/Authentication/Components/Login";
import Forget_Password from "./Features/Authentication/Components/Forget_Password";
import { AuthUserContextProvider } from "./Context/AuthContext/AuthUserContext";
import Welcome from "./Features/Authentication/Components/Welcome";
import Home from "./Main-Pages/Home";
import Reset_Password from "./Features/Authentication/Components/Reset_Password";


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:(<Home></Home>)
    },
    {
      path:'/signup',
      element:(<Signup></Signup>)
    },
    {
      path:'/login',
      element:(<Login></Login>)
    },
    {
      path:"/forget-password",
      element:(<Forget_Password></Forget_Password>)
    },
    {
      path:"/reset-password",
      element:(<Reset_Password></Reset_Password>)
    },
    {
      path:"/splash",
      element:(<Welcome></Welcome>)
    }
  ])
  return (
    <div>
      <AuthUserContextProvider>
      <RouterProvider router={router}/>
      </AuthUserContextProvider>
    </div>
  );
}

export default App;
