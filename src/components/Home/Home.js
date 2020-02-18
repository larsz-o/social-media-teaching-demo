import React, { Component } from 'react';
import PostBody from './PostBody';
import { connect } from 'react-redux'; 
import swal from 'sweetalert';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icons: ['email.png', 'facebook.png', 'twitter.png', 'linkedin.png'],
      keyword: '',
      group_id: 0, 
      keywords: []
    }
  }
  addKeywords = () => {
   this.props.dispatch({type: 'ADD_KEYWORD', payload: {name: this.state.keyword, group: this.state.group_id}});
   this.setState({
     ...this.state,
     keyword: ''
   });
   swal('Success!', 'Try adding some more?', 'success');
  }
  componentDidMount() {
    const { match: { params } } = this.props;
    const group_id = params.group_id; 
    this.setState({
      ...this.state, 
      group_id: group_id
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
          {JSON.stringify(this.props.keywords)}
          <p className="helper-text">Not seeing what you want? Improve our algorithm by telling us your favorite topics. One at a time, please.</p>
          <div className="flex-box flex-center"> <input value={this.state.keyword} onChange={(event) => this.handleChange(event)} className="column-3" /><button onClick={this.addKeywords}>Submit</button></div>
        </div>
        <div className="header">
          <h1>Your Top Story</h1>
          {this.props.data.map((story, i) => {
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
const mapStateToProps = state => ({
  keywords: state.keywords.keywords,
  data: state.data.articles
})
export default connect(mapStateToProps)(Home); 