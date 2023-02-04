import { NextPage } from 'next';
import { useState } from 'react';
import Breadcrumb from '../../../components/Breadcrumb';
import BasicTab from '../../../components/Products/BasicTab';
import CustomizeTab from './../../../components/Products/CustomizeTab/index';


const CreateProduct: NextPage = () => {
    const [activeTab, setActiveTab] = useState<number | undefined>(0);
    return (
        <div className='w-full h-screen flex flex-col justify-start items-start gap-10 p-10'>
            <div className='w-full h-fit'>
                <h1 className='text-5xl'>
                    Awesome ! Create your Product here...
                </h1>
            </div>
            <Breadcrumb setActiveTab={setActiveTab} tabItems={["Basic", "Customize"]} />
            <hr className='border-black border-b-2' />
            {
                activeTab === 0 ? <BasicTab /> : <CustomizeTab />
            }
        </div>
    )
}


export default CreateProduct;