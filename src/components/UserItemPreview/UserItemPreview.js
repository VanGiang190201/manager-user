import classNames from 'classnames/bind';

import styles from './UserItemPreview.module.scss';
import Images from '~/components/Images';

const cx = classNames.bind(styles);
function UserItemPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('avatar')}>
                <Images
                    className={cx('avatar-image')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f75993e97bd5424690cb3c702fc88b0d~c5_100x100.jpeg?x-expires=1661443200&x-signature=bqtJOzItwZqttmPCAcfusl7IxCM%3D"
                    alt=""
                />
            </div>
            <div className={cx('information')}>
                <p className={cx('name')}>Ngô Văn Giang</p>
                <p className={cx('department')}>Development IT</p>
            </div>
        </div>
    );
}

export default UserItemPreview;
