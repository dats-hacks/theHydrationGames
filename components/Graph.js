import React, { Component }         from 'react'
import { connect }                  from 'react-redux'
import c3                           from 'c3'

import { receiveDataSet }           from '../actions/actionGraph'


export default class Graph extends Component {

  handleChange() {
    this.props.dispatch(receiveDataSet);
  }

  create() {
    
    const chart = c3.generate({
      bindto: '#comparison-graph',
      data: {
        columns: [
          this.props.dataSet[0],
          this.props.dataSet[1],
          this.props.dataSet[2],
          this.props.dataSet[3],
          this.props.dataSet[4]
        ],
        types: {
          "One": 'bar',
          "Two": 'bar',
          "Three": 'bar',
          "Four": 'bar'
        }
      }
    });
  }

  componentDidMount() {
    this.create(this.props.dataSet);
  }

  render() {

    

    const { dataSet } = this.props

    return <div>
    { dataSet ?
      <div id="comparison-graph"></div> : 
      <div>...Loading</div>
    }
    </div>
  }

}


function mapStateToProps(state) {
  const dataSet = state.dataSet;

  return {
    dataSet
  };
}

export default connect(mapStateToProps)(Graph)
