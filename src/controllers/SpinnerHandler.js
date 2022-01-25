import Loader from '../images/loader.gif';

const spinnerToogle = (spinnerId, displayStatus) => {
  const spinner = document.querySelector(`#${spinnerId}`);
  if (!displayStatus) {
    if (spinnerId === 'recentScoreSpinner') {
      document.querySelector('.sync').classList.remove('hide');
      document.querySelector('.sync').classList.add('show');
    }
    spinner.classList.remove('show');
    spinner.classList.add('hide');
  } else {
    if (spinnerId === 'recentScoreSpinner') {
      document.querySelector('.sync').classList.remove('show');
      document.querySelector('.sync').classList.add('hide');
    }
    spinner.classList.remove('hide');
    spinner.classList.add('show');
  }
};

const retrieveRecentScoresLoader = () => {
  const loadingContent = document.querySelector('.loaderImg');

  const loader = document.querySelector('.loader');
  // setup loading text
  const span = document.createElement('span');
  span.innerHTML = '<i>loading recent scores ... </i>';
  span.style.color = 'white';

  // update loading image and set loading spinner in motion
  const myLoader = new Image();
  myLoader.src = Loader;
  myLoader.style.width = '150px';
  myLoader.style.height = '150px';
  loadingContent.appendChild(myLoader);
  loadingContent.appendChild(span);
  loader.style.visibility = 'visible';

  return loader;
};

export { spinnerToogle, retrieveRecentScoresLoader };
