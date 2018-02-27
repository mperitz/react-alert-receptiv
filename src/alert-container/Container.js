import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 14px;
  z-index: 99999;
  ${({ position, marginOffset }) => {
    switch (position) {
      case 'top left':
        return `
          margin:${marginOffset}px;
          top: 0;
          right: auto;
          bottom: auto;
          left: 0;
        `
      case 'top right':
        return `
          margin: ${marginOffset}px;
          top: 0;
          right: 0;
          bottom: auto;
          left: auto;
        `
      case 'bottom left':
        return `
          margin: ${marginOffset}px;
          top: auto;
          right: auto;
          bottom: 0;
          left: 0;
        `
      case 'bottom right':
        return `
          margin: ${marginOffset}px;
          top: auto;
          right: 0;
          bottom: 0;
          left: auto;
        `
      case 'top center':
        return `
          margin: ${marginOffset}px;
          top: 0;
          right: auto;
          bottom: auto;
          left: 50%;
          transform: translate(-50%,0%);
        `
      case 'bottom center':
        return `
          margin: ${marginOffset}px;
          top: auto;
          right: auto;
          bottom: 0;
          left: 50%;
          transform: translate(-50%,0%);
        `
      default:
        return ''
    }
  }}
`;

export default Container;
