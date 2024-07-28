const uploadArea = document.querySelector('.upload-area')

function dragInteraction(event) {
  event.preventDefault();

  if (event.type === 'dragenter' || event.type === 'dragover') {
    uploadArea.classList.add('is-dragover');
  }

  if (event.type === 'dragleave' || event.type === 'drop') {
    uploadArea.classList.remove('is-dragover');
  }
}

uploadArea.addEventListener('dragenter', dragInteraction);
uploadArea.addEventListener('dragover', dragInteraction);
uploadArea.addEventListener('dragleave', dragInteraction);
uploadArea.addEventListener('drop', dragInteraction);

uploadArea.addEventListener('drop', (e) => {
    const filenameLocation = document.querySelector('.file-upload')

    droppedFileName = e.dataTransfer.files[0].name

    const filenameSpan = document.createElement('span');
    filenameSpan.innerText = droppedFileName;

    if (document.querySelector('span') !== null) filenameLocation.removeChild(document.querySelector('span'))
    filenameLocation.appendChild(filenameSpan);
});