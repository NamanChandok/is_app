import React, { useState, useEffect } from 'react';
import type { InputHTMLAttributes } from 'react';

interface StatusCellProps extends InputHTMLAttributes<HTMLInputElement> {
  defaultValue?: string;
}

const StatusInput: React.FC<StatusCellProps> = ({ defaultValue, ...restProps }) => {
  const [value, setValue] = useState(defaultValue || '');
  const [color, setColor] = useState('text-[#121212]');
  const [bg, setBg] = useState('bg-transparent');

  useEffect(() => {
    if (value.toLowerCase() === 'in-process') {
      setColor('text-[#85640B]');
      setBg('bg-[#FFF3D6]');
    } else if (value.toLowerCase() === 'need to start') {
      setColor('text-[#475569]');
      setBg('bg-[#E2E8F0]');
    } else if (value.toLowerCase() === 'complete') {
      setColor('text-[#0A6E3D]');
      setBg('bg-[#D3F2E3]');
    } else if (value.toLowerCase() === 'blocked') {
      setColor('text-[#C22219]');
      setBg('bg-[#FFE1DE]');
    } else {
      setColor('text-[#121212]');
      setBg('bg-transparent');
    }
  }, [value]);

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`font-medium text-center ${color} relative z-10`}
        {...restProps}
      />
      <div
        className={`absolute ${bg} px-2 py-1 rounded-full text-xs text-transparent w-max top-1/2 left-1/2 -translate-1/2`}
      >
        {value}
      </div>
    </>
  );
};

export default StatusInput;
