import React, {forwardRef} from 'react';

import './SectionHeader.module.scss';

const SectionHeader = forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({children, ...props}: React.HTMLAttributes<HTMLHeadingElement>, ref) => {
  return (
    <h2 ref={ref} {...props}>
      {children}
    </h2>
  );
});

SectionHeader.displayName = 'SectionHeader';

export default SectionHeader;
