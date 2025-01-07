import { Slot } from "@radix-ui/react-slot";
import { ComponentProps, forwardRef } from "react";
import { tv, VariantProps } from "tailwind-variants";

const styles = tv({
    base: 'h-10 w-auto border rounded-lg border-solid px-4 font-medium text-sm transition-colors duration-2 flex flex-row justify-center items-center gap-1 whitespace-nowrap disabled:bg-grey-500 disabled:border-grey-500 disabled:text-typo-white [&>svg]:disabled:fill-icon-on',
    variants: {
        scheme: {
            primary: 'text-typo-white border-primary bg-primary hover:border-primary-600 hover:bg-primary-600 active:border-primary-700 active:bg-primary-700',
            secondary: 'text-typo-white border-secondary bg-secondary hover:border-secondary-600 hover:bg-secondary-600 active:border-secondary-700 active:bg-secondary-700',
        },
        variant: {
            fill: '[&>svg]:fill-icon-on',
            outline: 'bg-opacity-0 hover:bg-opacity-10 active:bg-opacity-20',
            text: 'bg-opacity-0 hover:bg-opacity-10 active:bg-opacity-20 border-opacity-0 hover:border-opacity-10 active:border-opacity-20'
        },
        fullWidth: {
            true: 'w-full'
        },
    },
    compoundVariants: [
        {
            scheme: 'primary',
            variant: ['outline', 'text'],
            className: 'text-primary [&>svg]:fill-primary'
        },
        {
            scheme: 'secondary',
            variant: ['outline', 'text'],
            className: 'text-secondary [&>svg]:fill-secondary'
        },
        {
            scheme: 'primary',
        }
    ],
    defaultVariants: {
        scheme: 'primary',
        fullWidth: false
    }
});

interface PropTypes extends ComponentProps<'button'>, VariantProps<typeof styles> {
    asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, PropTypes>((props, forwardedRef) => {

    const { children, asChild = false, className, fullWidth = false, variant, scheme, ...otherProps } = props;

    const Comp = asChild ? Slot : "button";

    return <Comp {...otherProps} ref={forwardedRef} className={styles({ className, fullWidth, variant, scheme })}>
        {children}
    </Comp>
})

Button.displayName = 'Button'

export default Button;