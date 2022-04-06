import defaultLayout from "../layouts/defaultLayout";
import Home from "../pages/Home";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: "/",
    exact: true,
    component: () => <Home title="home" />,
    layout: defaultLayout,
  },
];
