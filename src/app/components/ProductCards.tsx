import React from 'react'
import Image from 'next/image'

const ProductCards = () => {
  return (
    <div>
      <h1 className='text-center text-xl bg-black text-white font-bold py-5 sm:text-center lg:text-center'>Products Cards </h1>
      
      <div  className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 justify-items-center '>
        {/* card 1 */}
        
           <div className=' bg-black border-2  rounded-lg   max-w-xs  border-[#f86c35]'>
           
            <Image src="/pic1.jpg" alt='card1' width={300} height={200}  className=' mx-2 my-2 rounded-2xl max-sm:mx-2'/>
            <p className='py-2 text-center text-lg text-white'>Sophia T-Pink 2 Pieces Handbag</p>
            <p className=' py-2 text-center text-lg text-white'>Rs.2,150</p>
             <button className='text-center text-white py-4 px-6 mx-[20%] my-4 w-[200px]  border-2  border-[#f86c35] rounded-xl hover:bg-[#f86c35]'>Buy Now</button>
        </div>
        {/* card 2 */}

            <div className=' bg-black border-2  rounded-lg   max-w-xs  border-[#f86c35]'>
            <Image src="/pic2.jpg" alt='card2' width={300} height={200}  className=' mx-2 my-2 rounded-2xl max-sm:mx-2'/>
            <p className='py-2 text-center text-lg text-white'>3 pieces Ladies Hand bag</p>
            <p className=' py-2 text-center text-lg text-white'>Rs.2,500</p>
             <button className='text-center text-white py-4 px-6 mx-[20%] my-4 w-[200px]  border-2  border-[#f86c35] rounded-xl hover:bg-[#f86c35]'>Buy Now</button>
        </div>
        {/* card3 */}
        
            <div className=' bg-black border-2 rounded-lg    max-w-xs  border-[#f86c35]'>
            <Image src="/pic3.jpg" alt='card3' width={300} height={200}  className=' mx-2 my-2 rounded-2xl max-sm:mx-2'/>
            <p className='py-2 text-center text-lg text-white'>Elegant 4-Piece Women&#39;s Bag Set</p>
            <p className=' py-2 text-center text-lg text-white'>Rs.2,750</p>
             <button className='text-center text-white py-4 px-6 mx-[20%] my-4 w-[200px]  border-2  border-[#f86c35] rounded-xl hover:bg-[#f86c35]'>Buy Now</button>
        </div>
      </div>

    </div>
  )
}

export default ProductCards
