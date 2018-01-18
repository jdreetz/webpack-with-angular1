import app from '../common/app';

const NAME = 'ListDisplay';

export default app.factory(NAME, ($sce) => {
  return {
    renderList: (items, prop) => {
      if(items && items.length) {
        const list = items.map( item => `<li>${item[prop]}</li>` );
        const rendered = `
          <ul>${list}</ul>
        `;

        return $sce.getTrustedHtml(rendered);
      } else {
        return '';
      }
    }
  }
});