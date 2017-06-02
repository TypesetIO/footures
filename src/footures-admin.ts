import { getFootures, setFootures } from './core';

interface footuresGlobal {
  isEnabled(feature: string): boolean,
  getAllFootures(): Array<string>,
}

declare var footures: footuresGlobal;

/**
 * Enable, for this browser, features.
 *
 * @param {array} features An array of features spread out like a variadic function.
 */
function enable(...features) {
  const specifier = getFootures();

  features.forEach((feature) => {
    specifier[feature] = true;
  });

  setFootures(specifier);
}

/**
 * Disable, for this browser, features.
 *
 * @param {array} features An array of features spread out like a variadic function.
 */
function disable(...features) {
  const specifier = getFootures();
  
  features.forEach((feature) => {
    specifier[feature] = false;
  });

  setFootures(specifier)
}

function renderFootureRow(footure) {
  const enabled = footures.isEnabled(footure);
  const clickHandlerAttr = enabled ? `javascript:footuresAdmin.disable('${footure}');` : `javascript:footuresAdmin.enable('${footure}');`;

  const checkbox = `<input type="checkbox" id="footure-${footure}" 
    onchange="${clickHandlerAttr}"
    ${enabled ? 'checked' : ''} />`

  return`<tr>
    <td><label for="footure-${footure}">${footure}</label></td>
    <td>${checkbox}</td>
  </tr>`;
}

function showUI(selector: string) {
  const elem = document.querySelector(selector);

  const rows = footures.getAllFootures()
    .map(renderFootureRow);

  const table = `<table>${rows.join('')}</table>`;
  elem.innerHTML = `<div class="footures-admin">
    ${table}
    <span>F</span>
  </div>`;
}

export { enable, disable, showUI }