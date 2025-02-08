import type { ImageProps } from 'react-native';

export type ImagePreviewProps = Omit<ImageProps, 'source'> & {
  imageUrl: string;
};
