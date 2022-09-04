import HumanManger from '~/pages/HumanManager';
import DepartmentManger from '~/pages/DepartmentManager';
import Profile from '~/pages/Profile';
import config from '~/config';
const publicRoutes = [
    {
        path: config.routes.humanManager,
        component: HumanManger,
    },
    {
        path: config.routes.departmentManager,
        component: DepartmentManger,
    },
    {
        path: config.routes.profile,
        component: Profile,
    },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
