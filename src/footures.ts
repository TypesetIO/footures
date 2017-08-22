import { getFootures, setFootures } from './core';

class FootureSpecifier {
  __all: Array<string>
}

/**
 * Adds feature to an internal list. Could be used to show UI.
 * @param feature Mark feature as having been used.
 */
function footureUsed(feature: string) {
  const specifier: FootureSpecifier = getFootures();

  if (!specifier.hasOwnProperty('__all')) {
    specifier.__all = [];
  }
  
  if (specifier.__all.indexOf(feature) === -1) {
    specifier.__all.push(feature);

    setFootures(specifier);
  }
}

function footureRetired(feature: string) {
  const specifier: FootureSpecifier = getFootures();

  if (specifier.hasOwnProperty('__all')) {
    const index : number = specifier.__all.indexOf(feature);
    if (index !== -1) {
      specifier.__all.splice(index, 1); // Remove the feature.

      setFootures(specifier);
    }
  }
}

function isEnabled(feature: string) {
  const specifier: FootureSpecifier = getFootures();

  footureUsed(feature);
  return !!specifier[feature];
}

/**
 * Register features. Allows the admin UI to be generated with checkboxes.
 *
 * @param {array} features An array of features spread out like a variadic function.
 */
function register(...features): void {
  const specifier: object = getFootures();

  features.forEach(footureUsed);
}

/**
 * Deregister features. Allows the admin UI to be cleaned up from time to time
 * when footures are retired.
 * 
 * @param {array} features An array of features spread out for a variadic
 * function.
 */
function retire(...features): void {
  const specifier: object = getFootures();
  features.forEach(footureRetired);
}

function getAllFootures(): Array<String> {
  const specifier: FootureSpecifier = getFootures();
  return specifier.__all;
}

// footures.isEnabled('foo') and footures.register('foo', 'bar');
export default { register, retire, isEnabled, getAllFootures };
export { register, retire, isEnabled, getAllFootures };
