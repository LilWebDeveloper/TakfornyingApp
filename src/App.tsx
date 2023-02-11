import { RouterProvider, createBrowserRouter } from "react-router-dom";

import './App.css';
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [

    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
