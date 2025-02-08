import { useState } from 'react';
import { Image } from 'react-native';

import { ImageModal, ImageTrigger } from './components';
import type { ImagePreviewProps } from './utils';

export function ImagePreview(props: ImagePreviewProps) {
  const {
    width: imageWidth,
    height: imageHeight,
    imageUrl,
    ...imageProps
  } = props;

  const [opened, setOpened] = useState(false);

  const handleImageTriggerPressIn = () => {
    Image.prefetch(imageUrl);
  };

  const handleImageTriggerPress = () => {
    setOpened(true);
  };

  const handleImageModalDismiss = () => {
    setOpened(false);
  };

  return (
    <>
      <ImageModal
        imageUrl={imageUrl}
        opened={opened}
        onDismiss={handleImageModalDismiss}
      />
      <ImageTrigger
        {...imageProps}
        width={imageWidth}
        height={imageHeight}
        imageUrl={imageUrl}
        onPressIn={handleImageTriggerPressIn}
        onPress={handleImageTriggerPress}
      />
    </>
  );
}
