import React from 'react';
import axios from 'axios';
import { Button, CircularProgress } from '@material-ui/core';
import { ButtonWrapper, LoadingWrapper } from './style';
import ListDogs from './ListDogs/ListDogs';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      URLs: [],
      loading:false
    }
    this.handleUrlsClick = this.handleUrlsClick.bind(this);
  } 
  
  //Button Handle Event Function
  handleUrlsClick = async () => {
    try {
      let i = 0;
      let urllist = []
      for(i;i< 8;i++){
        const response = await axios.get(`https://random.dog/woof.json`)
        const urlJson = await response.data
        urllist.push(urlJson.url)
      }
      this.setState({ 
        URLs: urllist,
        loading: true
      });
      console.log({urllist})
    } catch (error) {
        console.log('Error from Random Dogs Patching from the API..');
    }

    setTimeout(() => { 
      this.setState({loading: false})
    },2000)
    
  }

  render() {
    const { loading } = this.state;
    return (
      <div className="App">
        <ButtonWrapper>
          <Button variant="outlined" color="secondary" onClick={this.handleUrlsClick} >
            Show Eight Dogs
          </Button>
          <h3>Refesh the button, if some pictures are not displayed....</h3>
        </ButtonWrapper>
        
        {loading ? <LoadingWrapper><CircularProgress /></LoadingWrapper>: <ListDogs URLs={this.state.URLs} />}
        
      </div> 
    );
  }
}

export default App;
