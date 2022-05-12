import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { BiChevronDown } from 'react-icons/bi';
/* eslint-disable-next-line */
export interface SelectProps {
  items: string[];
}

export function Select({ SHOW_ITEMS }) {
  const [selected, setSelected] = useState(SHOW_ITEMS[0]);

  return (
    <div className="w-fit z-50">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-40 py-[.88rem] pl-3 pr-10 text-left bg-white  rounded-lg shadow-md cursor-default ring-black/20 ring-1 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate font-semibold">{selected}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <BiChevronDown className="w-5 h-5 opacity-60"></BiChevronDown>
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-fit min-w-full mt-2 overflow-auto text-base bg-white rounded-lg shadow-lg max-h-64 ring-1 ring-black ring-opacity-5  focus:outline-none sm:text-sm">
              {SHOW_ITEMS.map((value, valueIdx) => (
                <Listbox.Option
                  key={valueIdx}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-4 px-4 ${
                      active
                        ? ' bg-gray-100 text-secondary cursor-pointer'
                        : 'text-gray-900'
                    }`
                  }
                  value={value}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected
                            ? 'font-bold text-secondary'
                            : 'font-semibold'
                        }`}
                      >
                        {value}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          {/* <CheckIcon className="w-5 h-5" aria-hidden="true" /> */}
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

export default Select;
