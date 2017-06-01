import { getFootures } from './core';

const ALL_FEATURES: Array<string> = [];

function isEnabled(feature: string) {
  const specifier: object = getFootures();

  if (ALL_FEATURES.indexOf(feature) === -1) {
    // Not registered yet, 
    ALL_FEATURES.push(feature);
  }

  return !!specifier[feature];
}

/**
 * Register features. Allows the admin UI to be generated with checkboxes.
 *
 * @param {array} features An array of features spread out like a variadic function.
 */
function register(...features) {
  const specifier: object = getFootures();

  features.forEach((feature) => {
    if (ALL_FEATURES.indexOf(feature) === -1) {
      ALL_FEATURES.push(feature);
    }
  });
}

function getAllFootures() {
  return ALL_FEATURES;
}

// footures.isEnabled('foo') and footures.register('foo', 'bar');
export { register, isEnabled, getAllFootures };
