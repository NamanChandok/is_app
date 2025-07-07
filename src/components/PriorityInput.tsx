import React, { useState, useEffect } from 'react';
import type { InputHTMLAttributes } from 'react';

interface PriorityCellProps extends InputHTMLAttributes<HTMLInputElement> {
  defaultValue?: string;
}

const PriorityInput: React.FC<PriorityCellProps> = ({ defaultValue, ...restProps }) => {
  const [value, setValue] = useState(defaultValue || '');
  const [color, setColor] = useState('#121212');

  useEffect(() => {
    if (value.toLowerCase() === 'high') {
      setColor('#EF4D44');
    } else if (value.toLowerCase() === 'medium') {
      setColor('#C29210');
    } else if (value.toLowerCase() === 'low') {
      setColor('#1A8CFF');
    } else {
      setColor('#121212');
    }
  }, [value]);

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={`font-semibold text-center capitalize text-[${color}]`}
      {...restProps}
    />
  );
};

export default PriorityInput;
