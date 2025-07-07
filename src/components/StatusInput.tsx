import React, { useState, useEffect } from 'react';
import type { InputHTMLAttributes } from 'react';

interface StatusCellProps extends InputHTMLAttributes<HTMLInputElement> {
  defaultValue?: string;
}

const StatusInput: React.FC<StatusCellProps> = ({ defaultValue, ...restProps }) => {
  const [value, setValue] = useState(defaultValue || '');
  const [color, setColor] = useState('#121212');
  const [bg, setBg] = useState('#EEEEEE');

  useEffect(() => {
    if (value.toLowerCase() === 'in-process') {
      setColor('#85640B');
      setBg('#FFF3D6');
    } else if (value.toLowerCase() === 'need to start') {
      setColor('#475569');
      setBg('#E2E8F0');
    } else if (value.toLowerCase() === 'complete') {
      setColor('#0A6E3D');
      setBg('#D3F2E3');
    } else if (value.toLowerCase() === 'blocked') {
      setColor('#C22219');
      setBg('#FFE1DE');
    } else {
      setColor('#121212');
      setBg('transparent');
    }
  }, [value]);

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`font-medium text-center text-[${color}] relative z-10`}
        {...restProps}
      />
      <div
        className={`absolute bg-[${bg}] px-2 py-1 rounded-full text-xs text-transparent w-max top-1/2 left-1/2 -translate-1/2`}
      >
        {value}
      </div>
    </>
  );
};

export default StatusInput;
