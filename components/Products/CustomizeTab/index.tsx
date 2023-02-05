import {
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';


const CustomizeTab = (props: any) => {
  const { product, setProduct } = props;
  const [description, setDescription] = useState<string | undefined>();
  const [file, setFile] = useState<File | undefined>();
  let fileInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    setProduct(() => {
      return {
        ...product,
        description: description as string,
        payload: file as File
      }
    }
    )
  }, [description, file, product, setProduct])
  return (
    <>
      <div className='w-full h-fit flex flex-col justify-start gap-3 items-start'>
        <h2 className='text-xl font-bold'>Brief Description</h2>
        <div className='relative w-full'>
          <textarea
            id='item_name'
            rows={5}
            className='w-full sm:w-2/3 xl:w-1/2 rounded-md px-5 py-3 shadow-md shadow-accent border-2 border-black/50 border-t-accent border-l-accent focus:border-black/50 focus:border-b-accent focus:border-r-accent focus:outline-none text-light-font transition-all peer'
            required
            onInput={(event) => setDescription((event.target as HTMLInputElement).value)} />
          <label htmlFor="item_name" className="absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-5 left-2 z-10 origin-[0] dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-800 peer-focus:dark:text-blue-800 peer- peer-focus:text-lg peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-valid:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 backdrop-blur-sm">Product Description</label>
        </div>
      </div>

      {/* TODO: Description Editor Widget */}


      <>
        <div className="form-control flex flex-col justify-start gap-3 w-full sm:w-2/3 xl:w-1/2">
          <label className="label">
            <h2 className='text-xl font-bold'>Upload</h2>
          </label>
          <div className="w-full h-fit bg-white shadow-md shadow-accent flex justify-center items-center relative divide-y-2 divide-dashed">
            <label
              className='flex flex-col justify-center items-center w-full h-40 px-4 transition border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none'>
              <div className="w-full flex flex-row justify-center items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-600" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <span className="font-medium text-gray-600">
                  Drop files to Attach, or{" "}
                  <span className="text-blue-600 underline">browse</span>
                </span>
              </div>
              <input
                type="file"
                ref={fileInputRef}
                name="file_upload"
                className="hidden"
                onChange={(ev) => {
                  setFile(ev.target.files?.[0]);
                  console.log(ev.target.files?.[0]);
                }}
              />
            </label>
            {file && <div className="w-full absolute bottom-0 px-4 py-2 flex flex-row justify-center items-center gap-2">
              <FontAwesomeIcon icon={faXmark} size='2x' className='h-6 w-6' onClick={() => {
                setFile(undefined);
                if (fileInputRef.current) {
                  fileInputRef.current.value = "";
                }
              }} />
              <span className='font-medium text-gray-600 truncate'>
                {file?.name}
              </span>
            </div>}
          </div>
        </div>
      </>
    </>
  )
}

export default CustomizeTab