import React from 'react';
import {Pressable, StyleSheet, Image, ImageSourcePropType} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  interpolate,
  runOnJS,
} from 'react-native-reanimated';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export interface CategoryItemType {
  id: number;
  name: string;
  image: ImageSourcePropType;
  color: string;
  iconColor: string;
}

interface CategoryItemProps {
  item: CategoryItemType;
  selectedCategory: number;
  onCategorySelect: (id: number) => void;
}

const styles = StyleSheet.create({
  categoryContainer: {
    alignItems: 'center',
    paddingHorizontal: 8,
    minWidth: 80,
    height: 110,
  },
  categoryCircle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    height: 80,
  },
  categoryText: {
    textAlign: 'center',
    fontSize: 12,
    height: 18,
    lineHeight: 18,
  },
  categoryImage: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
  categoryImageSelected: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});

const CategoryItem = React.memo<CategoryItemProps>(
  ({item, selectedCategory, onCategorySelect}) => {
    const isSelected = selectedCategory === item.id;
    const scale = useSharedValue(1);
    const opacity = useSharedValue(1);
    const rotate = useSharedValue(0);

    React.useEffect(() => {
      scale.value = withSpring(isSelected ? 1.1 : 1, {
        damping: 15,
        stiffness: 150,
      });
    }, [isSelected, scale]);

    const animatedStyle = useAnimatedStyle(() => {
      return {
        opacity: opacity.value,
      };
    });

    const animatedCircleStyle = useAnimatedStyle(() => {
      return {
        transform: [{scale: scale.value}, {rotate: `${rotate.value}deg`}],
      };
    });

    const animatedTextStyle = useAnimatedStyle(() => {
      return {
        transform: [
          {
            scale: interpolate(scale.value, [1, 1.1], [1, 1.05]),
          },
        ],
      };
    });

    const handlePress = React.useCallback(() => {
      scale.value = withSpring(
        0.95,
        {
          damping: 15,
          stiffness: 200,
        },
        () => {
          scale.value = withSpring(isSelected ? 1.1 : 1, {
            damping: 15,
            stiffness: 150,
          });
        },
      );

      rotate.value = withTiming(5, {duration: 100}, () => {
        rotate.value = withTiming(0, {duration: 100});
      });

      runOnJS(onCategorySelect)(item.id);
    }, [isSelected, item.id, rotate, scale, onCategorySelect]);

    const categorySize = isSelected ? 80 : 64;

    const getBackgroundColor = React.useMemo(() => {
      if (isSelected) {
        return '#FEE2E2';
      }
      return '#F3F4F6';
    }, [isSelected]);

    const textColor = isSelected ? '#DC2626' : '#000';

    const circleStyle: React.ComponentProps<typeof Animated.View>['style'] = {
      width: categorySize,
      height: categorySize,
      borderRadius: categorySize / 2,
      backgroundColor: getBackgroundColor,
      justifyContent: 'center' as const,
      alignItems: 'center' as const,
    };

    const textStyle = {
      fontWeight: (isSelected ? '700' : '500') as any,
      color: textColor,
    };

    return (
      <AnimatedPressable
        onPress={handlePress}
        style={[styles.categoryContainer, animatedStyle]}>
        <Animated.View style={styles.categoryCircle}>
          <Animated.View style={[circleStyle, animatedCircleStyle]}>
            <Image
              source={item.image}
              style={
                isSelected ? styles.categoryImageSelected : styles.categoryImage
              }
            />
          </Animated.View>
        </Animated.View>

        <Animated.Text
          style={[styles.categoryText, textStyle, animatedTextStyle]}>
          {item.name}
        </Animated.Text>
      </AnimatedPressable>
    );
  },
);

CategoryItem.displayName = 'CategoryItem';

export default CategoryItem;
