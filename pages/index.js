import React, { Component } from 'react';

export default class Example extends Component {
  componentDidMount() {
    this.worker = new Worker(new URL('../example.worker', import.meta.url));
    this.worker.postMessage('from Host');
    this.worker.addEventListener('message', this.onWorkerMessage);
  }
  componentWillUnmount() {
    this.worker.terminate();
  }
  onWorkerMessage = (event) => console.log('Host received:', event.data);
  render() {
    return <h1>Web Worker Example</h1>
  }
}