import React from 'react'
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import SearchBox from 'react-google-maps/lib/places/SearchBox'

import theme from 'theme'

const styles = {
  searchBar: {
    border: `1px solid ${theme.color.primary}`,
    backgroundColor: theme.color.white,
    width: 240,
    height: 50,
    borderRadius: 25,
    padding: '0 25px',
    margin: '10px 0 0 -100px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
    fontSize: 14,
    zIndex: 2,
    outline: 'none',
    textOverflow: 'ellipses',
  },
}

export default withGoogleMap(({ marker, ...props }) => (
  <GoogleMap
    ref={props.onMapMounted}
    defaultZoom={14}
    defaultCenter={props.center}
    center={props.center}
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
          inputPlaceholder="Search for a place or event"
          inputStyle={styles.searchBar}
        /> :
        null
    }
    {
      marker ?
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
