import { styled } from "../../../styled-system/jsx";

export const Button = styled.button`
  background-color: #fff;
  border: 1px solid #000;
  color: #000;
  padding: 0.5rem 1rem;
`;

export const Title = styled.div`
  color: tomato;
  font-size: 18px;
`;

export const One = styled.div`
  display: flex;
  width: 300px;
  border: 1px solid black;
  justify-content: center;
  --test: 4px;
`;

export const Two = styled(One)`
  justify-content: flex-start;
  margin-top: var(--test);
`;
