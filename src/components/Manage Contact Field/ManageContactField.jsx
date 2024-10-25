import React from 'react';
import {ManageContactFieldTable} from './ManageContactFieldTable';

const ManageContactField = () => {
   return (
      <div>
         <div className='bg-[#1d303d] h-32 relative w-full p-4'> </div>
         <div className='container mx-auto'>
            <div className='-mt-20'>
               <ManageContactFieldTable></ManageContactFieldTable>
            </div>
         </div>
      </div>
   );
};

export default ManageContactField;
