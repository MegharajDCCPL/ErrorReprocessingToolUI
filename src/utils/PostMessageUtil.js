const postMessageToParent = (messageType, messageData) => {
  const Nexus_UI_URL = document
    .getElementById("Nexus_UI_URL")
    .getAttribute("value");
  const message = {
    type: messageType,
    data: messageData,
  };
  window.parent.postMessage(message, Nexus_UI_URL);
};

export default postMessageToParent;
