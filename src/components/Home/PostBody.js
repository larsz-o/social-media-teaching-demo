import React, { Component } from 'react';

class PostBody extends Component{

    createMarkup = () => {
        return {__html: this.props.post.body};
    }
    render(){
        return(
            <div dangerouslySetInnerHTML={this.createMarkup()}/>
        )
    }
}
export default PostBody; 