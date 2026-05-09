import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    const {name,price,description,features}=pricing;
    return (
        <div className='flex flex-col border bg-amber-200 rounded-2xl p-4'>
            {/* Card Header */}
            <div>
                <h1 className='text-7xl'>{name}</h1>
                <h4 className='text-3xl'>{price}</h4>
            </div>
            {/* Card Body */}
            <div className='bg-amber-400 p-2 rounded-2xl mt-5 flex-1'>
                <p className='mb-5'>{description}</p>
                {
                    features.map((feature,index) => <PricingFeature key={index} feature={feature} ></PricingFeature>)
                }
            </div>
            <button className="btn w-full">Subscribe</button>

        </div>
    );
};

export default PricingCard;