import { StyleSheet, SafeAreaView } from 'react-native';

import ImagePreview from 'react-native-image-preview';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ImagePreview
        width={300}
        height={300}
        imageUrl={
          'https://plus.unsplash.com/premium_photo-1675802518662-009a12371c27?q=80&w=3715&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
