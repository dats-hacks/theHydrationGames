import React, { Component }         from 'react'
import { connect }                  from 'react-redux'
import c3                           from 'c3'


export default class Graph extends Component {

  create() {
    const dataSet = [100, 1500, 10, 50]
    console.log(dataSet);
    const chart = c3.generate({
      bindto: '#comparison-graph',
      data: {
        columns: [
          dataSet[0],
          dataSet[1],
          dataSet[2],
          dataSet[3],
          dataSet[4]
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

    

    // const { dataSet } = this.props

    return <div id="comparison-graph"></div>
  }

}