import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App.tsx";
import AboutScreen from "./components/About/AboutScreen.tsx";
import ProjectsScreen from "./components/Projects/ProjectsScreen.tsx";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
        },
        {
            path: "/home",
            element: <App />,
        },
        {
            path: "/about",
            element: <AboutScreen />,
        },
        {
            path: "/projects",
            element: <ProjectsScreen />,
        },
    ],
    {
        basename: "/xb",
    }
);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
