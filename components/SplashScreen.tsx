import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, ActivityIndicator, Animated, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const navigation = useNavigation();

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start(() => {
      onFinish();
    });


    const timer = setTimeout(() => {
      onFinish();
    }, 1000);

    return () => clearTimeout(timer);
  }, [fadeAnim, onFinish]);

  return (
    <View style={styles.container}>
        <StatusBar barStyle="light-content" />
      <Animated.View style={{ ...styles.overlay, opacity: fadeAnim }}>
        <ActivityIndicator size="large" color="#ffffff" />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  overlay: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});

export default SplashScreen;
