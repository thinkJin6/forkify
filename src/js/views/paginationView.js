import icons from 'url:../../img/icons.svg';
import View from './View.js';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    const prevButton = `
        <button data-goto="${
          curPage - 1
        }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
                </svg>
            <span>Page ${curPage - 1}</span>
        </button>
        `;
    const nextButton = `
        <button data-goto="${
          curPage + 1
        }" class="btn--inline pagination__btn--next">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>
        `;

    // Page 1, there are other pages
    if (curPage === 1 && numPages > 1) {
      return nextButton;
    }

    // Last Page
    if (curPage === numPages && numPages > 1) {
      return prevButton;
    }

    // Other page
    if (curPage < numPages) {
      return prevButton + nextButton;
    }
    // Page 1, there are NO other pages
    return '';
  }
}

export default new PaginationView();

// // Page 1, there are other pages
// if (curPage === 1 && numPages > 1) {
//     return this._generateMarkup('next', curPage + 1, 'right');
//   }

//   // Last Page
//   if (curPage === numPages && numPages > 1) {
//     return this._generateMarkupBtn('prev', curpage - 1, 'left');
//   }

//   // Other page
//   if (curpage < numPages) {
//     return [
//       this._generateMarkupBtn('prev', curpage - 1, 'left'),
//       this._generateMarkupBtn('next', curpage + 1, 'right'),
//     ];
//   }
//   // Page 1, there are NO other pages
//   return '';
// }
// _generateMarkupBtn(order, page, direction) {
//   return `
//       <button class="btn--inline pagination__btn--${order}">
//           <svg class="search__icon">
//             <use href="${icons}#icon-arrow-${direction}"></use>
//           </svg>
//           <span>Page ${page}</span>
//       </button>
//     `;
// }
