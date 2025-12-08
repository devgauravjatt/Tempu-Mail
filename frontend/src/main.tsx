import "@/index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { getAllMails, getOrCreateMailAccount } from "./services/mail";
import { lazy, Suspense } from "react";

const Layout = lazy(() => import("./layout/index"));
const App = lazy(() => import("./App"));
const Inbox = lazy(() => import("./inbox"));
const ErrorPage = lazy(() => import("./ErrorPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading page...</div>}>
        <Layout />
      </Suspense>
    ),
    loader: async () => {
      console.log("%c Layout Loader called", "color: red; font-size: 20px;");
      const data = await getOrCreateMailAccount();
      return data;
    },
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading page...</div>}>
            <App />
          </Suspense>
        ),
      },
      {
        path: "/inbox",
        element: (
          <Suspense fallback={<div>Loading page...</div>}>
            <Inbox />
          </Suspense>
        ),
        loader: async () => {
          console.log("Mails Loader called");
          const mails = await getAllMails();
          return mails;
        },
      },
      {
        path: "*", // Catch-all route for 404
        element: <ErrorPage />,
      },
    ],
  },
]);

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
