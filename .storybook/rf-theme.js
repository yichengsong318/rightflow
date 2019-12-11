import { create } from '@storybook/theming';
import logo from '../src/assets/images/rightflow-logo.svg';

export const theme = create({
  base: "light",
  brandTitle: "RightFlow UI",
  brandImage: logo
});