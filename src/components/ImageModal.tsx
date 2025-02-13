import { useState } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  FadeIn,
  FadeOut,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import type { ImagePreviewProps } from '../utils';

const { height } = Dimensions.get('screen');

type ImageModalProps = ImagePreviewProps & {
  opened: boolean;
  onDismiss: () => void;
};

export function ImageModal(props: ImageModalProps) {
  const { imageUrl, opened, onDismiss, ...imageProps } = props;

  const [isLoading, setIsLoading] = useState(false);

  const scale = useSharedValue(1);
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const doubleTap = Gesture.Tap()
    .maxDuration(250)
    .numberOfTaps(2)
    .onStart(() => {
      const isZoomedIn = scale.value > 1;
      scale.value = withSpring(isZoomedIn ? 1 : 2);
    });

  const handleStartImageLoading = () => {
    setIsLoading(true);
  };

  const handleImageLoaded = () => {
    setIsLoading(false);
  };

  if (!opened) {
    return null;
  }

  return (
    <Animated.View
      entering={FadeIn}
      exiting={FadeOut}
      style={styles.modalContainer}
    >
      <StatusBar />
      <GestureHandlerRootView>
        <GestureDetector gesture={doubleTap}>
          <Animated.View style={[styles.modalContent, animatedStyles]}>
            <Pressable style={styles.dismissButton} onPress={onDismiss} />
            {isLoading && (
              <ActivityIndicator size={'large'} style={styles.spinner} />
            )}
            <Image
              {...imageProps}
              source={{ uri: imageUrl }}
              style={{ height: height * 0.7 }}
              onLoadStart={handleStartImageLoading}
              onLoad={handleImageLoaded}
            />
          </Animated.View>
        </GestureDetector>
      </GestureHandlerRootView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    zIndex: 9999,
    backgroundColor: 'black',
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
  },
  dismissButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    alignSelf: 'flex-end',
    right: 16,
    bottom: 16,
  },
  spinner: {
    position: 'absolute',
    alignSelf: 'center',
  },
});
