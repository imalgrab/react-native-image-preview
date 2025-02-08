import { Image, Pressable } from 'react-native';
import type { ImagePreviewProps } from '../utils';

type ImageTriggerProps = ImagePreviewProps & {
  onPressIn: () => void;
  onPress: () => void;
};

export function ImageTrigger(props: ImageTriggerProps) {
  const { onPress, onPressIn, imageUrl, ...imageProps } = props;

  return (
    <Pressable onPress={onPress} onPressIn={onPressIn}>
      <Image {...imageProps} source={{ uri: imageUrl }} />
    </Pressable>
  );
}
