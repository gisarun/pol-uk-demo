// Shared helper to post messages to the parent window from any journey page
// Usage: sendMessageToParent(objMes);
function sendMessageToParent(objMes) {
  if (typeof window !== "undefined" && window.parent) {
    window.parent.postMessage(objMes, "*");
  }
}
