import {DocumentIcon} from '@heroicons/react/24/solid';
import {ArrowDownTrayIcon} from '@heroicons/react/24/outline';
import {Card, IconButton, Typography} from '@material-tailwind/react';

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
    Action: 'Default',
 },
];

export function ManageContactFieldTable() {
   return (
      <Card className='h-full w-[80%] overflow-scroll'>
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
                              {name}
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
                                 <IconButton variant='text' size='sm'>
                                    <DocumentIcon className='h-4 w-4 text-gray-900' />
                                 </IconButton>
                                 <IconButton variant='text' size='sm'>
                                    <ArrowDownTrayIcon
                                       strokeWidth={3}
                                       className='h-4 w-4 text-gray-900'
                                    />
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
