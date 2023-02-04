import React, { ReactNode } from 'react';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

interface PdtProps {
    id: number;
    children?: ReactNode;
    title: string;
    description?: string;
    price?: number;
    status: string;
}

const ProductRow = (props: PdtProps) => {
    const { id, title, description, price, status, children } = props;
    const [isInfo, setIsInfo] = useState(false);
    return (
        <tr className='table-row odd:bg-gray-800 odd:border-gray-700 even:bg-gray-900 even:border-gray-700'>
            <td className='table-cell text-left px-6 py-2  mono text-xl font-semibold'>{id}</td>
            <th scope="row" className='relative flex flex-row text-left  px-6 py-2 font-medium text-xl whitespace-nowrap justify-between'>{title}
                <FontAwesomeIcon
                    icon={faCircleInfo}
                    size='2x'
                    className='h-6 w-6'
                    onMouseEnter={() => setIsInfo(true)}
                    onMouseLeave={() => setIsInfo(false)}
                />
                {
                    isInfo &&
                    <div className="w-fit h-fit absolute right-16 bottom-2 z-10 inline-block px-3 py-2 text-sm font-xl text-white bg-dark rounded-lg shadow-sm">
                        {description}
                    </div>
                }
            </th>
            <td className='text-xl table-cell text-right px-6 py-2  mono'>{price}</td>
            <td className='text-xl table-cell text-left px-6 py-2  mono'>{status}</td>
        </tr>
    );
};

export default ProductRow;