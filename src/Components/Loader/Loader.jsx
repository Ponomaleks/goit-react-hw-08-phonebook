import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import React from 'react';
import s from './Loader.module.css';

export default class LoaderEl extends React.Component {
  render() {
    return (
      <Loader
        className={s.loader}
        type="Oval"
        color={this.props.color}
        height={this.props.height}
        width={this.props.width}
        styles="padding: 0 auto"
      />
    );
  }
}
