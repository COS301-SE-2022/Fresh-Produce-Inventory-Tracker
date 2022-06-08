import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

/* eslint-disable-next-line */
export interface UserModalProps {
  isOpen?: boolean;
  closeUserModal?: any;
  openUserModal?: any;
  title?: string;
  description?: string;
}

const upload_url = 'http://localhost:3333/api/image/uploadone';
const freshness_url = 'http://localhost:3333/api/calcfreshness/predict';
const add_task = 'http://localhost:3333/api/tasks/createtask'

export function UserModal(props: UserModalProps) {
  const [image, setImage] = useState(null);

  const onImageChange = (e) => setImage(e.target.files[0]);

  const uploadImage = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('id','1');
    form.append('image', image);

    const response = await fetch(upload_url, {
      method: 'POST',
      body: form,
    });

    if (response.status == 201) {
      alert("Image has been uploaded successfully");
      checkFreshness();
      props.closeUserModal();
      return;
    }

    if (response.status == 500) {
      checkFreshness();
      alert('Error, please make sure you have uploaded valid image format.');
    }
  };

  const checkFreshness = async () => {
    const form = new FormData();
    form.append('id',"1");
    form.append('image', image);

    const response = await fetch(freshness_url, {
      method: 'POST',
      body: form,
    });

    let prediction  = await response.json();

    if (response.status == 201) {
      prediction = Object.values(prediction);
      alert('This apple is a "' + prediction[0] + '" with a prediction accuracy of ' + prediction[2] + '%');
      if(prediction[0] == "rotten apples")
      {
        createTask();
      }
      console.log(prediction);
      props.closeUserModal();
      return;
    }

    if (response.status == 500) {
      alert('Error, please make sure you have uploaded valid image format.');
    }
  };

  const createTask = async() => {
    const form = new FormData();
    form.append('id',"1");
    form.append('message', "A rotten apple has been found, resolve asap!");

    const response = await fetch(add_task, {
      method: 'POST',
      body: form,
    });

    if (response.status == 201) {
      console.log("Task has been added to user page");
      return;
    }

    if (response.status == 500) {
      alert('Error, please make sure you have uploaded valid image format.');
    }
  }

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
                      onSubmit={uploadImage}
                      className="flex items-center justify-between w-full"
                    >
                      <label className="block">
                        <span className="sr-only">Choose profile photo</span>
                        <input
                          required
                          onChange={onImageChange}
                          type="file"
                          className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 "
                        />
                      </label>
                      <button
                        type="submit"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        Upload
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
