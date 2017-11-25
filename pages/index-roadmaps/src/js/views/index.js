import {h} from 'hyperapp';
import AppLayout from 'js/components/AppLayout.js';

export const view = (state, actions) => {
  const numCells = 3;
  const numRows = Math.ceil(state.roadmaps.length / numCells);

  return (
    <AppLayout state={state} actions={actions}>
      {/* TODO: implement routing or use the official router (for the latter first see https://github.com/hyperapp/router/issues/25) */}
      <nav class="level">
        <div class="level-left">
          <div class="level-item">
            <p class="subtitle is-5">
              <strong>{state.roadmaps.length}</strong> roadmaps found
            </p>
          </div>
          <div class="level-item">
            <div class="field has-addons">
              <p class="control">
                <input class="input" type="text" placeholder="Find a post" />
              </p>
              <p class="control">
                <button class="button">
                  Search
                </button>
              </p>
            </div>
          </div>
        </div>

<div class="level-right">
  <p class="level-item"><strong>All</strong></p>
  <p class="level-item"><a>Published</a></p>
  <p class="level-item"><a>Drafts</a></p>
  <p class="level-item"><a>Deleted</a></p>
  <p class="level-item"><a class="button is-success">New</a></p>
</div>
</nav>

        {(new Array(numRows)).fill(0).map((_, i)=> {
          return (
            <div class='tile is-ancestor'>
              <div class='tile is-parent'>
                {state.roadmaps.slice(i*numCells, i*numCells+numCells).map(prof=> {
                  return (
                    <div class={`tile is-child is-${Math.floor(12/numCells)} roadmap-tile`}>
                      <div class="card">
                        <a class="card-image" href='javascript:;'>
                          <figure class="image is-4by3">
                            <img src={prof.bgSrc} alt={`Hero image for ${prof.title}`} />
                          </figure>
                        </a>
                        <div class="card-content">
                          <a class="subtitle" href='javascript:;'>{prof.title}</a>
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
