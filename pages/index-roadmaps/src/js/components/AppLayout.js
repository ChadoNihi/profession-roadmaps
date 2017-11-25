import { h } from 'hyperapp';

export default ({state, actions}, childElemets)=> {
  return (
    <div>
    <nav class="navbar is-white" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
          <img class='logo' src="/imgs/TODO.png" alt="LOGO" />
        </a>
        <a class='navbar-item is-pulled-right is-hidden-desktop' href="javascript:;">Log Out</a>
        <button class={`button navbar-burger ${state.isDashboardMenuOpen ? 'is-active' : ''}`} onclick={actions.onNavMenuBtnClick}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div class="navbar-menu">
        <div class='navbar-end'>
          <a class='navbar-item is-active' href='javascript:;'>Browse Roadmaps</a>
          <a class='navbar-item' href='javascript:;'>Log Out</a>
        </div>
      </div>
    </nav>

    <div class='container'>
      <div class='columns'>
        <aside class={`main-menu menu column is-dark is-one-fifth is-narrow-tablet ${state.isDashboardMenuOpen ? '' : 'is-hidden-mobile'}`}>
          <p class="menu-label">
            General
          </p>
          <ul class="menu-list">
            <li><a>Progress Overview</a></li>
            <li><a>Started Roadmaps</a></li>
          </ul>
          <p class="menu-label">
            Community
          </p>
          <ul class="menu-list">
            <li><a>Edit Requests</a></li>
            <li><a>Endorsements</a></li>
          </ul>
          <p class="menu-label">
            Settings
          </p>
          <ul class="menu-list">
            <li><a>Profile</a></li>
            <li><a>Privacy</a></li>
          </ul>
        </aside>

        <main class='column'>
          {childElemets}
        </main>
      </div>
    </div>

    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <span class='has-text-weight-bold'>utilitronium</span> team for <span class='has-text-weight-bold'>Junction 2017</span>. Made with <a href='https://bulma.io/'>Bulma</a> & <a href='https://hyperapp.js.org'>Hyperapp</a>.
          </p>
        </div>
      </div>
    </footer>
    </div>
  );
}
