import { useEffect, useState } from 'react';
import { categoryData } from '../../../pages/api/category';
import CategoryCard from '../../CategoryCard';

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

type Product = () => {
  name: string;
  description: string;
  category: string;
  price: number;
}
const BasicTab = () => {
  const [name, setName] = useState<string | undefined>();
  const [description, setDescription] = useState<string | undefined>();
  const [category, setCategory] = useState<Category | undefined>();
  const [price, setPrice] = useState<number | undefined>();
  const [categories] = useState(categoryData);
  const [product, setProduct] = useState<Product | undefined>();
  useEffect(() => {
      // new product constructor
      setProduct(() => {
          return {
              name: name as string,
              description: description as string,
              category: category as unknown as string,
              price: price as number
          }
      }
      )
  }, [category, description, name, price])
  return (
    <>
      <div className='w-full h-fit flex flex-col justify-start gap-3 items-start'>
        <h2 className='text-xl font-bold'>Product Name</h2>
        <div className='relative'>
          <input id='item_name' type='text' className='w-full sm:w-80 rounded-md px-5 py-3 shadow-md shadow-accent border-2 border-black/50 border-t-accent border-l-accent focus:border-black/50 focus:border-b-accent focus:border-r-accent focus:outline-none text-light-font transition-all peer' required onInput={(event) => setName((event.target as HTMLInputElement).value)} />
          <label htmlFor="item_name" className="absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-5 left-2 z-10 origin-[0] dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-800 peer-focus:dark:text-blue-800 peer- peer-focus:text-lg peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-valid:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 backdrop-blur-sm">Name</label>
        </div>
      </div>
      <div className='w-full h-full flex flex-col justify-start gap-3 items-start'>
        <h2 className='text-xl font-bold'>Type</h2>
        <fieldset className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10'>
          {categories.map(item => {
            return (
              <CategoryCard key={item.id} {...item} category={category} setCategory={setCategory} />
            )
          })}
        </fieldset>
      </div>

      <div className='w-full h-full flex flex-col justify-start gap-3 items-start'>
        <h2 className='text-xl font-bold'>Price</h2>
        <div className='w-full'>
          <div id='item_name' className='w-full bg-white sm:w-80 rounded-md px-5 py-3 shadow-md shadow-accent border-2 border-black/50 border-t-accent border-l-accent focus-within:border-black/50 focus-within:border-b-accent focus-within:border-r-accent focus-within:outline-none text-light-font transition-all flex justify-start gap-3'>
            <span className='text-xl font-bold'>$</span>
            <input type='number' className='w-full outline-none' placeholder='Amount' required onInput={(event) => setPrice(parseInt((event.target as HTMLInputElement).value))} />
          </div>
        </div>
      </div>
    </>
  )
}

export default BasicTab