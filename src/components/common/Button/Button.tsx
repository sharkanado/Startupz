import React, {forwardRef} from 'react';

import style from './Button.module.scss';

const buttonVariants = {
  outlined: style.button_outlined,
  'solid-blue': style.button_solid_blue,
  'solid-gray': style.button_solid_gray,
  icon: style.button_icon,
};

type ButtonVariant = keyof typeof buttonVariants;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({variant = 'outlined', className, children, ...props}: ButtonProps, ref) => {
    return (
      <button
        className={`${buttonVariants[variant]} ${className} ${
          variant !== 'icon' && style.button_text
        }`}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
