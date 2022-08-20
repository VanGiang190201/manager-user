import classNames from 'classnames/bind';

import styles from './Image.module.scss';

function Image({ className, src, alt, ...props }) {
    return <img src={src} className={classNames(styles.wrapper, className)} alt={alt} {...props} />;
}

export default Image;
