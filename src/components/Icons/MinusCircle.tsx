import { SvgXml } from 'react-native-svg';

export function MinusCircle() {
  const markup = `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="25" height="25" rx="12.5" fill="#674626"/>
  <path d="M14.8884 11.7372V12.9091H10.1156V11.7372H14.8884Z" fill="white"/>
  </svg>
  `;

  return <SvgXml xml={markup} />;
}