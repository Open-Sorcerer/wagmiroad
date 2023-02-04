import { useEffect, useState } from 'react';
import { categoryData } from '../../../pages/api/category';
import CategoryCard from '../../CategoryCard';

type Product = () => {
  name: string;
  description: string;
  category: string;
  price: number;
}

const CustomizeTab = () => {
  const [name, setName] = useState<string | undefined>();
  const [file, setFile] = useState<File | undefined>();
  const [isUploading, setIsUploading] = useState<boolean | undefined>(false);

  return (
    <>
      <div className='w-full h-fit flex flex-col justify-start gap-3 items-start'>
        <h2 className='text-xl font-bold'>Product Name</h2>
        <div className='relative'>
          <input id='item_name' type='text' className='form-control w-full sm:w-80 rounded-md px-5 py-3 shadow-md shadow-accent border-2 border-black/50 border-t-accent border-l-accent focus:border-black/50 focus:border-b-accent focus:border-r-accent focus:outline-none text-light-font transition-all peer' required onInput={(event) => setName((event.target as HTMLInputElement).value)} />
          <label htmlFor="item_name" className="absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-5 left-2 z-10 origin-[0] dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-800 peer-focus:dark:text-blue-800 peer- peer-focus:text-lg peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-valid:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 backdrop-blur-sm">Name</label>
        </div>
      </div>
      
      {/* TODO: Description Editor Widget */}

      <input type="checkbox" className="modal-toggle" />
      <label className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          {/* <h3 className="font-bold text-xl mb-2">{headerContent}</h3> */}
          {/* {isUploading ?
            <div className="flex justify-center items-center p-5">
              <Loader />
            </div>
            : */}
          <>
            <div className="form-control w-full mb-2">
              <label className="label">
                <span className="label-text">Upload your Asset</span>
              </label>
              <div className="max-w-xl">
                <label
                  className="flex justify-center w-full h-32 px-4 transition border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                  <span className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <span className="font-medium text-gray-600">
                      Drop files to Attach, or{" "}
                      <span className="text-blue-600 underline">browse</span>
                    </span>
                  </span>
                  <input
                    type="file"
                    name="file_upload"
                    className="hidden"
                    onChange={(ev) => {
                      setFile(ev.target.files?.[0]);
                      setName(ev.target.files?.[0].name)
                      console.log(ev.target.files?.[0]);
                    }}
                  />
                </label>
              </div>
            </div>
          </>
          {/* } */}
          <div className="modal-action">
            {/* <Button
              state={butttonState}
              onClick={() => {
                setIsUploading(true);
                onClick({ file, name })
              }}
              className="btn-primary"
            >
              {buttonContent}
            </Button> */}
          </div>
        </label>
      </label>
    </>
  )
}

export default CustomizeTab