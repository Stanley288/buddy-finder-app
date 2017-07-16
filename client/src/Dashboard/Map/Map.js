import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import theme from 'theme'
import GoogleMap from './Map.component'

const styles = {
  card: {
    position: 'relative',
    height: '100%',
  },
}

class Map extends Component {
  state = {
    bounds: null,
    center: { lat: 49.187737, lng: -122.849525 },
    marker: null,
    events: [],
  }

  handleMapMount = map => this.setState({ map })
  handleSearchBarMount = searchBar => this.setState({ searchBar })

  handleBoundsChanged = () => this.setState({
    bounds: this.state.map.getBounds(),
    center: this.state.map.getCenter(),
  })

  handleMarkerRightClick = (targetMarker) => {
    // multiple
    // this.setState({
    //   markers: this.state.markers.filter(marker => marker.key !== targetMarker.key),
    // })
    // single
    this.setState({ marker: null })
  }

  handleOnInfoClose = (targetMarker) => {
    // this.setState({ markers: this.state.markers.map((marker) => {
    //   if (marker.key === targetMarker.key) {
    //     return {
    //       ...marker,
    //       showInfo: false,
    //     }
    //   }
    //   return marker
    // }) })

    this.setState({
      marker: {
        ...this.state.marker,
        showInfo: false,
      },
    })
  }

  handleOnMarkerClick = (targetMarker) => {
    // this.setState({ markers: this.state.markers.map((marker) => {
    //   if (marker.key === targetMarker.key) {
    //     return {
    //       ...marker,
    //       showInfo: true,
    //     }
    //   }
    //   return marker
    // }) })
    this.setState({
      marker: {
        ...this.state.marker,
        showInfo: true,
      },
    })
  }

  handleOnMapClick = (event) => {
    this.setState({
      markers: [
        ...this.state.markers,
        {
          position: event.latLng,
          defaultAnimation: 2,
          key: Date.now(),
          showInfo: false,
          onClick: this.handleOnMarkerClick,
          onRightClick: this.handleMarkerRightClick,
          onInfoClose: this.handleOnInfoClose,
        },
      ],
    })
  }

  handlePlacesChanged = () => {
    const places = this.state.searchBar.getPlaces()

    // Add a marker for each place returned from search bar
    const placesMarker = places.map(place => ({
      position: place.geometry.location,
      defaultAnimation: 2,
      key: Date.now(),
      showInfo: false,
      onClick: this.handleOnMarkerClick,
      onRightClick: this.handleMarkerRightClick,
      onInfoClose: this.handleOnInfoClose,
    }))

    // Set placesMarker; set map center to first search result
    const mapCenter = placesMarker.length > 0 ? placesMarker[0].position : this.state.center

    const updatedMarkers = [...this.state.markers, ...placesMarker]

    this.setState({
      center: mapCenter,
      markers: updatedMarkers,
    })
  }

  render() {
    return (
      <div style={styles.card}>
        <GoogleMap
          onMapMounted={this.handleMapMount}
          onSearchBarMounted={this.handleSearchBarMount}
          center={this.state.center}
          containerElement={<div style={{ height: '100%' }} />}
          mapElement={<div style={{ height: '100%' }} />}
          onBoundsChanged={this.handleBoundsChanged}
          onClick={this.handleOnMapClick}
          markers={this.state.markers}
          onPlacesChanged={this.handlePlacesChanged}
        />
      </div>
    )
  }
}

Map.propTypes = {}
Map.defaultProps = {}

export default Radium(Map)
