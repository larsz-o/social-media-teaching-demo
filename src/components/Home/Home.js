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
    const group_id = parseInt(params.group_id); 
    this.setState({
      ...this.state, 
      group_id: group_id
    })
    // when page loads, sort by group id. 
    let keywordsToSort = this.props.keywords.filter(keyword => keyword.group === group_id);
    console.log(keywordsToSort);
    this.props.dispatch({type: 'SORT_DATA', payload: {group: group_id, keywords: keywordsToSort}});
  }
  getMore = () => {
    let more = this.props.data.slice(1);
    more.splice(4, more.length);
    this.setState({
      ...this.state,
      seeMore: more,
      see: true
    });
    window.moveTo(0,10000);
  }
  handleChange = (event) => {
    this.setState({
      ...this.state,
      keyword: event.target.value
    })
  }
  triggerAlert = () => {
    swal(`Let's keep this between us.`, 'Think before you share', 'error');
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
          <div className="flex-box flex-center"> <input value={this.state.keyword} onChange={(event) => this.handleChange(event)} className="column-3" /><button className="column-1" onClick={this.addKeywords}>Submit</button></div>
        </div>
        <div className="header">
          <h1 className="column-6">Your Top Story</h1>
          {topStory.map((story, i) => {
            return (
              <div key={i}>
                <h2><a href={story.url}>{story.title}</a></h2>
                <em>{story.author}</em>
                <div className="flex-box flex-between">
                <div className="column-5"><PostBody post={story} /></div>
                {story.image.length > 1 && <img className="column-6" src={story.image} alt={story.title} height="400"/>}
                </div>
                <div className="flex-box">
                  {this.props.icons.map((icon, i) => {
                    return (<img onClick={this.triggerAlert} key={i} className="icon" src={require(`../images/${icon}`)} alt="social media" />)
                  })}
                </div>
              </div>
            )
          })}
        </div>
        {!this.state.see && <div className="nav-bar" onClick={()=>this.getMore()}><a href="#0" className="link">See more</a></div>}
        {this.state.see &&<div className="nav-bar" onClick={()=>this.setState({...this.state, see: false})}><span className="link">Hide</span></div>}
         {this.state.see && <div className="main-body">{this.state.seeMore.map((story, i) => {
             if(story.showRating >= 5){
              return (
                <div className="story" id={i} key={i}>
                  <h2><a href={story.url}>{story.title}</a></h2>
                  <em>{story.author}</em>
                  <div className="flex-box flex-between column-12">
                    <div className="column-6"><PostBody post={story} /></div>
                    {story.image.length > 1 &&<img className="column-5" src={story.image} alt={story.title} height="400"/>}
                  </div>
                  <div className="flex-box">
                    {this.props.icons.map((icon, i) => {
                      return (<img key={i} onClick={this.triggerAlert} className="icon" src={require(`../images/${icon}`)} alt="social media" />)
                    })}
                  </div>
                </div>
              )
             } else {
               return false;
             }
          
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