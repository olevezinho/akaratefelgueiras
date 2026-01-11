function downloadFile(fileUrl) {
    fetch(fileUrl)
        .then(response => response.blob())
        .then(blob => {
            // Create the URL
            const url = URL.createObjectURL(blob);

            // Create the <a> element and click on it
            const a = document.createElement('a');
            a.href = url;
            a.download = fileUrl.split('/').pop();
            a.click();

            // We don't need to keep the object URL, let's release the memory
            // On older versions of Safari, it seems you need to comment this line...
            URL.revokeObjectURL(url);
        });
}