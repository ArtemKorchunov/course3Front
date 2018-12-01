import { lazy } from "react";

import Header from "./Header";
import DeviceAdd from "./User/Device/DeviceAdd";
import DeviceEdit from "./User/Device/DeviceEdit";
import LiveChart from "./User/LiveChart";
import OtherAnalytics from "./User/OtherAnalytics";

import UserControl from "./Admin/UserControl";

const Device = lazy(() => import("./User/Device"));
const Login = lazy(() => import("./Login"));
const Register = lazy(() => import("./Register"));

export {
  Device,
  Login,
  Register,
  Header,
  DeviceAdd,
  DeviceEdit,
  LiveChart,
  OtherAnalytics,
  UserControl
};
