import React from 'react';
import NextLink from 'next/link';
import { Link as MUILink, LinkBaseProps } from '@mui/material';

// ...

export function Link({ ...props }: LinkBaseProps) {
  const { children, href } = props;
  return (
    <NextLink href={href ?? ''} passHref>
      <MUILink {...props}>{children}</MUILink>
    </NextLink>
  );
}
