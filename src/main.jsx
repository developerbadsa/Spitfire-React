import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import CreateContactField from './components/Create Contact Field/CreateContactField';
import ManageContactField from './components/Manage Contact Field/ManageContactField';

createRoot(document.getElementById('root')).render(
   <StrictMode>
      <div className='bg-gray-200 h-full w-full'>
         <div>Header</div>

         <ManageContactField></ManageContactField>
         <CreateContactField></CreateContactField>
         <div>footer</div>
      </div>
   </StrictMode>
);
