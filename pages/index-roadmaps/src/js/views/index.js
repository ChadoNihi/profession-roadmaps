import {h} from 'hyperapp';
import AppLayout from 'js/components/AppLayout.js';

export const view = (state, actions) =>
  <AppLayout state={state} actions={actions}>
    {/* TODO: implement routing or use the official router (for the latter first see https://github.com/hyperapp/router/issues/25) */}
    <h1>Hello, Junction</h1>
  </AppLayout>
