import React from 'react'
import { RampInstantSDK } from '@ramp-network/ramp-instant-sdk'

const OverLay = () => {

    const handleClick = () => {
        try {
            new RampInstantSDK({
                swapAsset: 'ETH',
                swapAmount: "10",
                userEmailAddress: 'test@example.com',
                userAddress: '0xa4e7ca039fcedd7c7b5d20c774d8bbb98d313dee',
                hostAppName: 'NoCap Meta App',
                hostLogoUrl: 'https://rampnetwork.github.io/assets/misc/test-logo.png',
            }).on('*', event => console.log(event)).show();
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className='h-screen w-full flex items-center'>
            <button onClick={handleClick} className='mx-auto rounded bg-green-500 text-white text-semibold px-3 py-1'>
                click here
            </button>
        </div>
    )
}

export default OverLay