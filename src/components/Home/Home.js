import React, { Component } from 'react';
import PostBody from './PostBody';
import { connect } from 'react-redux'; 
import swal from 'sweetalert';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      group_id: 0,
      seeMore: [],
      see: false
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
    // when page loads, sort by group id. 
    this.props.dispatch({type: 'SORT_DATA', payload: {group: group_id, keywords: this.props.keywords}});
  }
  getMore = () => {
    let more = this.props.data;
   //figure out how to remove just the first item without altering props. 
    console.log(more);
    this.setState({
      ...this.state,
      seeMore: more,
      see: true
    })
  }
  handleChange = (event) => {
    this.setState({
      ...this.state,
      keyword: event.target.value
    })
  }
  render() {
    let topStory = [];
    if(this.props.data.length > 0) {
      topStory.push(this.props.data[0]);
    }
    
    return (
      <div>
        <div className="nav-bar">
          <p className="helper-text">Not seeing what you want? Improve our algorithm by telling us your favorite topics. One at a time, please.</p>
          <div className="flex-box flex-center"> <input value={this.state.keyword} onChange={(event) => this.handleChange(event)} className="column-3" /><button onClick={this.addKeywords}>Submit</button></div>
        </div>
        <div className="header">
          <h1>Your Top Story</h1>
          {topStory.map((story, i) => {
            return (
              <div key={i}>
                <h2>{story.title}</h2>
                <div><PostBody post={story} /></div>
                <div className="flex-box">
                  {this.props.icons.map((icon, i) => {
                    return (<img key={i} className="icon" src={require(`../images/${icon}`)} alt="social media" />)
                  })}
                </div>
              </div>
            )
          })}
        </div>
        {!this.state.see && <div className="nav-bar"><span className="link" onClick={()=>this.getMore()}>See more</span></div>}
         {this.state.see && <div className="main-body">{this.state.seeMore.map((story, i) => {
             return (
              <div key={i}>
                <h2>{story.title}</h2>
                <div><PostBody post={story} /></div>
                <div className="flex-box">
                  {this.props.icons.map((icon, i) => {
                    return (<img key={i} className="icon" src={require(`../images/${icon}`)} alt="social media" />)
                  })}
                </div>
              </div>
            )
          })}
        </div>}

      </div>)
  }
}
const mapStateToProps = state => ({
  keywords: state.keywords.keywords,
  data: state.data.articles,
  icons: state.data.icons
})
export default connect(mapStateToProps)(Home); 