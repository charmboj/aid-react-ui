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
  | 'white';

type ColorObj = {
  hex: string,
  className: string
}

export const colors = new Map<Color, ColorObj>([
  ['black', { hex:'#2d3436', className: 'bk' }],
  ['blue', { hex:'#0984e3', className: 'bl' }],
  ['cyan', { hex:'#00cec9', className: 'cn' }],
  ['gray', { hex:'#636e72', className: 'gy' }],
  ['green', { hex:'#00b894', className: 'gn' }],
  ['light-blue', { hex:'#74b9ff', className: 'lbl' }],
  ['light-cyan', { hex:'#81ecec', className: 'lcn' }],
  ['light-gray', { hex:'#b2bec3', className: 'lgy' }],
  ['light-green', { hex:'#55efc4', className: 'lgn' }],
  ['light-pink', { hex:'#f65daf', className: 'lpk' }],
  ['light-purple', { hex:'#a29bfe', className: 'lpp' }],
  ['light-red', { hex:'#f44444', className: 'lrd' }],
  ['light-salmon', { hex:'#fab1a0', className: 'lsn' }],
  ['light-yellow', { hex:'#ffeaa7', className: 'lyl' }],
  ['pink', { hex:'#e84393', className: 'pk' }],
  ['purple', { hex:'#6c5ce7', className: 'pp' }],
  ['red', { hex:'#d63031', className: 'rd' }],
  ['salmon', { hex:'#ff7675', className: 'sn' }],
  ['white', { hex:'#ffffff', className: 'wt' }],
  ['yellow', { hex:'#fdcb6e', className: 'yl' }]
]);