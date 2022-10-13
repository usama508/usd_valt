import React from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';


import 'react-accessible-accordion/dist/fancy-example.css';

 function Example() {
    return (
        <Accordion allowMultipleExpanded allowZeroExpanded 
         >
            <AccordionItem className='bg-sky-300' >
                <AccordionItemHeading className='0'  >
                    <AccordionItemButton>
                       <span className='font-bold bg-sky-30 p-0'>Coins</span>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className='py-0 px-5 ' >
                    <ul>
                        <li className='text-xl flex pb-2 mt-2'>All Categories</li>
                        <li className='text-xl flex pb-2'>Top Gainers</li>
                        <li className='text-xl flex pb-2 '>Top Losers</li>
                        <li className='text-xl flex pb-2 '>Recently Added</li>
                        <li className='text-xl flex pb-2 '>Trending</li>
                    </ul>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className='bg-sky-300'>
                <AccordionItemHeading >
                    <AccordionItemButton >
                    <span className='font-bold  p-0 '>NFT</span>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className='py-0 px-5'>
                <ul>
                        <li className='text-xl flex pb-2 pt-1'>NFT Collection</li>
                        <li className='text-xl flex pb-2'>NFT Whale Watch</li>
                        <li className='text-xl flex pb-2 '></li>
                        <li className='text-xl flex pb-2 '>Upcoming NFT Collections</li>
                        
                    </ul>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    );
}
export default Example