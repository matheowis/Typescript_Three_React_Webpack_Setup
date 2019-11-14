import * as React from 'react';
import * as ReactDOM from 'react-dom';
import WebGLContainer from './components/WebGLContainer';

export function InitializeReact(): Promise<Function> {
  return new Promise<Function>((resolve: () => void, reject: (val: string) => void) => {
    const containerElement: HTMLElement | null = document.getElementById('app');
    ReactDOM.render(<WebGLContainer />, containerElement, () => {
      resolve();
    })
  })
}