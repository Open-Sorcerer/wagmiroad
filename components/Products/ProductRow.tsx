import React, { ReactNode } from 'react';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

interface PdtProps {
    children?: ReactNode;
    title: string;
    desc?: string;
    price?: number;
}
export const ProductRow = (props: PdtProps) => {
    const { title, desc, price, children } = props;
    const [isInfo, setIsInfo] = useState(false);
    return (
        <div className='w-full h-full table-row'>
            <div className='w-full h-full flex flex-row justify-between items-center'>
                <h3 className='text-xl font-semibold'>{title}</h3>
                <FontAwesomeIcon
                    icon={faCircleInfo}
                    size='2x'
                    className='h-6 w-6'
                    onMouseEnter={() => setIsInfo(true)}
                    onMouseLeave={() => setIsInfo(false)} />
                {isInfo && <div className="w-2/3 max-w-full h-fit absolute -top-12 -right-6 z-10 inline-block px-3 py-2 text-sm font-medium text-white bg-dark rounded-lg shadow-sm">
                    {desc}
                </div>}
                <h1 className='text-xl'>{price}</h1>
            </div>
        </div>
    );
};
