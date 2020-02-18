import React, {Component} from 'react';
// const { match: { params } } = this.props;
// const group_id = params.group_id; 
class Home extends Component{
     constructor(props){
         super(props);
         this.state = {
            news: []
         }
     }
     componentDidMount(){
      this.getGames();
    }
    getGames = () => {
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const url = "https://protected-bastion-03943.herokuapp.com/keywords/";
      fetch(proxyurl + url)
      .then(results => results.json())
      .then(result => this.setState({games: result}))
    }
         
  
    render(){
        return(
        <div>
            <h1>Your News</h1>
            {JSON.stringify(this.state)}
           {this.state.news.map((story, i) => {
               return(
                   <div key={i}>{story}</div>
               )
           })}
        </div>)
    }
}
export default Home; 