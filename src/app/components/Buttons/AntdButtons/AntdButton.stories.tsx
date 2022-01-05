import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AntdButton from 'app/components/Buttons/AntdButtons/AntdButton';

export default {
  title: 'Antd/Button',
  component: AntdButton,
} as ComponentMeta<typeof AntdButton>;

const Template: ComponentStory<typeof AntdButton> = (args) => (
  <AntdButton {...args} />
);

export const Primary = Template.bind({});
