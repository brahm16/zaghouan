import React, { Component } from 'react';
import { Map, GoogleApiWrapper , InfoWindow, Marker} from 'google-maps-react';
import ReactDOM from 'react-dom';
import CurrentLocation from './CurrentLocation';
import { hashHistory } from 'react-router';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,  // Hides or shows the InfoWindow
        activeMarker: {},          // Shows the active marker upon click
        selectedPlace: {} ,
        redirect: false         // Shows the InfoWindow to the selected place upon a marker
      };
 
    onMarkerClick = (props, marker, e) =>{
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true,
        redirect: true
        });
      //  window.location='/place/1'
    }
       
    onClose = props => {
        if (this.state.showingInfoWindow) {
        this.setState({
            showingInfoWindow: false,
            activeMarker: null
        });
        }
    };
    
  render() {

    let markers = [ // Just an example this should probably be in your state or props. 
      {
        name: "The water temple",
        position: { lat: 36.387511, lng:  10.130815 }
      },
      {
        name: "Sidi Ali Azzouz",
        position: { lat: 36.397502, lng: 10.145531 }
      },
      {
        name: "Dar Zaghouan",
        position: { lat: 36.416347,  lng: 10.123901 }
      }
    ];
    return (
        <CurrentLocation
        centerAroundCurrentLocation
        google={this.props.google}
      >
      <Marker
          onClick={this.onMarkerClick}
          name={'current location'}
          />
      {markers.map((marker,index)=>(
          
          <Marker
         
          key={index}
          onClick={this.onMarkerClick}
          name={marker.name}
          position={marker.position}
         >
         </Marker>
      ))}    
            <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
                onClose={this.onClose}
                >
                <div>
                    <h4>{this.state.selectedPlace.name}</h4>
                </div>
            </InfoWindow>
        </CurrentLocation>
    );
  }
}
MapContainer = GoogleApiWrapper({
    apiKey: "AIzaSyDwKop9j6D2sh6RRsRjDYaXLdBOxlDwE0g",
  })(MapContainer);
  
  const rootElement = document.getElementById("root");
  ReactDOM.render(<MapContainer />, rootElement);
{/*
 export default GoogleApiWrapper({
  apiKey: 'AIzaSyDwKop9j6D2sh6RRsRjDYaXLdBOxlDwE0g'
})(MapContainer); */}
