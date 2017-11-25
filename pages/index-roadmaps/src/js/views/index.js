import {h} from 'hyperapp';
import AppLayout from 'js/components/AppLayout.js';

export const view = (state, actions) => {
  const numCells = 3;
  const numRows = Math.ceil(state.roadmaps.length / numCells);

  return (
    <AppLayout state={state} actions={actions}>
      {/* TODO: implement routing or use the official router (for the latter first see https://github.com/hyperapp/router/issues/25) */}
        {(new Array(numRows)).fill(0).map((_, i)=> {
          return (
            <div class='tile is-ancestor'>
              <div class='tile is-parent'>
                {state.roadmaps.slice(i*numCells, i*numCells+numCells).map(prof=> {
                  return (
                    <div class={`tile is-child is-${Math.floor(12/numCells)} roadmap-tile`}>
                      <div class="card">
                        <div class="card-image">
                          <figure class="image is-4by3">
                            <img src={prof.bgSrc} alt={`Hero image for ${prof.title}`} />
                          </figure>
                        </div>
                        <div class="card-content">
                          <p class="subtitle">{prof.title}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
    </AppLayout>
  );
}
