import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class Contact extends Component {
  render() {
    return (
      <div>
        <Map google={this.props.google} zoom={14}>
          <Marker onClick={this.onMarkerClick} name={"Current location"} />

          {/* <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow> */}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCG4DZJUYWqujS4SZm_wV74l9lUm3gMwQc",
})(Contact);
