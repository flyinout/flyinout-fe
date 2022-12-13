import Image from "next/image";

const MyImage = ({ width, height, src, alt }) => {
  return <Image src={src} alt={alt} width={width} height={height} />;
};

export { MyImage as Image };
