export default function ProductDetails({params}:{
  params:{
    productid: string
  };
}){
  return(

    <h1>
      Detail about product {params.productid}
    </h1>
  )
}