import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Canvas from './components/Canvas';

export function InitializeReact(): Promise<Function> {
  return new Promise<Function>((resolve: () => void, reject: (val: string) => void) => {
    const containerElement: HTMLElement = document.getElementById('app');
    ReactDOM.render(<Canvas />, containerElement, () => {
      resolve();
    })
  })
}