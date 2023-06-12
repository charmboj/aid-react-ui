export type Size = 'small' | 'medium' | 'large';

export const sizes = new Map<Size, string>([
  ['small', 'sm'],
  ['medium', 'md'],
  ['large', 'lg']
])