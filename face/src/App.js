/**
 * @Author: xiaojiezhang
 * @Date:   2018-08-20T21:52:39-04:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2018-08-21T13:32:17-04:00
 */



import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';






const particlesOptions={
  particles: {
    number:{
      value:30,
      density:{
        enable:true,
        value_area:800
      }
    }
  }
}

const app = new Clarifai.App({
 apiKey: 'e6c5a6663469423a899c58ddf8f59e3f'
});

class App extends Component {
  constructor(){
    super();
    this.state={
      input:"",
      imageUrl:"",
      box:{},
    }
  }


  calculateFaceLocation=(data)=>{
  const clarifaiFace=  data.outputs[0].data.regions[0].region_info.bounding_box;
  const image =document.getElementById("inputimage");
  const width=Number(image.width);
  const height=Number(image.height);
  return {
    leftcol:clarifaiFace.left_col * width,
    topRow:clarifaiFace.top_row * height,
    rightcol:width-(clarifaiFace.right_col * width),
    bottomRow:height-(clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox=(box)=>{
    console.log(box)
    this.setState({box:box});
  }

  onInputChange = (event) =>{
    this.setState({input:event.target.value});

  }

  onButtonSubmit =()=>{
    this.setState({imageUrl:this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response =>this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err =>console.log(err));
  }
  render() {
    return (
      <div className="App">

        <Particles className="particles"
          params={particlesOptions} />

        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
