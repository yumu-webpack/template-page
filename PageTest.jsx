
import { withRouter } from 'react-router';
import i18n from 'i18n';
import { Component } from 'refast';
import logic from './logic';
import './PageTest.less';

class PageTest extends Component {

  constructor(props) {
    super(props, logic);
  }

  render() {
    return (
      <div className="page-test">
        page test
      </div>
    );
  }
}

export default withRouter(PageTest);
