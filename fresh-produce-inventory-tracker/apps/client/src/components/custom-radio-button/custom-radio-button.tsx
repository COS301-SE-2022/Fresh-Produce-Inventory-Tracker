import { useState } from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
const types: string[] = ['Fresh Produce', 'Poultry/Meat', 'Pastries'];
import { RadioGroup } from '@headlessui/react';
import { radioItem } from '../../interfaces';

/* eslint-disable-next-line */
export interface CustomRadioButtonProps {
  items: radioItem[];
  selected: any;
  setSelected: any;
}

export function CustomRadioButton(props: CustomRadioButtonProps) {
  return (
    <div className="w-full">
      <div className="w-full">
        <RadioGroup value={props.selected} onChange={props.setSelected}>
          <RadioGroup.Label className="sr-only">type</RadioGroup.Label>
          <div className="space-y-2">
            {props.items.map((plan) => (
              <RadioGroup.Option
                key={plan.name}
                value={plan}
                className={({ active, checked }) =>
                  `${
                    active
                      ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-primary'
                      : ''
                  }
                  ${
                    checked ? 'bg-sky-900 bg-opacity-75 text-white' : 'bg-white'
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-xl focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                            {plan.name}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? 'text-sky-100' : 'text-gray-500'
                            }`}
                          >
                            <span>{plan.description}</span>
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="text-white shrink-0">
                          <AiOutlineCheckCircle className="w-6 h-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}

export default CustomRadioButton;
