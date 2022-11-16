import './loader.scss';
import { useState, useEffect } from 'react';
import sprites from '../../icons/icons.svg';

function Loader() {

    const [loadingDone, setLoadingDone] = useState(false);

    useEffect(() => {
        setLoadingDone(true)
    }, [])

    return (
        <div className={loadingDone ? 'loader done' : 'loader'}>
            <svg>
                <use href={sprites + '#send'} />
            </svg>
        </div>
    )
}

export default Loader;

