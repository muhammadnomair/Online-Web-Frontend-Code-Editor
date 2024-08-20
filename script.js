document.getElementById('run-btn').addEventListener('click', function() {
    const code = document.getElementById('editor').value;
    const outputContainer = document.getElementById('output');

    try {
        const outputFrame = document.createElement('iframe');
        outputFrame.style.width = "100%";
        outputFrame.style.height = "100%";
        
        outputContainer.innerHTML = '';
        outputContainer.appendChild(outputFrame);

        outputFrame.contentDocument.open();
        outputFrame.contentDocument.write(code);
        outputFrame.contentDocument.close();
    } catch (error) {
        outputContainer.innerHTML = `<div id="error">${error.message}</div>`;
    }
});

const divider = document.getElementById('divider');
const editor = document.getElementById('editor');
const output = document.getElementById('output');

let isDragging = false;

divider.addEventListener('mousedown', function(e) {
    isDragging = true;
});

document.addEventListener('mousemove', function(e) {
    if (!isDragging) return;
    let offsetRight = document.body.clientWidth - (e.clientX);
    editor.style.width = `calc(100% - ${offsetRight + 5}px)`;
    output.style.width = `${offsetRight - 5}px`;
});

document.addEventListener('mouseup', function() {
    isDragging = false;
});