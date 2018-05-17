import { Component } from 'react';

export abstract class ConnectedComponent<Props = {}, ConnectedProps = {}, State = {}> extends 
Component<Props | (Props & ConnectedProps), State> {
    protected get connected() {
      return this.props as Readonly<ConnectedProps>;
    }
  }