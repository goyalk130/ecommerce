"use client";
import Image from "next/image";
import { useState } from "react";

type props = {
  product: Product;
  fill?: boolean;
};

const ProductImage = ({ product, fill }: props) => {
  const [loading, setloading] = useState(true);

  return (
    <>
      {fill ? (
        <Image
          src={product.image}
          fill
          alt={product.title}
          className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
            loading
              ? "scale-110 blur-xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          }`}
          onLoadingComplete={() => setloading(false)}
        />
      ) : (
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={1000}
          className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
            loading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          } `}
          onLoadingComplete={() => setloading(false)}
        />
      )}
    </>
  );
};

export default ProductImage;
