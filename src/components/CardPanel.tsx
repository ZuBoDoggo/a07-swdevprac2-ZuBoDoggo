'use client'
import { useReducer } from "react";
import Card from "./Card";
import Link from "next/link";

export default function CardPanel(){

    const compareReducer = (
        compareList:Map<string,number>, 
        action:{type:string, venueName:string, rating:number}
    )=>{
        switch(action.type){
            case('add') : {
                return new Map( compareList.set(action.venueName, action.rating))
            }
            case('remove') : {
                compareList.delete(action.venueName)
            return new Map(compareList)
            }
            default :{
                return compareList
            }
        }
    }
    
    /*
        Mock up data for each venue
    */
    const mockVenueRepo = [
        { vid:"001",    venueName:"The Bloom Pavilion", imgSrc:"/img/bloom.png" },
        { vid:"002",    venueName:"Spark Space",        imgSrc:"/img/sparkspace.png" },
        { vid:"003",    venueName:"The Grand Table",    imgSrc:"/img/grandtable.png" }
    ]

    const [compareList, dispatchCompare] = useReducer(compareReducer, new Map<string,number>)

    const ratingAsSymbol = ['','★','★★','★★★','★★★★','★★★★★']

    return(
        <div>
            <div style={{ margin:"20px",
                display:"flex",
                flexDirection:"row",
                alignContent:"space-around",
                justifyContent:"space-around",
                flexWrap:"wrap"
                }}>
                {
                    mockVenueRepo.map((venueItem)=>(
                        <Link href={`/venue/${venueItem.vid}`} key={venueItem.vid}
                        className="w-1/5">
                            <Card venueName={venueItem.venueName} 
                            imgSrc={venueItem.imgSrc}
                            onCompare={ (venueName:string, rating:number)=>
                                dispatchCompare({type:'add', venueName:venueName, rating:rating})
                            }
                            />
                        </Link>
                    ))
                }
            </div>
            
            <div className="!px-[20px]">
                <div className="font-bold font-serif">
                    Venue List with Ratings : {compareList.size}
                </div>

                {Array.from(compareList).map( ([venueName, rating])=>
                    <div key={venueName}
                    onClick={()=>
                        dispatchCompare({type:'remove', venueName:venueName, rating:rating})
                    }
                    data-testid={venueName}
                    >
                        {/*venueName + ":" + ratingAsSymbol[rating]*/
                        venueName + " : " + rating}
                    </div>)
                }
            </div>
        </div>
    );
}