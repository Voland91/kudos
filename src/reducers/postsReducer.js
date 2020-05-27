import { ADD_HEART } from '../actions/types';

const initialState = [
  {
    id: 1,
    name: 'Adam Korolczuk',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    date: '3 dni temu',
    description:
      'Wielkie dzięki @Barbara Klimowicz za współpracę przy ostatnim projekcie. Dzięki twojej pomocy poradziłam sobie z badaniami i analizą! Mam nadzieję że jeszcze wiele takich projektów przed nami.',
    heart: 0,
  },
  {
    id: 2,
    name: 'Anna Korolczuk',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    date: '3 dni temu',
    description:
      'Wielkie dzięki @Barbara Klimowicz za współpracę przy ostatnim projekcie. Dzięki twojej pomocy poradziłam sobie z badaniami i analizą! Mam nadzieję że jeszcze wiele takich projektów przed nami.',
    heart: 0,
  },
  {
    id: 3,
    name: 'Anna Korolczuk',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    date: '3 dni temu',
    description:
      'Wielkie dzięki @Barbara Klimowicz za współpracę przy ostatnim projekcie. Dzięki twojej pomocy poradziłam sobie z badaniami i analizą! Mam nadzieję że jeszcze wiele takich projektów przed nami.',
    heart: 0,
  },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_HEART: {
      // eslint-disable-next-line no-plusplus, no-param-reassign
      state.forEach(post => post.id === action.id && ++post.heart);
      return [...state];
    }

    // state.map(post => (post.id === action.id ? post.heart + 1 : null));
    default:
      return state;
  }
};
