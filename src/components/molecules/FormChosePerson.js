/* eslint-disable no-lone-blocks */
import React from 'react';
import PropTypes from 'prop-types';
import Select from 'components/atoms/Select';

const FormChosePerson = ({ persons }) => (
  <Select
    multi
    placeholder=""
    isMulti
    options={persons.map(({ name, id }) => ({ value: { id }, label: `${name}` }))}
  />
);

FormChosePerson.propTypes = {
  persons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};

FormChosePerson.defaultProps = {
  persons: {},
};

export default FormChosePerson;
