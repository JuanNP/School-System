import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { Home } from "../components/pages/home";
import { Login } from "../components/pages/login";
import ProfilePage from "../components/pages/perfil";
import EnrollmentsPage from "../components/pages/inscripciones";
import CoursesPage from "../components/pages/cursos";
import GradesPage from "../components/pages/calificaciones";
import CalendarPage from "../components/pages/calendario";

export const Router = createBrowserRouter([
    {
        path:"/",
        element: <Layout />,
        children: [
            { path: "", element: <Home /> },
            { path: "perfil", element: <ProfilePage /> },
            { path: "inscripciones", element: <EnrollmentsPage />},
            { path: "cursos", element: <CoursesPage />},
            { path: "calificaciones", element: <GradesPage />},
            { path: "calendario", element: <CalendarPage />}
        ]
    },
    {
        path: "*",
        element: <Login />
    }
]);
