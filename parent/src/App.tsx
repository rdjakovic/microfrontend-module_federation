import React, {Suspense} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Error from "./pages/Error";
import Main from "./layouts/Main";

// import App1 from "app1/App1";
const App1 = React.lazy(() => import("app1/App1"));
const App2 = React.lazy(() => import("app2/App2"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <h2 className="text-xl font-bold p-4">Main page (Home)</h2>,
        errorElement: <Error/>,
      },
      {
        path: "app1",
        element:
          <Suspense fallback={<p>Loading app1...</p>}>
            <App1/>
          </Suspense>,
        errorElement: <Error/>,
      },
      {
        path: "app2",
        element: (
          <Suspense fallback={<p>Loading app2...</p>}>
            <App2/>
          </Suspense>
        ),
        errorElement: <Error/>,
      },
    ],
  },
]);

function App() {
  return (
    <div className="p-4 border border-green-600">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
