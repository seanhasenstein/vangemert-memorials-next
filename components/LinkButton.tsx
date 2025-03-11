import Link from 'next/link';
import styled from 'styled-components';

type Theme = 'primary' | 'secondary';

type Props = {
  children: React.ReactNode;
  url: string;
  theme?: Theme;
};

export default function LinkButton({
  children,
  url,
  theme = 'primary',
}: Props) {
  return (
    <LinkButtonStyles className="btn" href={url} $theme={theme}>
      {children}
    </LinkButtonStyles>
  );
}

const LinkButtonStyles = styled(Link)<{ $theme: Theme }>`
  margin: 0 auto;
  padding: 0.75rem 1.5rem;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.9375rem;
  font-weight: 500;
  background-color: ${props =>
    props.$theme === 'primary' ? '#377e96' : 'transparent'};
  color: ${props => (props.$theme === 'primary' ? '#fff' : '#1f2937')};
  letter-spacing: 0.0125em;
  border: 1px solid
    ${props => (props.$theme === 'primary' ? '#2c6679' : '#d1d5db')};
  box-shadow: ${props =>
    props.$theme === 'primary'
      ? 'inset 0 1px 1px #4ba0bd'
      : 'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px'};
  border-radius: 0.25rem;
  transition: all 100ms ease-in-out;

  &:hover {
    ${props => (props.$theme === 'primary' ? 'background-color: #3c8aa4;' : '')}
    ${props =>
      props.$theme === 'secondary'
        ? 'color: #000; border-color: #bbc1ca; box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 2px 2px 0px;'
        : ''}
  }

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  &:focus-visible {
    box-shadow: rgb(255, 255, 255) 0px 0px 0px 2px, #1967d2 0px 0px 0px 4px,
      rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }
`;
