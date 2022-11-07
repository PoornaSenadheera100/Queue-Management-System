import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";

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
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
