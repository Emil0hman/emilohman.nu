import React from 'react';
import './Header.css';

// Animations
import styled, { keyframes } from 'styled-components';
import { zoomIn } from 'react-animations';

// Animated Components
const length = 1;
const HeaderAnimation = styled.div`animation ${length}s ${keyframes `${zoomIn}`}`;

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      animateClasses: ""
    };
  }

  componentDidMount() {
    // After animation is finished, add the class "notFullHeight to the header div"
    setTimeout(_ => {
      this.setState({animateClasses: "notFullHeight"});
    }, length*1000);
  }

  render() {
    return (
      <div className={"header " + this.state.animateClasses}>
        <HeaderAnimation><h1>Emil Öhman</h1></HeaderAnimation>
      </div>
    );
  }
}
