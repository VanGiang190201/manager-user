import HumanManger from '~/pages/HumanManager';
import DepartmentManger from '~/pages/DepartmentManager';
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
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
