import Image from 'next/image';

import TopMenuItem from './TopMenuItem';

export default function TopMenu() {
    return (
        <div className="fixed top-0 left-0 right-0 z-30 flex h-[75px] w-full flex-row justify-end border-y border-solid border-[#ffa07a] bg-white">
            <TopMenuItem title='Booking' pageRef='/booking'/>

            <Image
            src={'/img/logoIMG.png'}
            alt='logo'
            className="h-full w-auto"
            height={0}
            width={0}
            sizes='100vh'
            />
        </div>
    );
}
