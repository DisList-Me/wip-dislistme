const socket = io.connect("https://dislist.me");

socket.on('userCount', userCount => {
let doc = document.getElementById('connectionCount');
  if(doc) {
    doc.innerHTML = userCount;
  }
})
