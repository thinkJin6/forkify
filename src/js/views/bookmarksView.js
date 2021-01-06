// import icons from 'url:../../img/icons.svg';
// import previewView from './previewView.js';
// import View from './View.js';

// class BookmarksView extends View {
//   _parentElement = document.querySelector('.bookmarks__list');
//   _errorMessage = 'No bookmarks yet, find a recipe and bookmark it';
//   _sucessMessage = '';

//   _generateMarkup() {
//     console.log(this._data);
//     return this._data
//       .map(bookmark => previewView.render(bookmark, false))
//       .join('');
//   }
// }

import PreviewView from './previewView';

class BookmarksView extends PreviewView {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. find a recipe and bookmark it';
  _successMessage = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }
}

export default new BookmarksView();
