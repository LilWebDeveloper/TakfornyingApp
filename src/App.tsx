import { RouterProvider, createBrowserRouter } from "react-router-dom";

import './App.css';
import RootLoyout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLoyout />,
    children: [

    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
