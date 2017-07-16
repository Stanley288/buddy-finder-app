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
    {
      props.marker ?
        <Marker
          {...props.marker}
          onClick={() => props.marker.onClick(props.marker)}
          onRightClick={() => props.marker.onRightClick(props.marker)}
        >
          {
            props.marker.showInfo && (
              <InfoWindow onCloseClick={() => props.marker.onInfoClose(props.marker)}>
                <div>{props.marker.infoContent}</div>
              </InfoWindow>
            )
          }
        </Marker> :
        null
    }
    {props.events.map(event => (
      <Marker
        {...event}
        onClick={() => event.onClick(event)}
        onRightClick={() => event.onRightClick(event)}
      >
        {
          event.showInfo && (
            <InfoWindow onCloseClick={() => event.onInfoClose(event)}>
              <div>{event.infoContent}</div>
            </InfoWindow>
          )
        }
      </Marker>
    ))}
  </GoogleMap>
))
