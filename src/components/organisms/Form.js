import React from 'react';
import PropTypes from 'prop-types';
import FormPost from 'components/molecules/FormPost';
import FormHeader from 'components/molecules/FormHeader';
import FormChosePerson from 'components/molecules/FormChosePerson';
import FormAddKudos from 'components/molecules/FormAddKudos';
import Text from 'components/atoms/Text';
import FormChoseGroup from '../molecules/FormChoseGroup';

const Form = ({ kudoses, persons }) => (
  <>
    <FormHeader />
    <FormPost />
    <Text form>Wybierz osobę, której przyznajesz kudos</Text>
    <FormChosePerson persons={persons} />
    <Text form>Wybierz kudos</Text>
    {kudoses.map(({ title, description, img, id }) => (
      <FormAddKudos title={title} description={description} img={img} key={id} />
    ))}
    <Text form>Wybierz grupę</Text>
    <FormChoseGroup />
  </>
);

Form.propTypes = {
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
      img: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isActive: PropTypes.bool.isRequired,
    }),
  ),
};

Form.defaultProps = {
  kudoses: {},
  persons: {},
};

export default Form;
