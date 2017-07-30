
export default {
  path: 'test',
  title: 'test',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./PageTest.jsx'));
    }, 'test');
  },
};
