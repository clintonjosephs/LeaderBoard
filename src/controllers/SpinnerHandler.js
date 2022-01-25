const spinnerToogle = (spinnerId, displayStatus) => {
    const spinner = document.querySelector('#'+spinnerId);
    if (!displayStatus) {
        spinner.classList.remove("show");
        spinner.classList.add("hide");
    } else {
        spinner.classList.remove("hide");
        spinner.classList.add("show")
    }
}

export default spinnerToogle;