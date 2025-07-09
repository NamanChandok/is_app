import React, { useState, useEffect } from 'react';
import type { InputHTMLAttributes } from 'react';

interface PriorityCellProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  setValue?: (value: string) => void;
}

const PriorityInput: React.FC<PriorityCellProps> = ({ value, setValue, ...restProps }) => {
  const [d_value, setD_value] = useState(value || '');
  const [color, setColor] = useState('text-[#121212]');

  useEffect(() => {
    setD_value(value || '');
  }, [value]);

  useEffect(() => {
    if (d_value.toLowerCase() === 'high') {
      setColor('text-[#EF4D44]');
    } else if (d_value.toLowerCase() === 'medium') {
      setColor('text-[#C29210]');
    } else if (d_value.toLowerCase() === 'low') {
      setColor('text-[#1A8CFF]');
    } else {
      setColor('text-[#121212]');
    }
  }, [d_value]);

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => {
        setD_value(e.target.value);
        setValue?.(e.target.value);
      }}
      className={`font-semibold text-center capitalize ${color}`}
      {...restProps}
    />
  );
};

export default PriorityInput;
