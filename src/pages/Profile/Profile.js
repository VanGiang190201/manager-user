import classNames from 'classnames';

import styles from './Profile.module.scss';
import ProfileUserItem from '~/components/ProfileUserItem';
function Profile() {
    const url = window.location.href;
    const index = url.indexOf('=') + 1;
    const id = Number(url.slice(index));
    return (
        <div className={classNames(styles.wrapper)}>
            <ProfileUserItem id={id} />
        </div>
    );
}

export default Profile;
