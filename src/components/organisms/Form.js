import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import FormPost from 'components/molecules/FormPost';
import FormHeader from 'components/molecules/FormHeader';
import FormChosePerson from 'components/molecules/FormChosePerson';
import FormAddKudos from 'components/molecules/FormAddKudos';
import Text from 'components/atoms/Text';
import FormChoseGroup from 'components/molecules/FormChoseGroup';
import Button from 'components/atoms/Button';
import { connect } from 'react-redux';
import { addPost } from '../../actions/addAction';

const StyledKudosWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

class Form extends React.Component {
  state = { personId: '', departamentId: '', postDescription: '', kudosId: '' };

  personID = e => {
    this.setState({
      personId: e[0].value.id,
    });
  };

  groupID = e => {
    this.setState({
      departamentId: e.id,
    });
  };

  postText = e => {
    this.setState({
      postDescription: e.target.innerHTML,
    });
  };

  kudosId = e => {
    this.setState({
      kudosId: parseInt(e.target.id, 10),
    });
  };

  render() {
    // eslint-disable-next-line no-shadow
    const { kudoses, persons, addPost, history } = this.props;
    const { personId, departamentId, postDescription, kudosId } = this.state;
    const activePerson = persons.find(person => person.isActive);

    return (
      <>
        <FormHeader />
        <FormPost persons={persons} postText={this.postText} />
        <Text formlook>Wybierz osobę, której przyznajesz kudos</Text>
        <FormChosePerson persons={persons} whichPerson={this.personID} />
        <Text formlook>Wybierz kudos</Text>
        {kudoses.map(({ title, description, img, id }) => (
          <FormAddKudos
            title={title}
            description={description}
            img={img}
            key={id}
            id={id}
            whichKudos={this.kudosId}
          />
        ))}
        <Text formlook>Wybierz grupę</Text>
        <StyledKudosWrapper>
          <FormChoseGroup whichGroup={this.groupID} />
          <Button
            onClick={() => {
              addPost(personId, activePerson.id, departamentId, postDescription, kudosId);
              setTimeout(() => history.push('/'), 300);
            }}
          >
            Opublikuj
          </Button>
        </StyledKudosWrapper>
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
