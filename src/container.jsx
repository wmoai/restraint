import React from 'react';
import {render} from 'react-dom';
import MicroContainer from 'react-micro-container';

/**
 * field
 *   cursor
 *   object
 *     text
 *     link
 */


class Container extends MicroContainer {
  constructor(props) {
    super(props);
    this.state = {
      cursor: {
        x: 0,
        y: 0
      }
    }
  }
  componentDidMount() {
    document.addEventListener('keyup', (e) => {
      const cursor = this.state.cursor;
      switch(e.keyCode) {
        case 37:
          cursor.x -= 1;
          break;
        case 38:
          cursor.y -= 1;
          break;
        case 39:
          cursor.x += 1;
          break;
        case 40:
          cursor.y += 1;
          break;
        default:
          break;
      }
      cursor.x = Math.max(cursor.x, 0);
      cursor.y = Math.max(cursor.y, 0);
      this.setState({
        cursor: cursor
      });
    });
  }
  componentDidUpdate() {
    const cursor = this.refs.cursor;
    const x = cursor.offsetLeft + (cursor.offsetWidth / 2) - (window.innerWidth / 2);
    const y = cursor.offsetTop + (cursor.offsetHeight / 2) - (window.innerHeight / 2);
    window.scrollTo(x, y);
  }
  render() {
    return (
      <div>
        <div
          ref="cursor"
          className="cursor"
          style= {{
            top: (this.state.cursor.y*30),
            left: (this.state.cursor.x*30)
          }}
        />
      </div>
    );
  }
}

window.onload = () => {
  render(
    <Container />,
    document.querySelector('#container')
  );
}
