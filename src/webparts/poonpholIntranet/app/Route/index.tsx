import * as React from "react";
import { useRoutes } from "react-router-dom";
import { Webpage } from "./Routes";

interface IRouteProps {
    context: any;
}

const Homepage = React.lazy(() => import("../Page/Home_Page"));

const Routes: React.FC<IRouteProps> = ({ context }) => {
    let element = [
        {
            path: Webpage.Home_page,
            element: <Homepage />
        },
    ];
    return useRoutes(element);
};

export default Routes;