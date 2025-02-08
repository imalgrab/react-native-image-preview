import { StyleSheet, SafeAreaView } from 'react-native';

import ImagePreview from 'react-native-image-preview';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ImagePreview
        width={300}
        height={300}
        imageUrl={
          'https://images.unsplash.com/photo-1590005031487-03c7f56ef7d3?q=80&w=3578&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
