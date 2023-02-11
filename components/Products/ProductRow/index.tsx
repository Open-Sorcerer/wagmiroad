import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactNode, useState } from 'react';

interface PdtProps {
    id: number;
    idx: number;
    children?: ReactNode;
    title: string;
    description?: string;
    price?: number;
    status: string;
}

const ProductRow = (props: PdtProps) => {
    const { title, description, price, status, idx } = props;
    const [isInfo, setIsInfo] = useState(false);
    return (
        <tr className={`table-row ${idx%2&&"bg-slate-200"}`}>
            <td className='table-cell px-6 py-2  mono text-xl font-semibold'>{idx+1}</td>
            <th scope="row" className='relative flex flex-row  px-6 py-2 font-medium text-xl whitespace-nowrap justify-between'>{title}
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
            <td className='text-xl table-cell px-6 py-2 mono font-semibold'>${price?.toFixed(2)}</td>
            <td className='text-xl table-cell px-6 py-2 mono'>{status}</td>
        </tr>
    );
};

export default ProductRow;