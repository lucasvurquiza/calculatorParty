import { SvgXml } from 'react-native-svg';

export function PlusCircle() {
  const markup = `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="25" height="25" rx="12.5" fill="#674626"/>
  <path d="M12.4027 16.2543V9.22301H13.5959V16.2543H12.4027ZM9.48371 13.3352V12.142H16.515V13.3352H9.48371Z" fill="white"/>
  </svg>
  `;

  return <SvgXml xml={markup} />;
}