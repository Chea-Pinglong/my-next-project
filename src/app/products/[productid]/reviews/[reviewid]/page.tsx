export default function ReviewDetail({params}:{
    params:{
        productid: string
        reviewid: string;
    }
}){
    return(
        
    <h1 className="text-xl font-semibold text-center pt-16">
        Review {params.reviewid} for Product {params.productid}
    </h1>
    )
}