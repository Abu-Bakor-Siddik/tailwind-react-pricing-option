import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingFeature = ({feature}) => {
    return (
        <p className='flex gap-2 mt-1'><CircleCheckBig></CircleCheckBig> {feature}</p>
    );
};

export default PricingFeature;