import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import styles from './DepartmentItems.module.scss';
import Images from '~/components/Images';

const cx = classNames.bind(styles);
function DepartmentItems() {
    const [renderDepartments, setRenderDepartments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/department')
            .then((response) => response.json())
            .then((data) => setRenderDepartments(data))
            .catch((error) => console.log(error));
    }, []);
    return (
        <div className={cx('wrapper')}>
            {renderDepartments.map((department) => {
                return (
                    <div className={cx('department-item')} key={department.id}>
                        <div className={cx('department-name')}>{department.department_name}</div>
                        <div className={cx('department-thunk')}>
                            <Images src="./images/dev_department.jpg" alt="dev_department" className={cx('image')} />
                        </div>

                        <div className={cx('quantity-employee')}>
                            <p className={cx('quantity')}>{department.quantity}</p>
                            <span></span>
                            <p className={cx('description')}>Employees Of Department</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default DepartmentItems;
