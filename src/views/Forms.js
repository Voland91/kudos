import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import MainTemplate from 'templates/MainTemplate';
import PropTypes from 'prop-types';
import Form from 'components/organisms/Form';

const StyledFormsWrapper = styled.div`
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Forms = ({ kudoses, persons }) => (
  <MainTemplate>
    <StyledFormsWrapper>
      <Form kudoses={kudoses} persons={persons} />
    </StyledFormsWrapper>
  </MainTemplate>
);

Forms.propTypes = {
  kudoses: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    }),
  ),
  persons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isActive: PropTypes.bool.isRequired,
    }),
  ),
};

Forms.defaultProps = {
  kudoses: {},
  persons: {},
};

const mapStateToProps = state => ({
  kudoses: state.kudosesState,
  persons: state.personsState,
});

export default connect(mapStateToProps)(Forms);
