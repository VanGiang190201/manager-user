import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import styles from './Popup.module.scss';

const cx = classNames.bind(styles);
const Popup = forwardRef(({ className, children, ...props }, ref) => {
    const classes = cx('wrapper', {
        [className]: className,
    });
    return (
        <div className={classes} ref={ref} {...props}>
            {children}
        </div>
    );
});

Popup.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    props: PropTypes.node,
};
export default Popup;
