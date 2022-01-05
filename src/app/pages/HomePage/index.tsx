import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'types';
import { addUserInfo } from 'store/slices/users/UserSlices';
import { fetchUserAvatar } from 'store/slices/users/Async';

export function HomePage() {
  const users = useSelector((state: RootState) => state.users);
  const { info, userTodo } = users;
  const { name, role } = info;
  const { title } = userTodo;
  const dispatch = useDispatch();

  useEffect(() => {
    const userInfo = {
      role: 'PM',
      name: 'Demo',
      avatar: '',
    };
    dispatch(addUserInfo(userInfo));
    dispatch(fetchUserAvatar());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Button type="primary">Button</Button>
      <span>{process.env.REACT_APP_NOT_SECRET_CODE}</span>
      <p>
        User Info: {name} - {role} - {title}
      </p>
    </>
  );
}
