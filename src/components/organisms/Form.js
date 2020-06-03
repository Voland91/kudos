import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import FormPost from 'components/molecules/FormPost';
import FormHeader from 'components/molecules/FormHeader';
import FormChosePerson from 'components/molecules/FormChosePerson';
import FormAddKudos from 'components/molecules/FormAddKudos';
import Text from 'components/atoms/Text';
import ValidationMessage from 'components/atoms/ValidationMessage';
import FormChoseGroup from 'components/molecules/FormChoseGroup';
import Button from 'components/atoms/Button';
import { border } from 'theme/mixins';
import { connect } from 'react-redux';
import { addPost } from 'actions/addAction';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  padding: 35px;
  width: 100%;
  min-height: 1045px;
  ${border};
`;

const StyledNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

class Form extends React.Component {
  state = {
    personId: '',
    groupId: '',
    postDescription: '',
    kudosId: '',
    errors: {
      person: false,
      group: false,
      kudos: false,
    },
  };

  errorMessages = {
    personIncorrect: 'Musisz wybrać osobę',
    kudosIncorrect: 'Musisz wybrać kudos',
    groupIncorrect: 'Musi wybrać grupę',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // // takind data form Form
  handlePersonChange = e => {
    this.setState({
      personId: e.value.id,
    });
  };

  handleGroupChange = e => {
    this.setState({
      groupId: e.id,
    });
  };

  handleKudosChange = e => {
    this.setState({
      kudosId: parseInt(e.target.id, 10),
    });
  };

  handlePostChange = e => {
    this.setState({
      postDescription: e.target.innerHTML,
    });
  };

  // validation
  formValidation = () => {
    const { personId, groupId, kudosId } = this.state;
    let person = false;
    let group = false;
    let kudos = false;
    let correct = false;

    if (personId !== '') {
      person = true;
    }
    if (groupId !== '') {
      group = true;
    }
    if (kudosId !== '') {
      kudos = true;
    }
    if (person && group && kudos) {
      correct = true;
    }

    return { person, group, kudos, correct };
  };

  handleSubmit = e => {
    e.preventDefault();
    const { personId, groupId, postDescription, kudosId } = this.state;
    // eslint-disable-next-line no-shadow
    const { addPost, history, persons } = this.props;
    const activePerson = persons.find(person => person.isActive);
    dayjs.extend(utc);
    const date = dayjs
      .utc()
      .local()
      .format();

    const validation = this.formValidation();
    if (validation.correct) {
      addPost(personId, activePerson.id, groupId, postDescription, kudosId, date);
      history.push('/');
    } else {
      this.setState({
        errors: {
          person: !validation.person,
          group: !validation.group,
          kudos: !validation.kudos,
          accept: !validation.accept,
        },
      });
    }
  };

  render() {
    const { kudoses, persons } = this.props;
    const { errors } = this.state;
    return (
      <>
        <FormWrapper autocomplete="off" onSubmit={this.handleSubmit}>
          <FormHeader />
          <FormPost persons={persons} onChange={this.handlePostChange} />
          <Text formlook>Wybierz osobę, której przyznajesz kudos</Text>
          <FormChosePerson persons={persons} onChange={this.handlePersonChange} />
          {errors.person && (
            <ValidationMessage>{this.errorMessages.personIncorrect}</ValidationMessage>
          )}
          <Text formlook>Wybierz kudos</Text>
          {kudoses.map(({ title, description, img, id }) => (
            <FormAddKudos
              title={title}
              description={description}
              img={img}
              key={id}
              id={id}
              onChange={this.handleKudosChange}
            />
          ))}
          {errors.kudos && (
            <ValidationMessage>{this.errorMessages.kudosIncorrect}</ValidationMessage>
          )}
          <Text formlook>Wybierz grupę</Text>
          <StyledNavWrapper>
            <FormChoseGroup onChange={this.handleGroupChange} />
            <Button>Opublikuj</Button>
          </StyledNavWrapper>
          {errors.group && (
            <ValidationMessage>{this.errorMessages.groupIncorrect}</ValidationMessage>
          )}
        </FormWrapper>
      </>
    );
  }
}

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
      avatar: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isActive: PropTypes.bool.isRequired,
    }),
  ),
  addPost: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.shape).isRequired,
};

Form.defaultProps = {
  kudoses: {},
  persons: {},
};

export default withRouter(connect(null, { addPost })(Form));
