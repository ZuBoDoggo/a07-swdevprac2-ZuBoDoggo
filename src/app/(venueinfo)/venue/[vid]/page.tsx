import Image from "next/image"

export default async function VenueDetailPage( {params} : {params:Promise<{vid:string}>}) {
    const vid = (await params).vid
    
    /*
        Mockup data for each venue
    */
    const mockVenueRepo = new Map()
    mockVenueRepo.set("001",{venueName:"The Bloom Pavilion", imgSrc:"/img/bloom.png"})
    mockVenueRepo.set("002",{venueName:"Spark Space",        imgSrc:"/img/sparkspace.png"})
    mockVenueRepo.set("003",{venueName:"The Grand Table",    imgSrc:"/img/grandtable.png"})

    const venue = mockVenueRepo.get(vid);
    return(
        <main className=" text-center p-5 !my-[75px]">
            <div className="flex flex-row">
                <Image
                    src={venue.imgSrc}
                    alt="Venue Image"
                    width={0} height={0} sizes="100vw"
                    className="rounded-lg w-[30%]"
                />
            </div>
            <div className="text-md mx-[5px]">
                {venue.venueName}
            </div>
        </main>
    );
}

export async function generateStaticParams() {
    return [
        {vid:"001"},
        {vid:"002"},
        {vid:"003"}
    ]
}