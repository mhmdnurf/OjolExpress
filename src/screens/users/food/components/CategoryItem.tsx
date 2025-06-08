import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
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
  icon: string;
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
    height: 110, // Fixed total height for the entire component
  },
  categoryCircle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    // Fixed height container to maintain consistent positioning
    height: 80, // Use the maximum size as the fixed container height
  },
  categoryText: {
    textAlign: 'center',
    fontSize: 12,
    height: 18, // Fixed height for text to maintain bottom alignment
    lineHeight: 18,
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
        // Remove transform from the main container to prevent layout shifts
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
    const iconSize = isSelected ? 26 : 22;

    const getBackgroundColor = React.useMemo(() => {
      if (isSelected) {
        return '#DC2626'; // Red background for selected
      }

      // Gray background for unselected items
      return '#F3F4F6'; // Light gray
    }, [isSelected]);

    const iconColor = isSelected ? '#fff' : item.iconColor;
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
          <Animated.View
            style={[
              circleStyle,
              animatedCircleStyle, // Apply scale and rotate only to the circle
            ]}>
            <Icon name={item.icon} size={iconSize} color={iconColor} />
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
