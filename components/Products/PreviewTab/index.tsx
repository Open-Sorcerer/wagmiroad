/* eslint-disable @next/next/no-img-element */
import { useAccount, useBalance } from "wagmi";
import { Button } from "../..";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const PreviewTab = (props: any) => {
  const { hooks } = props;
  const { product } = hooks;
  const [{ data: accountData, loading: accountLoading }] = useAccount();
  // const [{ data: balanceData, loading: balanceLoading }] = useBalance({
  //   addressOrName: accountData?.address,
  //   watch: true,
  // });

  // const loading = (accountLoading || balanceLoading) && !balanceData;
  return (
    <div className='w-full h-full flex flex-col items-start bg-white'>
      <div className='w-full h-full flex flex-row justify-start items-center outline-dashed rounded-md'>
        {/* <div
          className='h-full w-3/5 block shrink justify-start items-center bg-contain bg-no-repeat border-r-2'
          style={{ backgroundImage: "url(/images/BlueGradient.png)" }}>
        </div> */}
        <img src="/images/BlueGradient.png" alt="Product" className="h-full border-r-2 border-dashed" />
        <div
          className='w-full h-full flex flex-col justify-start items-start gap-5 p-5 text-black overflow-y-scroll'>
          <Button onClick={() => { }} className="w-full h-fit">
            <div className='relative flex flex-col items-start justify-start gap-5'>
              <div className='flex flex-row w-5/6 flex-wrap text-left'>
                <p className='text-4xl lg:text-6xl font-bold'>{product?.name}</p>
              </div>
              <h6 className="text-xl">Author: {accountData?.address}</h6>
              <h4 className="text-5xl">$ {product?.price}</h4>
            </div>
            <div className='absolute right-2 top-1 text-md font-bold flex flex-row justify-start items-center gap-2'>
              <FontAwesomeIcon icon={faCartShopping} className="w-6 h-6" />
              BUY NOW
            </div>
          </Button>

          <h3 className='text-lg'>{product?.description}</h3>
        </div>
      </div>
    </div>
  )
}

export default PreviewTab