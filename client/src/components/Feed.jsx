import React, { Component } from 'react';
class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value:document.getElementById("post")
        }
    }
    postValue() {
        console.log(this.state.value.value)
    }   
    render() {

        return (
            <div className="feed">
            <form >
                <div className="post">
                    <input type="text" name="post" id="post" required />
                    <button id="btn" type="submit" onClick={this.postValue.bind(this)}>Post</button>
                </div>
            </form>
        
            </div>
        );
    }
}

export default Feed;
