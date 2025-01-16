import classNames from 'classnames';
import React from 'react';
import type { FC } from 'react';
import styles from './styles.module.css';
import { IconPropTypes } from './config';

const PlusRoundedIcon: FC<IconPropTypes> = (props) => {

    const { className, colorScheme, fill = 'var(--icon-fill)', ...otherProps } = props;

    return (
        <svg
            width={24}
            height={24}
            fill={fill}
            viewBox="0 0 24 24"
            className={classNames({
                [styles[`colorScheme-${colorScheme || ''}`]]: !!colorScheme
            }, className)}
            {...otherProps}
        >
            <path d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2"></path>
        </svg >
    );
}

export default PlusRoundedIcon;