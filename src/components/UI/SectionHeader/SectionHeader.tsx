import React, {forwardRef} from 'react';

import style from './SectionHeader.module.scss';

const SectionHeader = forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({children, ...props}: React.HTMLAttributes<HTMLHeadingElement>, ref) => {
  return (
    <h2 ref={ref} className={style.section_header} {...props}>
      {children}
    </h2>
  );
});

SectionHeader.displayName = 'SectionHeader';

export default SectionHeader;
