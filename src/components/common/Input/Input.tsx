import React, {forwardRef} from 'react';

import style from './Input.module.scss';

const Input = forwardRef<
  HTMLInputElement,
  React.HTMLAttributes<HTMLInputElement>
>(({children, ...props}: React.HTMLAttributes<HTMLInputElement>, ref) => {
  return (
    <input type="text" ref={ref} className={style.input} {...props}>
      {children}
    </input>
  );
});

Input.displayName = 'Input';

export default Input;
