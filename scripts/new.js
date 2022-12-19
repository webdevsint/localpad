const db = new LocalDB();

const data = db.storage().sort(function (x, y) {
  return parseInt(x.id) - parseInt(y.id);
});

const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1;
let dd = today.getDate();

if (dd < 10) dd = "0" + dd;
if (mm < 10) mm = "0" + mm;

const formattedToday = dd + "/" + mm + "/" + yyyy;

const noteNumber =
  data.length === 0 ? 01 : parseInt(data.reverse()[0].title.split("#")[1]) + 1;

function submitHandler() {
  const payload = {
    title: `note#${noteNumber}`,
    body: quill.root.innerHTML,
    date: formattedToday,
  };

  if (payload.body.length < 1) {
    alert("please fill up all the fields!");
  } else {
    db.write(JSON.stringify(Date.now()), payload);
    alert("new note created!");
    location.replace("/");
  }
}
