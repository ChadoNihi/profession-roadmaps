// About nested state and actions - https://github.com/hyperapp/hyperapp/blob/master/docs/slices.md.
// Remember: actions must never mutate the state directly.
export const actions = {
  /* Important: nested actions have only access to sibling and child state and actions.*/
  onNavMenuBtnClick: state => ({
    isDashboardMenuOpen: !state.isDashboardMenuOpen
  }),
}
