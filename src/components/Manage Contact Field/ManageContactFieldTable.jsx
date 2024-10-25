import {DocumentIcon} from '@heroicons/react/24/solid';
import {ArrowDownTrayIcon} from '@heroicons/react/24/outline';
import {Button, Card, IconButton, Typography} from '@material-tailwind/react';
import {FaRegEdit} from 'react-icons/fa';
import {IoMdCloseCircleOutline} from 'react-icons/io';

const TABLE_HEAD = ['Name', 'Field Type', 'Action'];

const TABLE_ROWS = [
   {
      name: 'Rahim Badsa',
      FieldType: 'CompanyINC',
      Action: 'Default',
   },
   {
      name: 'Dulufa',
      FieldType: 'Hi Swqure',
      Action: 'Defaults',
   },
];

export function ManageContactFieldTable() {
   return (
      <Card className='h-full w-[85%] overflow-hidden mx-auto '>
         <div className=' text-end'>
            <Button
               size='sm'
               className='bg-[#ed9034] py-3 mr-6 rounded-lg mt-4'>
               + Create a Field
            </Button>
         </div>
         <table className='w-full min-w-max table-auto text-left'>
            <thead>
               <tr>
                  {TABLE_HEAD.map(head => (
                     <th key={head} className='p-4 pt-10'>
                        <Typography
                           variant='small'
                           color='blue-gray'
                           className='font-bold leading-none'>
                           {head}
                        </Typography>
                     </th>
                  ))}
               </tr>
            </thead>
            <tbody>
               {TABLE_ROWS.map(({name, FieldType, Action}) => {
                  return (
                     <tr key={name}>
                        <td className='p-4'>
                           <Typography
                              variant='small'
                              color='blue-gray'
                              className='font-bold'>

                              {Action === 'Default' ? name : <span className='text-[#ed9034]'>{name}</span>}

                           </Typography>
                        </td>
                        <td className='p-4'>
                           <Typography
                              variant='small'
                              className='font-normal text-gray-600'>
                              {FieldType}
                           </Typography>
                        </td>
                        <td className='p-4'>
                           {Action == 'Default' ? (
                              'Default'
                           ) : (
                              <div className='flex items-center gap-2'>
                                 <IconButton
                                    variant='text'
                                    className='bg-[#ed9034] hover:bg-[#bc7a38] rounded-full text-white'
                                    size='sm'>
                                    <FaRegEdit />
                                 </IconButton>
                                 <IconButton
                                    variant='text'
                                    className='bg-[#f1416c] hover:bg-[#b03453] rounded-full text-white'
                                    size='sm'>
                                    <IoMdCloseCircleOutline />
                                 </IconButton>
                              </div>
                           )}
                        </td>
                     </tr>
                  );
               })}
            </tbody>
         </table>
      </Card>
   );
}
