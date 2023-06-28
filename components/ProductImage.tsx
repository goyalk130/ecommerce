import Image from "next/image"

type props={
    product:Product,
    fill?:boolean
}


const ProductImage = ({product,fill}:props) => {
  return (
    <>{fill?(
        <Image src={product.image} fill alt={product.title}/>
    ):(<Image src={product.image} alt={product.title}/>)
}</>
  )
}

export default ProductImage