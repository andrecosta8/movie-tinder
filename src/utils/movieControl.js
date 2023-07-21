
export const movieControl = (filmID, disliked, favorites) => {
  if (disliked.some(elem => elem.id === filmID) ||
        favorites.some(elem => elem.id === filmID)) {
        return false;
    } else return true;

}
