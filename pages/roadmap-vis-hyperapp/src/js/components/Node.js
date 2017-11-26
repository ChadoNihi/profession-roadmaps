import { h } from 'hyperapp';
// import Node from 'js/components/Node.js';

export default ({status, subjObjs})=> {
  return (
    <g>
      <circle class={`node-main-shape is-${status}`} cx="100" cy="100" r="100"></circle>
    </g>
  );
}
