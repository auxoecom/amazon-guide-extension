chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "getAnswer") {
    let query = encodeURIComponent(request.query);
    let xhr = new XMLHttpRequest();
    xhr.open("GET", curl https://app.customgpt.ai/api/projects/909/ask-me-anything/result?prompt=Ask+me+any+Amazon+question \
    -H 'Authorization:97|8qZOUM1aeHZYwqmNEbyNkPpqkArkw7kZT7AQs5mm' \, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          let response = JSON.parse(xhr.responseText);
          sendResponse({answer: response.answer});
        } else {
          sendResponse({error: "Error retrieving answer from database."});
        }
      }
    };
    xhr.send();
    return true;
  }
});

