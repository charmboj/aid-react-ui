export type Color = 
  'black'
  | 'blue'
  | 'cyan'
  | 'gray'
  | 'green'
  | 'light-blue'
  | 'light-cyan'
  | 'light-gray'
  | 'light-green'
  | 'light-pink'
  | 'light-purple'
  | 'light-red'
  | 'light-salmon'
  | 'light-yellow'
  | 'pink'
  | 'purple'
  | 'red'
  | 'salmon'
  | 'yellow'
  | 'white'

export const colors = new Map<Color, string>([
  ['black', '#2d3436'],
  ['blue', '#0984e3'],
  ['cyan', '#00cec9'],
  ['gray', '#636e72'],
  ['green', '#00b894'],
  ['light-blue', '#74b9ff'],
  ['light-cyan', '#81ecec'],
  ['light-gray', '#b2bec3'],
  ['light-green', '#55efc4'],
  ['light-pink', '#f65daf'],
  ['light-purple', '#a29bfe'],
  ['light-red', '#f44444'],
  ['light-salmon', '#fab1a0'],
  ['light-yellow', '#ffeaa7'],
  ['pink', '#e84393'],
  ['purple', '#6c5ce7'],
  ['red', '#d63031'],
  ['salmon', '#ff7675'],
  ['white', '#ffffff'],
  ['yellow', '#fdcb6e']
]);