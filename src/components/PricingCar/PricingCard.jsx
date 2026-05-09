import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    const {name,price,description,features}=pricing;
    return (
        <div className='border bg-amber-200 rounded-2xl p-4'>
            {/* Card Header */}
            <div>
                <h1 className='text-7xl'>{name}</h1>
                <h4 className='text-3xl'>{price}</h4>
            </div>
            {/* Card Body */}
            <div className='bg-amber-50 p-2 rounded-2xl mt-5'>
                <p className='mb-5'>{description}</p>
                <div className='bg-amber-300 p-2 rounded-2xl'>

                {
                    features.map((feature,index) => <PricingFeature key={index} feature={feature} ></PricingFeature>)
                }
                </div>
            </div>
        </div>
    );
};

export default PricingCard;