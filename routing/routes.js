const { history } = Window;


function updatePage (e) {
  const page = getPage(e);
  updateHistory(page);
}

function updateHistory (page) {
  history.pushState(page);
}

function getPage (e) {
    if (!e) return "home";
    return e.target.id;
}

function loadContent(page) {

}