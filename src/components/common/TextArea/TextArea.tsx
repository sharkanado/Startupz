import React, {forwardRef} from 'react';

import style from './TextArea.module.scss';

const TextArea = forwardRef<
  HTMLTextAreaElement,
  React.HTMLAttributes<HTMLTextAreaElement>
>(({children, ...props}: React.HTMLAttributes<HTMLTextAreaElement>, ref) => {
  return (
    <textarea ref={ref} className={style.textarea} {...props}>
      {children}
    </textarea>
  );
});

TextArea.displayName = 'TextArea';

export default TextArea;
