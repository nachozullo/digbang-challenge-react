import Slider from 'rc-slider';
import { CustomInput } from '../custom-input';

import 'rc-slider/assets/index.css';
import './index.css';

const MARK_STYLE = {
  color: '#fff',
  minWidth: 65,
  fontWeight: 500,
};

const SLIDER_STYLES = {
  trackStyle: { background: 'none' },
  dotStyle: { display: 'none' },
  handleStyle: {
    background: '#fff',
    border: '2px solid #fff',
    opacity: 1,
  },
};

export const SliderSelector = ({ label, name, unit = '', minValue, maxValue, value, onChange }) => (
  <div className='slider-container'>
    <CustomInput label={label} name={name} value={value} onChange={e => onChange(e.target.value)} />
    <div className='slider'>
      <Slider
        {...SLIDER_STYLES}
        value={value}
        onChange={onChange}
        min={minValue}
        max={maxValue}
        marks={{
          [minValue]: {
            style: MARK_STYLE,
            label: `${unit} ${minValue}`,
          },
          [maxValue]: {
            style: MARK_STYLE,
            label: `${unit} ${maxValue}`,
          },
        }}
      />
    </div>
  </div>
);
