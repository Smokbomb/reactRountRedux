import React, { Component } from 'react'
import { Player } from 'video-react';
import { Jumbotron, ButtonGroup, Button, Glyphicon } from 'react-bootstrap';
import './videoDetail.css';
class VideoDetail extends Component {
  constructor() {

    super();
    this.state = {
      videoList: [],
    }
  }
  componentDidMount = (props) => {
    console.log(this.props.match.params.id)
    fetch('http://192.168.1.28:3000/video/' + this.props.match.params.id)
      .then(results => {
        return results.json();
      }).then(data => {

        this.setState({
          videoList: data,
        })
        console.log(data);
      })
  }
  render(props) {
    return (
      <div className="content">

        <Jumbotron>
       
          <div className="videoDetail">
            {
              this.state.videoList.map(data => (
                <div>
                     <h3>{data.subtitle}</h3>
                  <Player autoPlay="true">
                    <source src={data.sources[0]} />
                  </Player>
                  <ButtonGroup>
                    <Button >
                      <Glyphicon glyph="eye-open" />  {data.view} 
                    </Button>
                    <Button >
                     <Glyphicon glyph="thumbs-up" />  {data.like}
                     </Button>
                  </ButtonGroup>
                </div>

              ))
            }
          </div>

        </Jumbotron>

      </div>
    )

  }
}
export default VideoDetail