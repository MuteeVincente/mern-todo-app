import styled from 'styled-components';

export const BulletPoints = styled.li`
  &:last-child {
    color: red;
  }
  @media (max-width: 420px) {
    padding: 5px 0;
  }
`;

export const KeyContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 0.8rem;
  list-style-type: square;
  border-radius: 8px;
  border: 1px solid #ef7360;

  @media (max-width: 420px) {
    flex-direction: column;
  }
`;
