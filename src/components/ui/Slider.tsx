import React from 'react';

interface SliderProps {
  min: number;
  max: number;
  step: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
}

const Slider: React.FC<SliderProps> = ({ min, max, step, value, onChange }) => {
  const handleChange = (index: 0 | 1) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = [...value] as [number, number];
    newValue[index] = Number(e.target.value);
    
    if (index === 0 && newValue[0] > newValue[1]) {
      newValue[0] = newValue[1];
    } else if (index === 1 && newValue[1] < newValue[0]) {
      newValue[1] = newValue[0];
    }
    
    onChange(newValue);
  };

  return (
    <div className="relative pt-1">
      <div className="flex mb-2">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value[0]}
          onChange={handleChange(0)}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value[1]}
          onChange={handleChange(1)}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>
    </div>
  );
};