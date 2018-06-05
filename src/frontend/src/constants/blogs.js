import loremIpsum from 'lorem-ipsum';

const blogItems = [
  {
    'id': 1,
    'title': 'Welcome To Your Blog',
    'date': '24 May 2018',
    'author': 'Lewis Dale',
    'path': '/welcome-to-your-blog',
    'content': loremIpsum(),
    'meta': {
      'title': 'Welome To Your Blog',
      'description': loremIpsum()
    },
  },
];

export default blogItems;
