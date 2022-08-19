import HumanManger from '~/pages/HumanManager';
import DepartmentManger from '~/pages/DepartmentManager';
const publicRoutes = [
    {
        path: '/',
        component: HumanManger,
    },
    {
        path: '/department',
        component: DepartmentManger,
    },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
