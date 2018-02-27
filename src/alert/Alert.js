import styled from 'styled-components';

const Alert = styled.div`
  width: 300px;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 11px;
  position: relative;
  border-top: 0.5px solid white;
  background-color: ${({ dark }) => dark ? '#333' : '#fff'};
  color: ${({ dark }) => dark ? '#fff' : '#333'};
  box-shadow: ${({ boxShadow }) => boxShadow || '0 8px 12px 0 rgba(0,0,0,0.3)'};
  z-index: ${({ background }) => background ? 9999 : 10000};
  &.scale-enter {
    transform: scale(0);
  };
  &.scale-enter.scale-enter-active {
    transform: scale(1);
    transition: all 250ms cubic-bezier(0, 0, 0.5, 1.5);
  };
  &.scale-leave {
    transform: scale(1);
  };
  &.scale-leave.scale-leave-active {
    transform: scale(0);
    transition: all 250ms ease-in-out;
  };
  &.fade-enter {
    opacity: 0.1;
  };
  &.fade-enter.fade-enter-active {
    opacity: 1;
    transition: all 250ms ease-out;
  };
  &.fade-leave {
    opacity: 1;
  };
  &.fade-leave.fade-leave-active {
    opacity: 0.1;
    transition: all 250ms ease-in;
  };
`;

export default Alert
