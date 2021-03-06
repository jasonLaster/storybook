import React from 'react';
import { shallow } from 'enzyme';
import Array from '../types/Array';

describe('Array', () => {
  it('should subscribe to setKnobs event of channel', () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <Array
        onChange={onChange}
        knob={{ name: 'passions', value: ['Fishing', 'Skiing'], separator: ',' }}
      />,
    );

    wrapper.simulate('change', { target: { value: 'Fhishing,Skiing,Dancing' } });
    expect(onChange).toHaveBeenCalledWith(['Fhishing', 'Skiing', 'Dancing']);
  });
});
