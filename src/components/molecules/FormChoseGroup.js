import React from 'react';
import styled from 'styled-components';
import Text from 'components/atoms/Text';
import Select from 'components/atoms/Select';
import Button from 'components/atoms/Button';
import Icon from 'components/atoms/Icon';
import iconCity from 'assets/icons/city-purple.svg';
import iconDepartment from 'assets/icons/sticky-note_purple.svg';

const StyledKudosWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const SelectWrapper = styled.div`
  display: flex;
  height: 24px;
  align-items: center;
`;

// styles for Select
const customStyles = {
  container: provided => ({
    ...provided,
    border: '1px solid #E5E1E1',
    borderRadius: '6px',
  }),

  menu: provided => ({
    ...provided,
    color: '#A8996F',
  }),

  control: () => ({
    display: 'flex',
  }),

  indicatorSeparator: () => ({
    display: 'none',
  }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },

  multiValue: provided => ({
    ...provided,
    border: '1px solid #A8996F',
    borderRadius: '6px',
    backgroundColor: '#EEE',
    padding: '1px 8px',
  }),
};

// options for Select
const options = [
  {
    value: 'Białystok',
    label: (
      <SelectWrapper>
        <Icon src={iconCity} />
        <Text select>Białystok</Text>
      </SelectWrapper>
    ),
  },
  {
    value: 'Marketing',
    label: (
      <SelectWrapper>
        <Icon src={iconDepartment} />
        <Text select>Marketing</Text>
      </SelectWrapper>
    ),
  },
  {
    value: 'Warszawa',
    label: (
      <SelectWrapper>
        <Icon src={iconCity} />
        <Text select>Warszawa</Text>
      </SelectWrapper>
    ),
  },
  {
    value: 'HR',
    label: (
      <SelectWrapper>
        <Icon src={iconDepartment} />
        <Text select>HR</Text>
      </SelectWrapper>
    ),
  },
];

const FormChoseGroup = () => (
  <StyledKudosWrapper>
    <Select options={options} placeholder="" styles={customStyles} />
    <Button>Opublikuj</Button>
  </StyledKudosWrapper>
);

export default FormChoseGroup;
