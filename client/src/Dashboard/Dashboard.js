import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Radium from 'radium'

import NavBar from 'components/NavBar'
import Map from './Map'
import Sidebar from './Sidebar'
import { actions } from './dashboard.module'

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  navBar: {
    height: 50,
  },
  dashboard: {
    flex: 15,
    display: 'flex',
  },
  map: {
    flex: 1,
  },
}

class Dashboard extends Component {
  state = {
    selected: null,
    suggests: [],
  }

  onSelect = (suggest) => {
    this.geoSuggest.update(suggest.label)
    this.setState({
      selected: suggest,
      suggests: [],
    })
  }

  getSuggests = suggests => this.setState({ suggests })

  // saving getSuggest in state causes stack overflow
  handleGeoSuggestRef = e => (this.geoSuggest = e)

  render() {
    return (
      <div style={styles.root}>
        <NavBar style={styles.navBar} title="Buddy Finder" />
        <Sidebar
          suggests={this.state.suggests}
          handleRef={this.handleGeoSuggestRef}
          onSelect={this.onSelect}
          getSuggests={this.getSuggests}
        />
        <div style={styles.dashboard}>
          <div style={styles.map}>
            <Map selected={this.state.selected} />
          </div>
        </div>
      </div>
    )
  }
}

Dashboard.propTypes = {}
Dashboard.defaultProps = {}

const mapStateToProps = state => ({
  places: state.dashboard.places,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...actions }, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Radium(Dashboard))
