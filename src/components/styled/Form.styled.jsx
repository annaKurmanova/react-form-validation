import styled from "styled-components";

export const FromContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;

  & form {
    display: flex;
    flex-direction: column;
    width: 100%;
    & p {
      color: #fff;
      margin-bottom: 10px;
    }
  }
`;

export const FormInput = styled.input`
  padding: 20px;
  border-radius: 0.4rem;
  margin-bottom: 10px;
  border: none;
  max-width: 500px;
  &[type="submit"] {
    background: #171c21;
    color: #bec7d1;
    cursor: pointer;
    border: 1px solid #bec7d1;
    text-transform: uppercase;
    padding: 20px;
    font-weight: 600;
    margin-top: 20px;
    &:hover {
      background: #ff6584;
      color: #171c21;
      border-color: #171c21;
    }
  }
`;
