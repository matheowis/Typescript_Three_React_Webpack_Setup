import * as React from "react";
import InjectStyles from 'react-jss';
import { IstyleSheet } from '../interfaces';

const styles: IstyleSheet = {
  canvasContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    overflow: 'hidden'
  },
};

interface WebGLContainerProps {
  classes: {
    canvasContainer: string
  },
}

class WebGLContainer extends React.Component<WebGLContainerProps, {}> {
  // private canvasRef = React.createRef();

  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.canvasContainer} id='canvasCointainer' />
    );
  }


}

export default InjectStyles(styles)<WebGLContainerProps>(WebGLContainer);
