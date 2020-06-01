import { ADD_HEART, ADD_POST } from '../actions/types';

const initialState = [
  {
    postId: 1,
    authorId: 6,
    date: '3 dni temu',
    description:
      '<div data-contents="true"><div class="" data-block="true" data-editor="5ml09" data-offset-key="2t5ap-0-0"><div data-offset-key="2t5ap-0-0" class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"><span class="draftJsEmojiPlugin__emoji__2oqBk" title=":tada:" style="background-image: url(&quot;//cdn.jsdelivr.net/emojione/assets/svg/1f389.svg?v=2.2.7&quot;);"><span data-offset-key="2t5ap-0-0"><span data-text="true">🎉</span></span></span><span data-offset-key="2t5ap-1-0"><span data-text="true"> </span></span><span class="draftJsEmojiPlugin__emoji__2oqBk" title=":tada:" style="background-image: url(&quot;//cdn.jsdelivr.net/emojione/assets/svg/1f389.svg?v=2.2.7&quot;);"><span data-offset-key="2t5ap-2-0"><span data-text="true">🎉</span></span></span><span data-offset-key="2t5ap-3-0"><span data-text="true"> </span></span><span class="draftJsMentionPlugin__mention__29BEd" spellcheck="false"><span data-offset-key="2t5ap-4-0"><span data-text="true">Ken Hunt</span></span></span><span data-offset-key="2t5ap-5-0"><span data-text="true"> dzięki za pomoc, jesteś nalepszy!! </span></span><span class="draftJsEmojiPlugin__emoji__2oqBk" title=":tada:" style="background-image: url(&quot;//cdn.jsdelivr.net/emojione/assets/svg/1f389.svg?v=2.2.7&quot;);"><span data-offset-key="2t5ap-6-0"><span data-text="true">🎉</span></span></span><span data-offset-key="2t5ap-7-0"><span data-text="true"> </span></span><span class="draftJsEmojiPlugin__emoji__2oqBk" title=":tada:" style="background-image: url(&quot;//cdn.jsdelivr.net/emojione/assets/svg/1f389.svg?v=2.2.7&quot;);"><span data-offset-key="2t5ap-8-0"><span data-text="true">🎉</span></span></span></div></div></div>',
    heart: 0,
    departamentId: 2,
    kudos: {
      kudosId: 3,
      personId: 1,
    },
  },
  {
    postId: 2,
    authorId: 4,
    date: '2 dni temu',
    description:
      '<div data-contents="true"><div class="" data-block="true" data-editor="fuk2l" data-offset-key="b61kc-0-0"><div data-offset-key="b61kc-0-0" class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"><span data-offset-key="b61kc-0-0"><span data-text="true">Dziękuję </span></span><span class="draftJsMentionPlugin__mention__29BEd" spellcheck="false"><span data-offset-key="b61kc-1-0"><span data-text="true">Isobel Jennings</span></span></span><span data-offset-key="b61kc-2-0"><span data-text="true"> za pomoc przy ostatnim projekcie. Dzięki twojej pomocy poradziłam sobie ze wszystkimi zagadnieniami!</span></span></div></div><div class="" data-block="true" data-editor="fuk2l" data-offset-key="3c72a-0-0"><div data-offset-key="3c72a-0-0" class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"><span data-offset-key="3c72a-0-0"><br data-text="true"></span></div></div><div class="" data-block="true" data-editor="fuk2l" data-offset-key="fdf8j-0-0"><div data-offset-key="fdf8j-0-0" class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"><span data-offset-key="fdf8j-0-0"><span data-text="true">Mam nadzieję że jeszcze wiele takich projektów przed nami </span></span><span class="draftJsEmojiPlugin__emoji__2oqBk" title=":smile:" style="background-image: url(&quot;//cdn.jsdelivr.net/emojione/assets/svg/1f604.svg?v=2.2.7&quot;);"><span data-offset-key="fdf8j-1-0"><span data-text="true">😄</span></span></span><span data-offset-key="fdf8j-2-0"><span data-text="true"> </span></span><span class="draftJsEmojiPlugin__emoji__2oqBk" title=":smile:" style="background-image: url(&quot;//cdn.jsdelivr.net/emojione/assets/svg/1f604.svg?v=2.2.7&quot;);"><span data-offset-key="fdf8j-3-0"><span data-text="true">😄</span></span></span><span data-offset-key="fdf8j-4-0"><span data-text="true"> </span></span><span class="draftJsEmojiPlugin__emoji__2oqBk" title=":heart:" style="background-image: url(&quot;//cdn.jsdelivr.net/emojione/assets/svg/2764.svg?v=2.2.7&quot;);"><span data-offset-key="fdf8j-5-0"><span data-text="true">❤️</span></span></span></div></div></div>',
    heart: 0,
    departamentId: 3,
    kudos: {
      kudosId: 1,
      personId: 2,
    },
  },
  {
    postId: 3,
    authorId: 3,
    date: '1 dzień temu',
    description:
      '<div data-contents="true"><div class="" data-block="true" data-editor="albe9" data-offset-key="2eh7f-0-0"><div data-offset-key="2eh7f-0-0" class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"><span data-offset-key="2eh7f-0-0"><span data-text="true">Wielkie dzięki </span></span><span class="draftJsMentionPlugin__mention__29BEd" spellcheck="false"><span data-offset-key="2eh7f-1-0"><span data-text="true">Ken Hunt</span></span></span><span data-offset-key="2eh7f-2-0"><span data-text="true"> </span></span><span class="draftJsEmojiPlugin__emoji__2oqBk" title=":smile:" style="background-image: url(&quot;//cdn.jsdelivr.net/emojione/assets/svg/1f604.svg?v=2.2.7&quot;);"><span data-offset-key="2eh7f-3-0"><span data-text="true">😄</span></span></span><span data-offset-key="2eh7f-4-0"><span data-text="true"></span></span><span class="draftJsEmojiPlugin__emoji__2oqBk" title=":thumbsup:" style="background-image: url(&quot;//cdn.jsdelivr.net/emojione/assets/svg/1f44d.svg?v=2.2.7&quot;);"><span data-offset-key="2eh7f-5-0"><span data-text="true">👍</span></span></span><span data-offset-key="2eh7f-6-0"><span data-text="true"> za współpracę przy ostatnim projekcie. Dzięki twojej pomocy poradziliśmy sobie z badaniami i analizą! Mam nadzieję że jeszcze wiele takich projektów przed nami!! </span></span></div></div></div>',
    heart: 0,
    departamentId: 1,
    kudos: {
      kudosId: 5,
      personId: 1,
    },
  },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_HEART: {
      // eslint-disable-next-line no-plusplus, no-param-reassign
      state.forEach(post => post.postId === action.id && ++post.heart);
      return [...state];
    }
    case ADD_POST: {
      return [
        ...state,
        {
          postId: state.length + 1,
          authorId: action.authorId,
          date: '1 dzień temu',
          description: action.postDescription,
          heart: 0,
          departamentId: action.departamentId,
          kudos: {
            kudosId: action.kudosId,
            personId: action.personId,
          },
        },
      ];
    }
    default:
      return state;
  }
};
