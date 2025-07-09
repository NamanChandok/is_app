import React, { useState, useEffect, forwardRef, useImperativeHandle, useRef } from 'react';
import type { InputHTMLAttributes } from 'react';

interface StatusCellProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  setValue?: (value: string) => void;
}

const StatusInput = forwardRef<HTMLInputElement, StatusCellProps>(
  ({ value, setValue, ...restProps }, ref) => {
    const innerRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => innerRef.current!, []);

    const [d_value, setD_value] = useState(value || '');
    const [color, setColor] = useState('text-[#121212]');
    const [bg, setBg] = useState('bg-transparent');

    useEffect(() => {
      setD_value(value || '');
    }, [value]);

    useEffect(() => {
      if (d_value.toLowerCase() === 'in-process') {
        setColor('text-[#85640B]');
        setBg('bg-[#FFF3D6]');
      } else if (d_value.toLowerCase() === 'need to start') {
        setColor('text-[#475569]');
        setBg('bg-[#E2E8F0]');
      } else if (d_value.toLowerCase() === 'complete') {
        setColor('text-[#0A6E3D]');
        setBg('bg-[#D3F2E3]');
      } else if (d_value.toLowerCase() === 'blocked') {
        setColor('text-[#C22219]');
        setBg('bg-[#FFE1DE]');
      } else {
        setColor('text-[#121212]');
        setBg('bg-transparent');
      }
    }, [d_value]);

    return (
      <>
        <input
          ref={innerRef}
          type="text"
          value={d_value}
          onChange={(e) => {
            setD_value(e.target.value);
            setValue?.(e.target.value);
          }}
          className={`font-medium text-center ${color} relative z-10`}
          {...restProps}
        />
        <div
          className={`absolute ${bg} px-2 py-1 rounded-full text-xs text-transparent w-max top-1/2 left-1/2 -translate-1/2`}
        >
          {d_value}
        </div>
      </>
    );
  },
);

StatusInput.displayName = 'StatusInput';

export default StatusInput;
