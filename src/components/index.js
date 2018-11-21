import { lazy } from "react";

import Header from "./Header";
import DeviceAdd from "./Device/DeviceAdd";
import DeviceEdit from "./Device/DeviceEdit";
import Chart from "./Chart";

const Device = lazy(() => import("./Device"));
const Login = lazy(() => import("./Login"));
const Register = lazy(() => import("./Register"));

export { Device, Login, Register, Header, DeviceAdd, DeviceEdit, Chart };
