import { lazy } from "react";

const Main = lazy(() => import("./Main"));
const Login = lazy(() => import("./Login"));

export { Main, Login };
