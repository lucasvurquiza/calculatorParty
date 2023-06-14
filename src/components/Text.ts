import styled from 'styled-components/native';

type TextProps = {
  weight?: '300' | '400' | '700';
  color?: string;
  size?: number;
  opacity?: number;
}

export const Text = styled.Text<TextProps>`
  font-family: ${({ weight }) => weight ? `Lato-${weight}` : 'Lato-400'};
  color: ${({ color }) => color || '#333'};
  font-size: ${({ size }) => size ? `${size}px` : '16px'};
  opacity: ${({ opacity }) => opacity || 1};
`;