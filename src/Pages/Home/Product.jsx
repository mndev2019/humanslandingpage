import React from 'react';
import { StarFilled, ShoppingCartOutlined, HeartOutlined, EyeOutlined, ReloadOutlined } from '@ant-design/icons';
import product1 from '../../assets/Image/product1.webp';

const Product = () => {
    return (
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-5 mt-3">
          {
            [1,2,3,4,5].map(()=>(
                <>
                  <div className="col-span-1">
                <div className="w-full border border-[#eae6e6] rounded-[15px] relative group">
                    <div className="icons top-[8px] right-4 absolute translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="flex flex-col items-center bg-white border border-gray-300 rounded-lg shadow-lg">
                            <button className="p-2 hover:bg-gray-100">
                                <HeartOutlined className="text-xl text-[#666666] hover:text-[#d32300]" />
                            </button>
                            <button className="p-2 hover:bg-gray-100 border-t border-b">
                                <EyeOutlined className="text-xl text-[#666666] hover:text-[#d32300]" />
                            </button>
                            <button className="p-2 hover:bg-gray-100">
                                <ReloadOutlined className="text-xl text-[#666666] hover:text-[#d32300]" />
                            </button>
                        </div>
                    </div>
                    <img src={product1} alt='Product' className="w-full rounded-[10px]" />

                    <div className="mt-3 p-4">

                        <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                                <StarFilled key={i} className="star" />
                            ))}
                            <span className="text-gray-500 text-sm ml-2">(1 reviews)</span>
                        </div>


                        <p className='text-[20px] font-[600] mt-2 '>
                            Natural Dry Cat Food
                        </p>


                        <div className="mt-2">
                            <span className="textpurple text-[24px] font-bold">$306.80</span>
                            <span className="text-gray-400 text-[18px] line-through ml-3">$509.60</span>
                        </div>


                        <div className="cart flex items-center justify-between mt-4">
                            <div className="flex items-center border border-gray-300 rounded">
                                <button className="px-3 py-1 text-lg">-</button>
                                <span className="px-4 py-1 text-lg">1</span>
                                <button className="px-3 py-1 text-lg">+</button>
                            </div>

                            <button className="bgpurple text-white p-3 rounded-full shadow-lg">
                                <ShoppingCartOutlined className="text-2xl" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
                </>
            ))
          }
        </div>
    );
};

export default Product;
