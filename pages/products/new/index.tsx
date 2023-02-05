import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Breadcrumb from '../../../components/Breadcrumb';
import BasicTab from '../../../components/Products/BasicTab';
import CustomizeTab from './../../../components/Products/CustomizeTab';
import Button from './../../../components/Button';

type Product = () => {
    name: string;
    description: string;
    category: string;
    price: number;
    payload: File;
}

const CreateProduct: NextPage = () => {
    const [activeTab, setActiveTab] = useState<number>(0);
    const [product, setProduct] = useState<Product | undefined>();
    useEffect(() => {
        console.log(product);
    }, [product]);
    return (
        <div className='w-full h-screen flex flex-col justify-start items-start gap-10 p-10'>
            <div className='w-full h-fit'>
                <h1 className='text-5xl'>
                    Awesome ! Create your Product here...
                </h1>
            </div>
            <div className='w-full h-fit flex justify-between'>
                <Breadcrumb setActiveTab={setActiveTab} tabItems={["Basic", "Customize"]} />
                <div className='w-full h-full flex justify-end items-center gap-3'>
                    <Button onClick={() => activeTab && setActiveTab(activeTab - 1)}>Back</Button>
                    <Button onClick={() => !activeTab && setActiveTab(activeTab + 1)}>Next</Button>
                </div>
            </div>
            {
                activeTab === 0 ?
                    <BasicTab
                        product={product}
                        setProduct={setProduct}
                    />
                    :
                    <CustomizeTab
                        product={product}
                        setProduct={setProduct}
                    />
            }
        </div>
    )
}


export default CreateProduct;