'use client';

import { forwardRef, ReactNode, RefObject, useRef, } from "react";
import * as Form from '@radix-ui/react-form';
import classNames from "classnames";
import styles from './styles.module.css';

interface PropTypes extends Form.FormControlProps {
    variant?: "filled" | 'outlined';
    startAdornment?: ReactNode | null;
    endAdornment?: ReactNode | null;
    label?: string;
    error?: boolean;
    helperText?: string;
}

const TextField = forwardRef<HTMLInputElement, PropTypes>((props, ref) => {
    const {
        value,
        variant = 'outlined',
        startAdornment = null,
        endAdornment = null,
        label,
        disabled,
        error: hasError = false,
        helperText = '',
        ...otherProps
    } = props;

    const inputRef = useRef<HTMLInputElement>(null)

    return (
        <Form.Field name="hello" asChild>
            <div
                className={classNames(styles.root, styles[`root-variant-${variant}`])}
                data-has-label={!!label}
                data-has-start-adornment={!!startAdornment}
                data-has-end-adornment={!!endAdornment}
                data-has-error={!!hasError}
                data-is-disabled={!!disabled}
            >
                <div onClick={() => inputRef.current?.focus()} className={classNames(styles.textFieldContainer)}>
                    <span className={styles.stateLayer} />
                    {startAdornment}
                    <div className={classNames(styles.inputContainer)}>
                        {
                            !!label &&
                            <Form.Label className={styles.label}>{label}</Form.Label>
                        }
                        <Form.Control
                            ref={(inRef) => {
                                inputRef.current = inRef;
                                if (typeof ref === 'function') {
                                    ref(inRef);
                                } else if (ref) {
                                    (ref as RefObject<HTMLInputElement | null>).current = inRef;
                                }
                            }}
                            disabled={disabled}
                            className={styles.input}
                            value={value}
                            {...otherProps} />
                    </div>
                    {endAdornment}
                    {variant === 'filled' && (
                        <span className={styles.bottomBar} />
                    )}
                </div>
                {
                    !!helperText && <span className={styles.helperText}>{helperText}</span>
                }
            </div>
        </Form.Field>
    )
});

TextField.displayName = 'TextField';

export default TextField;