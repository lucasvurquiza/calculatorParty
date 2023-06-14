import { SvgXml } from 'react-native-svg';

export function DeleteIcon() {
  const markup = `<svg width="56" height="72" viewBox="0 0 56 72" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4 64C4 68.4 7.6 72 12 72H44C48.4 72 52 68.4 52 64V16H4V64ZM12 24H44V64H12V24ZM42 4L38 0H18L14 4H0V12H56V4H42Z" fill="#674626"/>
  </svg> 
  `;

  return <SvgXml xml={markup} />;
}