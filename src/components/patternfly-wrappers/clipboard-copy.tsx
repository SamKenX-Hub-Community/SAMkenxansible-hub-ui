import { t } from '@lingui/macro';
import { ClipboardCopy as PFClipboardCopy } from '@patternfly/react-core';
import * as React from 'react';

interface IProps {
  children: string;
  [key: string]: string | number | boolean;
}

export class ClipboardCopy extends React.Component<IProps> {
  render() {
    const { children, ...props } = this.props;
    return (
      <PFClipboardCopy
        hoverTip={t`Copy to clipboard`}
        clickTip={t`Successfully copied to clipboard!`}
        {...props}
      >
        {children}
      </PFClipboardCopy>
    );
  }
}
