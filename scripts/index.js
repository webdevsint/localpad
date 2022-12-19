const db = new LocalDB();

const data = db.storage().sort(function (x, y) {
  return parseInt(x.id) - parseInt(y.id);
});

data.reverse().forEach((item) => {
  const notePreview = document.createElement("div");
  notePreview.className = "note-preview";

  const titleWrapper = document.createElement("div");
  const btn = document.createElement("button");

  const previewTitle = document.createElement("div");
  const previewText = document.createElement("div");
  const previewDate = document.createElement("div");

  titleWrapper.innerHTML = `<mark style="font-size: 25px;">${item.title}</mark> <button onclick="deleteHandler(${item.id})">delete</button>`;
  titleWrapper.className = "title-wrapper";

  previewText.innerHTML = item.body;
  previewText.className = "preview-text";

  previewDate.innerText = item.date;

  notePreview.appendChild(titleWrapper);
  notePreview.appendChild(previewText);
  notePreview.appendChild(previewDate);

  document.querySelector(".notes-preview").appendChild(notePreview);
});

function deleteHandler(id) {
  db.remove(id);
  location.reload();
}
