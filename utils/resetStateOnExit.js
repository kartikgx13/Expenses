export const resetStateOnExit = (store) => {
    window.addEventListener('beforeunload', () => {
      store.dispatch({ type: 'RESET_STATE' });
    });
  };
  