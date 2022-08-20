import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Buttons.module.scss';

const cx = classNames.bind(styles);
function Buttons({
    children,
    href,
    to,
    primary = false,
    outline = false,
    disabled = false,
    large = false,
    small = false,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        large,
        small,
        disabled,
    });
    return (
        <Comp className={classes} {...props}>
            {children}
        </Comp>
    );
}

Buttons.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string,
    to: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    disabled: PropTypes.bool,
    large: PropTypes.bool,
    small: PropTypes.bool,
    onClick: PropTypes.func,
};
export default Buttons;
