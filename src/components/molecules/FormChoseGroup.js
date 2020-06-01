import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from 'components/atoms/Text';
import Select from 'components/atoms/Select';
import Icon from 'components/atoms/Icon';
import { connect } from 'react-redux';

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

// options to Select
const FormChoseGroup = ({ departaments, whichGroup }) => {
  const options = departaments.map(item => {
    return {
      value: `${item.name}`,
      label: (
        <SelectWrapper>
          <Icon src={item.img} />
          <Text select>{item.name}</Text>
        </SelectWrapper>
      ),
      id: item.id,
    };
  });

  return <Select options={options} placeholder="" styles={customStyles} onChange={whichGroup} />;
};

const mapStateToProps = state => ({
  departaments: state.departamentsState,
});

FormChoseGroup.propTypes = {
  departaments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    }),
  ),
  whichGroup: PropTypes.func.isRequired,
};

FormChoseGroup.defaultProps = {
  departaments: {},
};

export default connect(mapStateToProps, null)(FormChoseGroup);
