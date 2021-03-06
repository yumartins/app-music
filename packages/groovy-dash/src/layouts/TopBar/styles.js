import { Form as Unform } from '@unform/web';
import { colors } from 'groovy-styles';
import styled from 'styled-components';

import { P2 } from '../../components/Title';

const {
  grays,
  primary,
} = colors;

export const View = styled.nav`
  width: 100%;
  top: 0;
  position: absolute;
  padding: 24px 32px;
  display: flex;
  align-items: center;
  z-index: 9;
`;

export const Navigate = styled.ul`
  display: flex;
  align-items: center;
`;

export const Item = styled(P2)`
  letter-spacing: 1px;
  color: ${({ selected }) => (selected ? primary : grays._300)};
  padding: 4px 8px;
  cursor: pointer;
  
  &:not(:first-child) {
    margin-left: 8px;
  }
`;

export const Form = styled(Unform)`
  max-width: 324px;
  width: 100%;
  margin-left: 88px;
`;

export const User = styled.a`
  display: flex;
  align-items: center;
  margin-left: auto;
  color: ${grays._300};
  cursor: pointer;

  img {
    width: 32px;
    height: 32px;
    object-fit: cover;
    border-radius: 24px;
    margin: 0 16px 0 12px;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;
