chrome.tabs.onCreated.addListener((tab) => {
  if (tab.incognito) {
    chrome.tabs.update(tab.id, { muted: true });
  }
});
