import React, { useState } from 'react'
import { RampInstantSDK } from '@ramp-network/ramp-instant-sdk'

const OverLay = () => {

    const [walletAddress, setwalletAddress] = useState('');
    const [emailAddress, setemailAddress] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        try {
            new RampInstantSDK({
                userEmailAddress: emailAddress,
                userAddress: walletAddress,
                hostAppName: 'NoCap Meta App',
                hostLogoUrl: 'https://rampnetwork.github.io/assets/misc/test-logo.png',
            }).on('*', event => console.log(event)).show();
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className='h-screen w-full flex items-center'>
            <form onSubmit={handleClick} className='mx-auto flex flex-col items-center border border-gray-300 shadow-lg p-8 h-96 justify-between'>
                <div>
                    <div className='flex items-center text-gray-700 font-semibold gap-2'>
                        <p>User Wallet Address : </p>
                        <input required placeholder='e.g. 0xa4e7ca039hkksdc7b5d20c774d8bbb98d313dee' className='border-b border-gray-400 p-4 my-4 w-96' value={walletAddress} onChange={(e)=>setwalletAddress(e.target.value)} />
                    </div>
                    <div className='flex items-center text-gray-700 font-semibold gap-3'>
                        <p>User Email Address : </p>
                        <input required placeholder='e.g. test@example.com' className='border-b border-gray-400 p-4 my-4 w-96' value={emailAddress} onChange={(e)=>setemailAddress(e.target.value)} />
                    </div>
                </div>
                <button type='submit' className='mx-auto rounded bg-green-500 text-white text-semibold px-3 py-2'>
                    click here
                </button>
            </form>
        </div>
    )
}

export default OverLay


/*
// Sent when a purchase is created, but not yet fulfilled
{
    type: 'PURCHASE_CREATED',
    payload: {
      purchase: IPurchase,
      purchaseViewToken: string,
      apiUrl: string,
    },
    widgetInstanceId: string,
  }
  
  // Sent when the widget is done fetching internal configuration and can be displayed.
  // This is when the loader hides.
  // NOTE: it's done automatically, you can call `.show()` immediately without waiting for this event
  {
    type: 'WIDGET_CONFIG_DONE',
    payload: null,
    widgetInstanceId: string,
  }
  */