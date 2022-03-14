import styled from 'styled-components';

const Button = styled.button`
  background-color: transparent;
  font-weight: 600;
  padding: 12px 30px;
  white-space: nowrap;
  border: none;
  outline: none;
  cursor: pointer;

  &.btn1 {
    border-radius: 60px;
  }

  &.btn2 {
    border-radius: 6px;
  }

  &.copied {
    background-color: var(--dark-violet);
    color: #fff;
  }

  &:not(.copied).btn1.filled,
  &:not(.copied).btn2.filled {
    background-color: var(--cyan);
    color: #fff;
  }

  &.btn1.filled:hover,
  &.btn2.filled:hover {
    opacity: 0.75;
  }
`;

export default Button;
