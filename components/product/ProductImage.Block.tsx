"use client";
import Image, { ImageLoader } from "next/image";

const AVAILABLE_WIDTHS = [256, 640, 1080] as const;

function pickClosestWidth(requested: number) {
  // Smallest width >= requested, or the largest if none is big enough
  const sorted = [...AVAILABLE_WIDTHS].sort((a, b) => a - b);
  const found = sorted.find((w) => w >= requested);
  console.log(requested, "pickClosestWidth -> found", found);
  return found ?? sorted[sorted.length - 1];
}

const imageLoader: ImageLoader = ({ src, width }) => {
  const selectedWidth = pickClosestWidth(width);
  const pathWithoutExt = src.replace(/\.png$/, "");
  // If these are on GCP, put your full URL instead of a relative path:
  // return `https://storage.googleapis.com/your-bucket${pathWithoutExt}-${selectedWidth}.png`;
  return `${pathWithoutExt}-${selectedWidth}.png`;
};

const ProductImageBlock = () => {
  return (
    <>
      <div className="min-h-[640px] relative">
        <Image
          alt="Product Image"
          loader={imageLoader}
          src={"/products/image.png"}
          fill
          sizes="(max-width: 480px) 20vw, (max-width: 768px) 32vw"
          style={{ objectFit: "cover" }}
        />
      </div>
    </>
  );
};

export default ProductImageBlock;
