RunFunctions();

function RunFunctions() {
    IncreaseViews();
    $("#view-count").text(AddCommas($("#view-count").text()));
}

// function that adds a view count to the bottom of the page. Use localStorage to store the view count. The view count
// will increment randomly between 1 and 8 every time a page is loaded.
function IncreaseViews() {
    // first generate a random number between 1 and 8
    let randomNumber = Math.floor(Math.random() + 8) + 1;
    // if the view count is null/undefined, set it to 0.
    if (localStorage.getItem("view-count") === null) {
        localStorage.setItem("view-count", 0);
    }
    // get the view count
    let viewCount = localStorage.getItem("view-count");
    // add the random number to the view count
    viewCount = parseInt(viewCount) + randomNumber;
    // set the view count to the new value
    localStorage.setItem("view-count", viewCount);
    // display the view count on the page
    $("#view-count").text(viewCount);
}

// add a comma to the view count every 3 digits
function AddCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}