import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Menu from "./components/Menu";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      errorElement: <Login/>,
      children: [
        {
          path: "login",
          element: <Login />
        },
        {
          path: ":token/menu",
          element: <Menu/>
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
