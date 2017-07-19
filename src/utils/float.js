import styled from 'styled-components';

const Float = styled.div`
  float: ${props => (props.left ? 'left' : 'right')}
`;

export default Float;
