import Link from 'next/link';

export default function TopMenuItem( {title, pageRef} : {title:string, pageRef:string}) {
    return (
        <Link
            href={pageRef}
            className="
        w-[120px] h-full flex items-center justify-center text-center 
        font-sans text-[10pt] !text-[#ffa07a]
        "
        >
        {title}
        </Link>
    );
}
