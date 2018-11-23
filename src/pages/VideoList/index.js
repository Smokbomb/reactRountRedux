import React, { Component } from 'react'
import './video.css';
import { NavLink } from 'react-router-dom'
class VideoList extends Component {
  constructor(props) {
    super();
    this.state = {
      videoList: [],
    }
  }
  componentDidMount = () => {
    fetch('http://192.168.1.28:3000/video/')
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
      <div className="content" >
        {
          this.state.videoList.map(data => 
            <NavLink exact  to= {"/VideoDetail/"+data._id}  className="list" >
            <div className="restaurant">
            <div className="close_it">
              <i className="fas fa-times"></i>
            </div>
            <div className="infos_left">
              <div className="image_container" >
              <img src={data.thumb} />
              </div>
              <div className="block_infos">
                <h1>{data.subtitle}</h1>
                <div className="adress_block">
                
                  <div> Like   {data.like}</div>
                  <div>View  {data.view}</div>
                </div>
                <div className="description_block">
                  <p>{data.description}</p>
                </div>
              </div>
            </div>
            <div className="reservation_right">
              <div className="people">
                <span className="text_people">Nombre de personnes</span>
              </div>
              <div className="count_people">
                <span className="total_people">2</span>
                <div className="btn_people">
                  <ul>
                    <li className="more_people"><i className="fas fa-caret-up"></i>					</li>
                    <li className="less_people"><i className="fas fa-caret-down">						</i></li>
                  </ul>
                </div>
              </div>
              <div className="date">
                <div className="input_date">
                  <div id="datepicker"></div>
                </div>
              </div>
              <div className="validate_btn_rvs">
                Réserver la table
            </div>
            </div>
            </div>
          </NavLink>
          )
        }
      </div>
    )

  }
}
export default VideoList