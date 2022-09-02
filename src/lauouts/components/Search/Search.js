import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

import styles from './Search.module.scss';
import { SearchIcon } from '~/components/Icons';
import UserItemPreview from '~/components/UserItemPreview';
import { Wrapper as WrapperPopper } from '~/components/Popper';
import { useDebounce } from '~/Hooks';
const cx = classNames.bind(styles);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const debouncedValue = useDebounce(searchValue, 500);
    useEffect(() => {
        const fetchApi = () => {
            setLoading(true);
            fetch(`http://localhost:3000/users?name=${debouncedValue}`)
                .then((response) => response.json())
                .then((data) => {
                    setSearchResult(data);
                    setLoading(false);
                });
        };
        fetchApi();
    }, [debouncedValue]);

    const handleChangeValue = (e) => {
        const value = e.target.value;
        if (!value.startsWith(' ')) {
            setSearchValue(value);
        }
    };

    const handleHiddenResults = () => {
        setShowResult(false);
    };
    return (
        <HeadlessTippy
            interactive={true}
            placement="bottom-end"
            visible={showResult && searchResult.length > 0}
            offset={[0, 5]}
            render={(attrs) => (
                <WrapperPopper>
                    <div className={cx('result-search')} tabIndex="-1" {...attrs}>
                        <h5 className={cx('result-title')}>User Account</h5>
                        {searchResult.map((item) => (
                            <UserItemPreview key={item.id} data={item} />
                        ))}
                    </div>
                </WrapperPopper>
            )}
            onClickOutside={handleHiddenResults}
        >
            <div className={cx('search')}>
                <button className={cx('search-btn')}>
                    <SearchIcon className="search-icon" />
                </button>
                <input
                    spellCheck={false}
                    value={searchValue}
                    onChange={handleChangeValue}
                    onFocus={() => setShowResult(true)}
                />
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
            </div>
        </HeadlessTippy>
    );
}

export default Search;
