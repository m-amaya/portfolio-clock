import Color from 'color';

export const rgba = (hex: string, alpha: number) =>
  Color(hex).alpha(alpha).rgb().string();

export const lighten = (hex: string, ratio: number) =>
  Color(hex).lighten(ratio).rgb().string();

export const darken = (hex: string, ratio: number) =>
  Color(hex).darken(ratio).rgb().string();
