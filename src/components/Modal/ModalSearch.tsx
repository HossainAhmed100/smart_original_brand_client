'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useModalSearchContext } from '@/context/ModalSearchContext'
import usePrCategory from '@/hooks/useCategory';

const ModalSearch = () => {
    const { isModalOpen, closeModalSearch } = useModalSearchContext();
    const [searchKeyword, setSearchKeyword] = useState('');
    const router = useRouter()
    
    const [prCategory] = usePrCategory();

    const handleSearch = (value: string) => {
        router.push(`/search-result?query=${value}`)
        closeModalSearch()
        setSearchKeyword('')
    }

    return (
        <>
            <div className={`modal-search-block`} onClick={closeModalSearch}>
                <div
                    className={`modal-search-main md:p-10 p-6 rounded-[32px] ${isModalOpen ? 'open' : ''}`}
                    onClick={(e) => { e.stopPropagation() }}
                >
                    <div className="form-search relative">
                        <Icon.MagnifyingGlass
                            className='absolute heading5 right-6 top-1/2 -translate-y-1/2 cursor-pointer'
                            onClick={() => {
                                handleSearch(searchKeyword)
                            }}
                        />
                        <input
                            type="text"
                            placeholder='Searching...'
                            className='text-button-lg h-14 rounded-2xl border border-line w-full pl-6 pr-12'
                            value={searchKeyword}
                            onChange={(e) => setSearchKeyword(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSearch(searchKeyword)}
                        />
                    </div>
                    <div className="keyword mt-8">
                        <div className="heading5">Feature keywords</div>
                        <div className="list-keyword flex items-center flex-wrap gap-3 mt-4">
                            {prCategory.map(item => (
                                <div
                                    key={item._id}
                                    className={`item px-4 py-1.5 border border-line rounded-full cursor-pointer duration-300 hover:bg-[#fc8934] hover:text-white`}
                                    onClick={() => handleSearch(item.path)}
                                >
                                    {item.label}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalSearch