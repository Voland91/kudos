const initialState = {
  posts: [
    {
      id: 1,
      name: 'Anna Korolczuk',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      date: '3 dni temu',
      description: `Wielkie dzięki @Barbara Klimowicz
za współpracę przy ostatnim projekcie. Dzięki twojej pomocy poradziłam sobie z badaniami i analizą! Mam nadzieję że jeszcze wiele takich projektów przed nami.`,
    },
    {
      id: 2,
      name: 'Anna Korolczuk',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
      date: '3 dni temu',
      description:
        'Wielkie dzięki @Barbara Klimowicz za współpracę przy ostatnim projekcie. Dzięki twojej pomocy poradziłam sobie z badaniami i analizą! Mam nadzieję że jeszcze wiele takich projektów przed nami.',
    },
    {
      id: 3,
      name: 'Anna Korolczuk',
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
      date: '3 dni temu',
      description:
        'Wielkie dzięki @Barbara Klimowicz za współpracę przy ostatnim projekcie. Dzięki twojej pomocy poradziłam sobie z badaniami i analizą! Mam nadzieję że jeszcze wiele takich projektów przed nami.',
    },
  ],
};

const rootReducer = (state = initialState) => {
  return state;
};

export default rootReducer;
