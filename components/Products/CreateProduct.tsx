import React from 'react'
import { useState } from 'react';
import { productsData } from '../../pages/api/pdts';
import { StatCard } from './StatCard';
import { ProductRow } from './ProductRow';

const CreateProduct = () => {
    const [products] = useState(productsData);
    const stats = [
        {
            label: 'Total Revenue',
            desc: 'Your gross sales from all products, excluding refunds and chargebacks.',
            value: '$0'
        },
        {
            label: 'Customers',
            desc: 'The number of unique customers across all your products .',
            value: '0'
        },
        {
            label: 'Active Members',
            desc: 'The number of customers who have an active subscription.',
            value: '0'
        },
        {
            label: 'MRR',
            desc: 'Your expected monthly recurring revenue based on active subscribed members.',
            value: '$0'
        },
    ]
    const columns = [
        { id: "position", label: "Sl No.", minWidth: 50 },
        { id: "avatar", label: " ", minWidth: 50 },
        { id: "title", label: "Title", minWidth: 170 },
        { id: "price", label: "Price", minWidth: 100 },
        { id: "status", label: "Status", minWidth: 100 },
      ];
    return (
        <div className='w-full h-full flex flex-col justify-evenly items-center gap-10 p-10'>
            <h1 className='text-7xl absolute top-10'>Products</h1>
            <div className='w-full h-40 flex justify-evenly items-center gap-5'>
                {stats.map(item => {
                    return <StatCard key={item.label} {...item} />
                })
                }
            </div>
            <div className='w-full h-full table overflow-x-auto'>
            <div className="table-header-group ">
                  <div className="table-row">
                    {columns.map((column) => (
                      <div
                        className="table-cell font-serif px-4 py-4 bg-black text-white"
                        key={column.id}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </div>
                    ))}
                  </div>
                </div>
                {products.map(item => {
                    return <ProductRow key={item.id} {...item} />
                })}
            </div>
        </div>
    )
}


export default CreateProduct