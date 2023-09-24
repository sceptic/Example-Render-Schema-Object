import React, { ReactNode, HTMLProps } from 'react';

type BoxProps = HTMLProps<HTMLDivElement> & {
  children?: ReactNode;
};

const Box: React.FC<BoxProps> = ({ children, ...props }) => {
  return <div {...props}>* {children}</div>;
};

export default Box;
