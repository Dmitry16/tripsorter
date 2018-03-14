import React from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';

const style = {
  container: {
    left: '0',
    display: 'flex',
    position: 'absolute',
    width: '100%',
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
};

const getPos = () => {
  let pos = window.innerWidth/2-50;
  console.log('POS!!!!',pos,window.innerWidth);
  return pos;
}
const ProgressLoading = (props) => (
  <div style={style.container}>
    <RefreshIndicator
      size={100}
      left={getPos()}
      top={0}
      loadingColor="#FF9800"
      status={props.status}
      style={style.refresh}
    />
  </div>
);

export default ProgressLoading;
