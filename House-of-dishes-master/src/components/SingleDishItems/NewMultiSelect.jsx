/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";
import { BiDownArrow } from "react-icons/bi";

const NewMultiSelect = ({ multiple,isValue, onChange, options }) => {
  console.log(isValue)

  const [isOpen, setOpen] = useState(false);

  const [isSelected, setSelected] = useState();

  function handleDisplay() {
    if (isOpen) {
      setOpen(false);
    }
  }

  function clearOptions(){
    multiple? onChange([]): onChange(undefined)

  }

  function selectOptionFunc(option) {
    if (multiple) {
      const updatedValues = isValue.includes(option.value)
        ? isValue.filter((val) => val !== option.value)
        : [...isValue, option.value];
      onChange(updatedValues);
    } else {
      if (option !== isValue) onChange(option);
    }
  }
  function isOptionSelected(option){
    return multiple? isValue.includes(option): option === isValue
  }

  return (
    <>
      {/* It is used to display selected customize ingradients  */}
      <div className="min-h[1.5em] w-[100em] py-5">
        <span className="flex-grow text-white">
          {multiple?isValue.map((selectedValue) => {
            const selectedOption = options.find((option) => option.value === selectedValue)
            return  (
              <button
                key={selectedValue}
                onBlur={() => setOpen(false)}
                onClick={handleDisplay}
                className="px-2 border gap-5 ml-5 rounded-full font-normal py-2 bg-slate-800"
              >
              {selectedOption ? selectedOption.label : ""}
                <span
                className="px-1"
                 onClick={(e) => selectOptionFunc(selectedOption)}>&times;</span>
              </button>
            )
          })
            : ( <span>
              {isValue !== null
                ? options.find((option) => option.value === isValue)?.label
                : ""}
            </span>
          )}
        </span>
      </div>

      {/* dropdown menu  */}

      <div
        onBlur={() => setOpen(false)}
        onClick={() => setOpen((prev) => !prev)}
        className="min-h-[1.2em] w-[30em] relative border  rounded-xl border-slate-600 flex items-center gap-4 p-2 outline-none focus:border-cyan-400 cursor-pointer"
      >
        <span className="flex-grow">Select Ingradients</span>
        <div className="cursor-pointer">
          <BiDownArrow />
        </div>

        <ul className={`bg-slate-900  absolute list-none m-0   max-h-[15em] overflow-y-auto  border rounded-lg p-1 w-full z-50 translate-y-[70%] -translate-x-2 ${isOpen?"block":"hidden"}`}>
          {
            options.map((option,index) => (
              <li
              key={index}
              onClick={e=>{e.stopPropagation()
              selectOptionFunc(option)

              }}
              className={`text-white cursor-pointer py-1 ${index === isSelected? "":"hover:bg-cyan-400"} ${isOptionSelected(option) ? 'bg-cyan-600':''}`}>{option.label}
              
     
              </li>
            ))
          }
        </ul>
      </div>
    </>
  );
};

export default NewMultiSelect;
