import React, { Component } from 'react'

import posed from 'react-pose'
require ('../../styles/main.css')

const Box = posed.div(
        {
            visible: { 
                opacity: 1,
                height: '200px',
                width: '100%',
                transition: {
                    duration: 1000
                }
             },
            hidden: { 
                opacity: 0,
                height: '0',
                // width: '0'
             }
        }
    );

    const Button = posed.div({
        collapsed: {
            width: 0,
            height: 0,
            padding: 0,
            border: '5px solid #ffaaaa',
            
        },
        open: {
            border: '1px solid #ffaaaa',
            color: '#ffaaaa',
            padding: '10px 20px',
            'margin-left': '300px',
            width: '80px',
            height: '40px'
        }
    });

export default class App extends Component {
    state = {
        isVisible: true,
    }

    changeState = () => {
        this.setState({
            isVisible: !this.state.isVisible,
        })
    }
  render() {
    return (
      <div>
        <Box
        className="box"
             pose={this.state.isVisible ? 'visible' : 'hidden'}
            />
            <Button
                pose={this.state.isVisible ? 'open' : 'collapsed'}
            
                onClick={this.changeState}
            > </Button>
            
      </div>
    )
  }
}
