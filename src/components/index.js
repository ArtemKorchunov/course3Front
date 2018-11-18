import { lazy } from "react";

import Header from "./Header";

const Device = lazy(() => import("./Device"));
const Login = lazy(() => import("./Login"));
const Register = lazy(() => import("./Register"));

export { Device, Login, Register, Header };
