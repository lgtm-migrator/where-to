import React, {
  Component
} from 'react';
import {
  Container
  , Button
  , Row
  , Col
} from 'react-bootstrap';

import WebPortal from './WebPortal';
import {
  LandingPageItems
  , LandingPageItem
} from '../interfaces';

interface Props {
  contents: LandingPageItems;
}

export default class LandingPage extends Component<Props> {
  renderItem = (item: LandingPageItem): JSX.Element => {
    switch (item.type) {
    case 'webportal':
      return (
        <WebPortal
          item={item}
        />
      );
    default:
      return (
        <Button
          className='landing-button-big'
          size='lg'
          variant='dark'
          disabled
        >
          <span>N/A</span>
        </Button>
      )
    }
  };

  render (): JSX.Element {
    return (
      <div className='fadein page-padding'>
        <Container>
          <Row>
            <Col />
            <Col xs={12}>
              <h1>Where To?</h1>
              <br />
            </Col>
            <Col />
          </Row>
          <Row>
            <Col />
            <Col xs={12}>
              {this.props.contents.map(
                (item) => this.renderItem(item)
              )}
            </Col>
            <Col />
          </Row>
        </Container>
      </div>
    );
  };
}
