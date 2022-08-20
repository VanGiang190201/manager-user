import classNames from 'classnames/bind';

import styles from './Search.module.scss';
import { SearchIcon } from '~/components/Icons';
const cx = classNames.bind(styles);
function Search() {
    return (
        <div className={cx('search')}>
            <button className={cx('search-btn')}>
                <SearchIcon className="search-icon" />
            </button>
            <input spellCheck={false} />
        </div>
    );
}

export default Search;
