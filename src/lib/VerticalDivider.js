import styled from 'styled-components';

export const VerticalDivider = styled.div`
  display: flex;
  height: ${(props) => (props.height ? props.height : '100%')};
  align-self: center;
  width: 2px;
  background-color: ${(props) =>
    props.background && props.background.color
      ? props.background.color
      : 'black'};
  background: ${(props) =>
    props.background &&
    props.background.doted &&
    `repeating-linear-gradient(to bottom,transparent 0 4px,${
      props.background.color ? props.background.color : 'black'
    } 4px 8px) 50%/2px 100% no-repeat`};
  margin-left: 20px;
  margin-right: 20px;
`;
