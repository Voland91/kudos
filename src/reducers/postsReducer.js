import { ADD_HEART, ADD_POST } from '../actions/types';

const initialState = [
  {
    postId: 1,
    authorId: 6,
    date: '3 dni temu',
    description:
      'Wielkie dzięki @Barbara Klimowicz za współpracę przy ostatnim projekcie. Dzięki twojej pomocy poradziłam sobie z badaniami i analizą! Mam nadzieję że jeszcze wiele takich projektów przed nami.',
    heart: 0,
    departamentId: 2,
    kudos: {
      kudosId: 3,
      personId: 2,
    },
  },
  {
    postId: 2,
    authorId: 2,
    date: '2 dni temu',
    description:
      'Wielkie dzięki @Barbara Klimowicz za współpracę przy ostatnim projekcie. Dzięki twojej pomocy poradziłam sobie z badaniami i analizą! Mam nadzieję że jeszcze wiele takich projektów przed nami.',
    heart: 0,
    departamentId: 3,
    kudos: {
      kudosId: 1,
      personId: 5,
    },
  },
  {
    postId: 3,
    authorId: 3,
    date: '1 dzień temu',
    description:
      'Wielkie dzięki @Barbara Klimowicz za współpracę przy ostatnim projekcie. Dzięki twojej pomocy poradziłam sobie z badaniami i analizą! Mam nadzieję że jeszcze wiele takich projektów przed nami.',
    heart: 0,
    departamentId: 1,
    kudos: {
      kudosId: 5,
      personId: 4,
    },
  },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_HEART: {
      // eslint-disable-next-line no-plusplus, no-param-reassign
      state.forEach(post => post.id === action.id && ++post.heart);
      return [...state];
    }
    case ADD_POST: {
      return [
        ...state,
        {
          postId: state.length + 1,
          authorId: 3,
          date: '1 dzień temu',
          description:
            'Wielkie dzięki @Barbara Klimowicz za współpracę przy ostatnim projekcie. Dzięki twojej pomocy poradziłam sobie z badaniami i analizą! Mam nadzieję że jeszcze wiele takich projektów przed nami.',
          heart: 0,
          departamentId: 4,
          kudos: {
            kudosId: 3,
            personId: action.personId,
          },
        },
      ];
    }

    // state.map(post => (post.id === action.id ? post.heart + 1 : null));
    default:
      return state;
  }
};
