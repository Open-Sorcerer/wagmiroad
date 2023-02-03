import { NextPage } from 'next';
import { useState } from 'react';

enum Category {
    'Course or Tutorial',
    'Software Credits',
    'E book',
    'Newsletter',
    'PodCast',
    'Audiobook',
    'Membership',
    'Physical Good',
    'Service',
    'Royalty',
    'Other'
}

interface Product {
    name: string;
    description: string;
    category: string;
    price: number;
}

const CreateProduct: NextPage = () => {
    const [name, setName] = useState<string | undefined>();
    const [description, setDescription] = useState<string | undefined>();
    const [category, setCategory] = useState<Category | undefined>();
    const [price, setPrice] = useState<number | undefined>();
    return (
        <div className='w-full h-full flex flex-col justify-start items-start gap-5 p-5'>
            <div className='w-full h-full flex flex-col justify-start items-start gap-2'>
                <h1 className='text-5xl'>
                    Awesome ! Create your Product here...
                </h1>
                <input className='bg-white border-black border-2 rounded-md px-3 py-2'>
                    
                </input>
            </div>

        </div>
    )
}


export default CreateProduct;