import React, { ReactElement, memo } from 'react';
import { Button } from 'antd';
import { ButtonType } from 'antd/lib/button';
import { SizeType } from 'antd/lib/config-provider/SizeContext';

interface IProps {
  isDanger?: boolean; // default: false
  isGhost?: boolean; // default: false
  type?: ButtonType; // value: primary | dashed | text | link; default: primary
  size?: SizeType; // value: large | middle | small; default: middle
}

function AntdButton(props: IProps): ReactElement {
  const {
    isDanger = false,
    isGhost = false,
    type = 'primary',
    size = 'middle',
  } = props;
  return (
    <Button danger={isDanger} ghost={isGhost} type={type} size={size}>
      Antd Button
    </Button>
  );
}

export default memo(AntdButton);
