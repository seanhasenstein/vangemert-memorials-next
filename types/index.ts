export type Galleries =
  | 'single-memorials'
  | 'double-memorials'
  | 'multiple-memorials'
  | 'slant-memorials'
  | 'hmong-memorials'
  | 'etchings'
  | 'benches'
  | 'civic'
  | 'granite-colors';

export type ImageMetadata = {
  key?: string;
  url?: string;
  lastModified?: Date;
  size?: number;
};
