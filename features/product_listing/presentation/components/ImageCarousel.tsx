import React from 'react';
import { requireNativeComponent, ViewProps } from 'react-native';

const ImageCarouselView = requireNativeComponent('ImageCarouselView');

interface ImageCarouselProps extends ViewProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = (props) => {
  return <ImageCarouselView {...props} />;
};

export default ImageCarousel;
