import { notFound } from "next/navigation"
export default function Reviewd({params }:{
    params:{
        productid :string
        reviewid:string
    }
}){
    
    return <h1>
       Review {params.reviewid} for product {params.productid}

    </h1>
}