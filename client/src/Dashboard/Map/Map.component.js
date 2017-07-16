import React from 'react'
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import SearchBox from 'react-google-maps/lib/places/SearchBox'

const styles = {
  searchBar: {
    border: '1px solid transparent',
    width: 240,
    height: 32,
    marginTop: 27,
    padding: '0 12px',
    borderRadius: 1,
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
    fontSize: 14,
    outline: 'none',
    textOverflow: 'ellipses',
  },
}

export default withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapMounted}
    defaultZoom={14}
    defaultCenter={props.center}
    onClick={props.onClick}
    onBoundsChanged={props.onBoundsChanged}
  >
    {
      props.searchBar ?
        <SearchBox
          ref={props.onSearchBarMounted}
          bounds={props.bounds}
          controlPosition={google.maps.ControlPosition.TOP_LEFT}
          onPlacesChanged={props.onPlacesChanged}
          inputPlaceholder="Customized your placeholder"
          inputStyle={styles.searchBar}
        /> :
        null
    }
    {props.markers.map(marker => (
      <Marker
        {...marker}
        onClick={() => marker.onClick(marker)}
        onRightClick={() => marker.onRightClick(marker)}
      >
        {
          marker.showInfo && (
            <InfoWindow onCloseClick={() => marker.onInfoClose(marker)}>
              <div>{marker.infoContent}</div>
            </InfoWindow>
          )
        }
      </Marker>
    ))}
  </GoogleMap>
))
