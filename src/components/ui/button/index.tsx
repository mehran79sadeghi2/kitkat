import { ComponentProps, forwardRef } from "react";
import styles from './styles.module.css';
import classNames from "classnames";
import { Slot } from "@radix-ui/react-slot";

interface PropTypes extends ComponentProps<'button'> {
    asChild?: boolean;
    variant?: 'filled' | 'outlined' | 'text' | 'elevated';
    colorScheme?: 'primary' | 'secondary' | 'tertiary';
}

const Button = forwardRef<HTMLButtonElement, PropTypes>((props, forwardedRef) => {

    const {
        children,
        asChild,
        className,
        variant = 'filled',
        colorScheme = 'primary',
        ...otherProps
    } = props;

    const Comp = asChild ? Slot : "button";

    return (
        <Comp
            ref={forwardedRef}
            className={classNames(
                styles.button,
                styles[`button-variant-${variant}`] || '',
                styles[`button-colorScheme-${colorScheme}` || ''],
                className)
            }
            {...otherProps}
        >
            {children}
            <span className={classNames(styles.stateLayer, styles[`stateLayer-variant-${variant}`])} />
        </Comp>
    )
})

Button.displayName = 'Button'

export default Button;