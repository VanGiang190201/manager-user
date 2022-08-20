import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';

import styles from './Sidebar.module.scss';
import config from '~/config';
import { UserGroupIcon, UserGroupActiveIcon, HomeIcon, HomeActiveIcon } from '~/components/Icons';

const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    to={config.routes.humanManager}
                    title="Human Manager"
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem
                    to={config.routes.departmentManager}
                    title="Department Manager"
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                />
            </Menu>
        </aside>
    );
}

export default Sidebar;
