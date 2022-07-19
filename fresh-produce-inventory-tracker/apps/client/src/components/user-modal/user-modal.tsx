/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dialog, Transition } from '@headlessui/react';
import { Fragment} from 'react';
import Router from 'next/router'

/* eslint-disable-next-line */
export interface UserModalProps {
  isOpen?: boolean;
  closeUserModal?: any;
  openUserModal?: any;
  title?: string;
  description?: string;
}

const upload_Name = 'http://localhost:3333/api/profile/editname';
const upload_Surname = 'http://localhost:3333/api/profile/editsurname';
const upload_Email = 'http://localhost:3333/api/profile/editemail';
const upload_Bio = 'http://localhost:3333/api/profile/editbio';
const upload_Vis = 'http://localhost:3333/api/profile/editvisibility';



export function UserModal(props: UserModalProps) {

  const updateInfo = async (event) => {
    event.preventDefault()

    const data = {
      Name: event.target.name.value,
      Surname: event.target.surname.value,
      Email: event.target.email.value,
      Bio: event.target.bio.value,
      Visibility: event.target.visibility.value
    }

    if(data.Name != "")
    {
      const form = "id=1&name=" + data.Name;

      const response = await fetch(upload_Name, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        body: form,
      });

      if (response.status == 201) {
        window.location.replace('../user');
        props.closeUserModal();
        return;
      }

      if (response.status == 500) {
        alert('Error, please make sure you have uploaded valid image format.');
      }
    }
    if(data.Surname != "")
    {
      const form = new FormData();
      form.append('id','1');
      form.append('surname', data.Surname);

      const response = await fetch(upload_Surname, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        body: form,
      });

      if (response.status == 201) {
        props.closeUserModal();
        return;
      }

      if (response.status == 500) {
        alert('Error, please make sure you have uploaded valid image format.');
      }
    }
    if(data.Email != "")
    {
      const form = new FormData();
      form.append('id','1');
      form.append('email', data.Email);

      const response = await fetch(upload_Email, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        body: form,
      });

      if (response.status == 201) {
        props.closeUserModal();
        return;
      }

      if (response.status == 500) {
        alert('Error, please make sure you have uploaded valid image format.');
      }
    }
    if(data.Bio != "")
    {
      const form = new FormData();
      form.append('id','1');
      form.append('bio', data.Bio);

      const response = await fetch(upload_Bio, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        body: form,
      });

      if (response.status == 201) {
        props.closeUserModal();
        return;
      }

      if (response.status == 500) {
        alert('Error, please make sure you have uploaded valid image format.');
      }
    }
    if(data.Visibility != "")
    {
      const form = new FormData();
      form.append('id','1');
      form.append('visibility', data.Visibility);

      const response = await fetch(upload_Vis, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        body: form,
      });

      if (response.status == 201) {
        props.closeUserModal();
        return;
      }

      if (response.status == 500) {
        alert('Error, please make sure you have uploaded valid image format.');
      }
    }
    
    alert("Update successfull");
    Router.reload();
  };

  return (
    <>
      <div className="flex items-center justify-center ">
        {/* <button
          type="button"
          onClick={props.openUserModal}
          className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button> */}
      </div>

      <Transition appear show={props.isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={props.closeUserModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-lg p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {props.title}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">{props.description}</p>
                  </div>

                  <div className="mt-4">
                    <form
                      onSubmit={updateInfo}
                      className="flex items-center justify-between w-full"
                    >
                      <label className="block">
                        <span>Name</span>
                        <input
                          id="name"
                          type="text"
                          className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 "
                        />
                      </label>
                      <label className='block'>
                        <span>Surname</span>
                        <input id="surname" type='text' className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 "></input>
                      </label>
                      <label className='block'>
                        <span>Email</span>
                        <input id="email" type='text' className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 "></input>
                      </label>
                      <label className='block'>
                        <span>Bio</span>
                        <input id="bio" type='text' className="block w-full h-3/6 text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 "></input>
                      </label>
                      <label className='block'>
                        <span>Visibility</span>
                        <input id="visibility" type='text' className="block w-full h-3/6 text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 "></input>
                      </label>
                      <button
                        type="submit"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        Update
                      </button>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default UserModal;
