import React from "react";

interface LocalImageProps {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  style?: React.CSSProperties;
}

const LocalImage: React.FC<LocalImageProps> = (props) => {
  const { src, alt } = props;
  return (
    <picture>
      <img loading="lazy" src={src} alt={alt} />
    </picture>
  );
};

export default LocalImage;