import About from "../pages/About";
import Login from "../pages/Login";
import Page404 from "../pages/Page404";
import PostPage from "../pages/PostPage";
import Posts from "../pages/Posts";

export const privateRoutes = [
    {path: '/about', component: About},
    {path: '/posts', component: Posts},
    {path: '/posts/:id', component: PostPage},
    {path: '*', component: Page404},
]

export const publicRoutes = [
    {path: '/login', component: Login},
    {path: '*', component: Page404},
]