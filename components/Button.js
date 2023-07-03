import styled from "styled-components";

export const ContainerButton = styled.div`
    background: #181c25;
    border-radius: 8px;
    padding: 8px 12px;
    width: min-content;
    white-space: nowrap;
    display: flex;
    gap: 6px;
    cursor: pointer;
    // TODO: hover

    img {
        width: 20px;
        height: 20px;
    }
`;

const Button = ({children}) => {
  return (
    <ContainerButton>
      {children}
    </ContainerButton>
  )
}

export default Button;