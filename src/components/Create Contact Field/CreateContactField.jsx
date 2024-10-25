import {IoClose} from 'react-icons/io5';
import {Option, Select} from '@material-tailwind/react';
import {useState} from 'react';

const CreateContactField = () => {
   const [value, setValue] = useState('');

   return (
      <div className='bg-white w-[700px] mx-auto my-24 py-7 px-8 flex flex-col gap-5'>
         <div className='flex justify-between text-2xl mb-8 mt-1'>
            <h4 className='text-2xl font-bold'>Create a Contact Field</h4>
            <div>
               <IoClose />
            </div>
         </div>

         {/* Input groups */}
         <form className='flex flex-col justify-center align-middle gap-7'>
            {/* Name Input */}
            <div>
               <input
                  type='text'
                  id='name'
                  name='name'
                  placeholder='Enter your name'
                  className='mt-1 block w-full py-2 text-base px-4 border border-gray-500 rounded-md shadow-sm focus:outline-none'
               />
            </div>

            {/* Select Input */}
            <div>
            <Select
      label="Select a Field Type"
      className="w-full py-5 flex justify-center align-middle px-5 border rounded-md shadow-sm"
      value={value}
      onChange={(val) => setValue(val)}
    >
      <Option
        className="select-form-option hover:bg-[#ed9034] hover:!text-white"
        value="single-checkbox"
      >
        Single Checkbox
      </Option>
      <Option
        className="select-form-option hover:bg-[#ed9034] hover:!text-white"
        value="single-checkbox"
      >
        Single Checkbox
      </Option>
      <Option
        className="select-form-option hover:bg-[#ed9034] hover:!text-white"
        value="single-checkbox"
      >
        Single Checkbox
      </Option>
    </Select>
            </div>

            {/* Switches */}
            <div className='flex flex-col gap-5 justify-start '>
               <label className='inline-flex items-center cursor-pointer gap-5'>
                  <span className='ms-3 text-sm font-medium text-gray-500 dark:text-gray-300 pr-44'>
                     Show on Contact Profile Page
                  </span>
                  <input type='checkbox' className='sr-only peer' />
                  <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-[#ed9034]  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#ed9034]"></div>
               </label>
               <label className='inline-flex items-center cursor-pointer gap-5'>
                  <span className='ms-3 text-sm font-medium text-gray-500 dark:text-gray-300 pr-44'>
                     Show on Contact Profile Form
                  </span>
                  <input type='checkbox' className='sr-only peer' />
                  <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-[#ed9034]  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#ed9034]"></div>
               </label>
            </div>

            {/* Submit button */}
            <div className='text-center mt-6'>
               <input
                  type='submit'
                  value='Save Field'
                  className='bg-[#ed9034] px-5 py-2 text-center text-white rounded-md hover:bg-orange-500 transition cursor-pointer'
               />
            </div>
         </form>
      </div>
   );
};

export default CreateContactField;
