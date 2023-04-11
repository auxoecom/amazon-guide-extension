chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "getAnswer") {
    let query = encodeURIComponent(request.query);
    let xhr = new XMLHttpRequest();
    let apiKey = "97|8qZOUM1aeHZYwqmNEbyNkPpqkArkw7kZT7AQs5mm";
    let apiUrl = "https://app.customgpt.ai/api/projects/909/ask-me-anything/result?prompt=Ask+me+any+Amazon+question";
    xhr.open("GET", apiUrl, true);
    xhr.setRequestHeader("Authorization", apiKey);
    xhr.onreadystatechange = function() {
     if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let response = JSON.parse(xhr.responseText);
      // handle response here
    }
  }
};
xhr.send();
    return true;
  }
});

