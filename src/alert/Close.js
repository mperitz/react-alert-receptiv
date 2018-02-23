import glamorous from 'glamorous/dist/glamorous.cjs.tiny'


/*
Raw 'X' SVG - adjust the fill for each theme
<svg fill="#444" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 0 48 48" width="48"><path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z"/><path d="M0 0h48v48h-48z" fill="none"/></svg>
*/
const darkBase64 = 'PHN2ZyBmaWxsPSIjZjNmM2YzIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgd2lkdGg9IjQ4Ij48cGF0aCBkPSJNMzggMTIuODNsLTIuODMtMi44My0xMS4xNyAxMS4xNy0xMS4xNy0xMS4xNy0yLjgzIDIuODMgMTEuMTcgMTEuMTctMTEuMTcgMTEuMTcgMi44MyAyLjgzIDExLjE3LTExLjE3IDExLjE3IDExLjE3IDIuODMtMi44My0xMS4xNy0xMS4xN3oiLz48cGF0aCBkPSJNMCAwaDQ4djQ4aC00OHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4='
const lightBase64 = 'PHN2ZyBmaWxsPSIjNDQ0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgd2lkdGg9IjQ4Ij48cGF0aCBkPSJNMzggMTIuODNsLTIuODMtMi44My0xMS4xNyAxMS4xNy0xMS4xNy0xMS4xNy0yLjgzIDIuODMgMTEuMTcgMTEuMTctMTEuMTcgMTEuMTcgMi44MyAyLjgzIDExLjE3LTExLjE3IDExLjE3IDExLjE3IDIuODMtMi44My0xMS4xNy0xMS4xN3oiLz48cGF0aCBkPSJNMCAwaDQ4djQ4aC00OHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4='

const Close = glamorous('div')({
  width: '50px',
  height: '100%',
  borderRadius: '0 2px 2px 0',
  cursor: 'pointer',
  position: 'absolute',
  top: 0,
  right: 0,
  ':hover': {
    opacity: '0.5'
  }
}, props => ({
  background: `url('data:image/svg+xml;base64,${props.glam.dark ? darkBase64 : lightBase64}') no-repeat`,
  backgroundPosition: '50%',
  backgroundSize: '25px',
  backgroundColor: `${props.glam.dark ? '#444' : '#f3f3f3'} !important`
}))

export default Close
