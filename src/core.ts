const LS_KEY = 'footures';

function getFootures() {
  const serializedFootures = window.localStorage.getItem(LS_KEY);

  if (serializedFootures) {
    return JSON.parse(serializedFootures);
  } else {
    return {};
  }
}

function setFootures(footureObj) {
  const serializedFootures = JSON.stringify(footureObj);
  window.localStorage.setItem(LS_KEY, serializedFootures); 
}

export { getFootures, setFootures };