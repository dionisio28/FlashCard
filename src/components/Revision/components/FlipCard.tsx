import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

interface FlipCardProps {
  isFlipped: { value: boolean };
  cardStyle?: StyleProp<ViewStyle>;
  direction?: 'x' | 'y';
  duration?: number;
  RegularContent: JSX.Element;
  FlippedContent: JSX.Element;
}

const FlipCard: React.FC<FlipCardProps> = ({
  isFlipped,
  cardStyle,
  direction = 'y',
  duration = 500,
  RegularContent,
  FlippedContent,
}) => {
  const isDirectionX = direction === 'x';

  const regularCardAnimatedStyle = useAnimatedStyle(() => {
    const spinValue = interpolate(Number(isFlipped.value), [0, 1], [0, 180]);
    const rotateValue = withTiming(`${spinValue}deg`, { duration });

    return {
      transform: [
        isDirectionX ? { rotateX: rotateValue } : { rotateY: rotateValue },
      ],
      opacity: isFlipped.value ? 1 : 1,
      zIndex: isFlipped.value ? 0 : 1,
    };
  });

  const flippedCardAnimatedStyle = useAnimatedStyle(() => {
    const spinValue = interpolate(Number(isFlipped.value), [0, 1], [180, 360]);
    const rotateValue = withTiming(`${spinValue}deg`, { duration });

    return {
      transform: [
        isDirectionX ? { rotateX: rotateValue } : { rotateY: rotateValue },
      ],
      opacity: isFlipped.value ? 1 : 1,
      zIndex: isFlipped.value ? 1 : 0,
    };
  });

  return (
    <View>
      <Animated.View
        style={[
          styles.regularCard,
          cardStyle,
          regularCardAnimatedStyle,
        ]}>
        {RegularContent}
      </Animated.View>
      <Animated.View
        style={[
          styles.flippedCard,
          cardStyle,
          flippedCardAnimatedStyle,
        ]}>
        {FlippedContent}
      </Animated.View>
    </View>
  );
};

const styles = {
  regularCard: {
    position: 'absolute',
    zIndex: 1,
    backfaceVisibility: 'hidden',
  } as ViewStyle,
  flippedCard: {
    position: 'absolute',
    zIndex: 2,
    backfaceVisibility: 'hidden',
  } as ViewStyle,
};

export default FlipCard;
