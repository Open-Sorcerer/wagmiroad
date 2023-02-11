import { NextPage } from 'next';
import { useState } from 'react';
import NewPdtBtn from '../../components/Products/NewPdtBtn/index';
import { statsData } from '../api/stats';
import ProductRow from '../../components/Products/ProductRow';
import StatCard from '../../components/Products/StatCard';
import clientPromise from "../../lib/mongodb";

const Products: NextPage = ({productsData}:any) => {
    const [products] = useState(productsData);
    const [stats] = useState(statsData);
    const columns = [
        { id: "position", label: "Sl No.", align: "left" },
        { id: "title", label: "Title", align: "left" },
        { id: "price", label: "Price", align: "right" },
        { id: "status", label: "Status", align: "left" },
    ];
    return (
        <div className='w-full h-full flex flex-col justify-evenly items-center gap-10 p-10'>
            <div className='w-full h-full flex flex-col sm:flex-row justify-between items-center'>
                <h1 className='text-7xl'>Products</h1>
                <NewPdtBtn />
            </div>
            <div className='w-full h-40 flex justify-evenly items-center gap-5'>
                {
                    stats.map(item => {
                        return <StatCard key={item.label} {...item} />
                    })
                }
            </div>
            <table className='w-full h-full table overflow-auto table-auto border-separate border border-slate-400 text-sm text-left bg-white text-black'>
                <thead className="table-header-group text-xl">
                    <tr className='table-row'>
                        {columns.map((column) => (
                            <th
                                scope="col"
                                className={"table-cell text-left px-6 py-3 bg-black text-white text-" + column.align}
                                key={column.id}
                            >
                                {column.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {products.map((item:any, idx: any) => {
                        return <ProductRow key={item.id} idx={idx} {...item} />
                    })}
                </tbody>
            </table>
        </div>
    )
}

export async function getServerSideProps() {
    try {
        let res = await fetch("http://localhost:3000/api/posts", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          let products = await res.json();

        return {
            props: { productsData: JSON.parse(JSON.stringify(products.data)) },
        };
    } catch (e) {
        console.error(e);
    }
}

export default Products;