import React, { ReactElement, memo } from 'react';
import { Badge, Avatar } from 'antd';
import isDeepEqual from 'fast-deep-equal';
import { AntdNotiStyled } from './AntdNotiStyled';
import { IUsers } from 'types/Users';

interface IProps {
  data?: {
    count?: number; // default: 0
    overflowCount?: number; // default: 999
  };
  userData: IUsers.BaseData;
  backgroundColor?: string; // default: #ff0000
}

function AntdNoti(props: IProps): ReactElement {
  const {
    data = { count: 0, overflowCount: 999 },
    userData = {
      role: '',
      name: '',
      avatar: '',
    },
    backgroundColor = '#ff0000',
  } = props;
  const { count, overflowCount } = data;
  const { avatar } = userData;

  return (
    <AntdNotiStyled bg={backgroundColor}>
      <Badge count={count} overflowCount={overflowCount}>
        <Avatar src={avatar} shape="circle" size="large" />
      </Badge>
    </AntdNotiStyled>
  );
}

function areEqual(prevProps: IProps, nextProps: IProps) {
  return isDeepEqual(prevProps, nextProps);
}

export default memo(AntdNoti, areEqual);
