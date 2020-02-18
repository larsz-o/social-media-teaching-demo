import React, { Component } from 'react';
import PostBody from './PostBody';
import axios from 'axios'; 

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [{ title: 'title', body: '<p>Body</p>', image: 'something.png', showRating: 1 }],
      icons: ['email.png', 'facebook.png', 'twitter.png', 'linkedin.png'],
      keyword: '',
      group_id: 0, 
      keywords: []
    }
  }
  addKeywords = () => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://protected-bastion-03943.herokuapp.com/keywords/";
    fetch(proxyurl + url, {
      method: 'POST',
      data: {name: this.state.keyword, group: this.state.group_id}
    }).then((response) => {
      console.log('success');
      this.setState({
        ...this.state,
        keyword: ''
      })
      this.getData();
    }).catch((error) => {
      console.log('Error adding keywords', error);
    })
  }
  componentDidMount() {
    const { match: { params } } = this.props;
    const group_id = params.group_id; 
    this.setState({
      ...this.state, 
      group_id: group_id
    })
    this.getData();
  }
  getData = () => {
    axios({
      method: 'GET',
      url: 'api/keywords'
    }).then((results) => {
      console.log(results.data);
    })
  }

  handleChange = (event) => {
    this.setState({
      ...this.state,
      keyword: event.target.value
    })
  }

  render() {
    return (
      <div>
        <div className="nav-bar">
          {JSON.stringify(this.state)}
          <p className="helper-text">Not seeing what you want? Improve our algorithm by telling us your favorite topics. One at a time, please.</p>
          <div className="flex-box flex-center"> <input value={this.state.keyword} onChange={(event) => this.handleChange(event)} className="column-3" /><button onClick={this.addKeywords}>Submit</button></div>
        </div>
        <div className="header">
          <h1>Your Top Story</h1>
          {this.state.news.map((story, i) => {
            return (
              <div key={i}>
                <h2>{story.title}</h2>
                <div><PostBody post={story} /></div>
                <div className="flex-box">
                  {this.state.icons.map((icon, i) => {
                    return (<img key={i} className="icon" src={require(`../images/${icon}`)} alt="social media" />)
                  })}
                </div>
              </div>
            )
          })}
        </div>
        <div className="nav-bar"><span className="link">See more</span></div>


      </div>)
  }
}
export default Home; 