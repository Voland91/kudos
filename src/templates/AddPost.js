import React from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Form from 'components/organisms/Form';
import { useMediaQuery } from 'react-responsive';

const StyledFormsWrapper = styled.div`
  margin: 50px auto;
  width: ${({ theme }) => theme.width};

  ${props =>
    props.isMobile &&
    css`
      width: 100%;
    `};
`;

const Forms = ({ kudoses, persons }) => {
  const isMobile = useMediaQuery({ maxWidth: 664 });

  return (
    <StyledFormsWrapper isMobile={isMobile} onClick={e => e.stopPropagation()}>
      <Form kudoses={kudoses} persons={persons} />
    </StyledFormsWrapper>
  );
};

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
