
function downloadCV() {
    const url = "https://drive.google.com/file/d/1_I57VyXBXMgK0x6Ebk9xrpQ3W-fJKfSh/uc?export=download";
    const filename = "YourCVName.pdf";
    
    // Create a temporary anchor element
    const tempLink = document.createElement('a');
    tempLink.href = url;
    tempLink.download = filename;
    tempLink.style.display = 'none';
    document.body.appendChild(tempLink);
    
    // Simulate a click to start the download
    tempLink.click();
    
    // Remove the temporary anchor element
    document.body.removeChild(tempLink);
}
