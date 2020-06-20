import React from 'react';
import axios from 'axios';
import { Grid, Button } from '@material-ui/core';
import { ButtonWrapper, Item } from './style';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      URLs: []
    }
    this.handleUrlsClick = this.handleUrlsClick.bind(this)
  } 

  handleUrlsClick = async () => {
    try {
      let i = 0;
      let urllist = []
      for(i;i< 8;i++){
        const response = await axios.get(`https://random.dog/woof.json`)
        const json = await response.data
        //console.log(json.url)
        urllist.push(json.url)
      }
      this.setState({ URLs: urllist });
      console.log({urllist})
    } catch (error) {
        console.log(error.response.body);
    }
  }

  render() {
    const { URLs, loading } = this.state;
    return (
      <>
        <ButtonWrapper>
          <Button variant="outlined" color="secondary" onClick={this.handleUrlsClick} disabled={loading}>
            Show Dogs
          </Button>
          <h2>It will take a while....</h2>
        </ButtonWrapper>
        <Grid container>
          {URLs.map((item, index) => (
            <Grid item xs={12} md={3} key={index}>
              <Item>
                <img className='pic' src={item} alt='' />
              </Item>
            </Grid>
          ))}
        </Grid>
      </>
    );
  }
}

export default App;
