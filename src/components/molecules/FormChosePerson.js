/* eslint-disable no-lone-blocks */
import React from 'react';
import PropTypes from 'prop-types';
import Select from 'components/atoms/Select';

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

const FormChosePerson = ({ persons, whichPerson }) => {
  return (
    <Select
      multi
      placeholder=""
      isMulti
      options={persons.map(({ name, id }) => ({ value: { id }, label: `${name}` }))}
      styles={customStyles}
      onChange={whichPerson}
      // isDisabled = {oneValue}
    />
  );
};

FormChosePerson.propTypes = {
  persons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
  whichPerson: PropTypes.number.isRequired,
};

FormChosePerson.defaultProps = {
  persons: {},
};

export default FormChosePerson;
