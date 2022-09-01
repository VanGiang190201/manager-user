import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';

import styles from './Search.module.scss';
import { SearchIcon } from '~/components/Icons';
import UserItemPreview from '~/components/UserItemPreview';
import { Wrapper as WrapperPopper } from '~/components/Popper';
const cx = classNames.bind(styles);
function Search() {
    return (
        <HeadlessTippy
            interactive={true}
            placement="bottom-end"
            offset={[20, 0]}
            render={(attrs) => (
                <WrapperPopper>
                    <div className={cx('result-search')} tabIndex="-1" {...attrs}>
                        <h5 className={cx('result-title')}>User Account</h5>
                        <UserItemPreview />
                        <UserItemPreview />
                        <UserItemPreview />
                    </div>
                </WrapperPopper>
            )}
        >
            <div className={cx('search')}>
                <button className={cx('search-btn')}>
                    <SearchIcon className="search-icon" />
                </button>
                <input spellCheck={false} />
            </div>
        </HeadlessTippy>
    );
}

export default Search;
