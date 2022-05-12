import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IHeaderContainerProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    customClassName?: string;
    isDynamicBg?: boolean;
    children: React.ReactNode;
}
