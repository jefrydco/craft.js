import React, { Component } from "react";
import PropTypes, { string } from 'prop-types';
import {NodeContext, Canvas} from "~packages/core/";
import ContentEditable from 'react-contenteditable'

interface MessageBoxProps {
  text: string
  bg: string
}
class Editor extends React.Component<any> {
  render() {
    let {props} = this.props;
    return (
      <div>
        <input 
          type = "text" 
          value={props.text}
          onChange={(e) => props.text = e.target.value}
        />

        <input 
          type = "text" 
          value={props.bg}
          onChange={(e) => props.bg = e.target.value}
        />
      </div>
    )
  }
}

export default class MessageBox extends Component<MessageBoxProps> {
  static defaultProps = {
    text: "I am a message box",
    bg: "#333"
  };

  static editor = Editor

  render() {
    const { text, bg } = this.props;

    return (
      <div className={'message-box'} style={{backgroundColor: bg}}>
      <Canvas id="MessageCanvas" style={{"padding" : "20px 0"}}>
      <h2>66</h2>
      <h2>Whut</h2>
      </Canvas>
       <NodeContext.Consumer>
            {({node, nodeState}) => {
              const {active} = nodeState;
              return (
                active ? (
                  <ContentEditable 
                    tagName='h2' 
                    html={text} 
                    onChange={(e) => {
                      node.props.text = e.target.value;
                    }}
                  />
                )
                :
                <h2 dangerouslySetInnerHTML={{__html: text}}></h2>
              )
            }}
        </NodeContext.Consumer>
      </div>
    )
  }
}

