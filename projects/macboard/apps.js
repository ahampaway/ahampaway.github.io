setInterval(volume,500);

function search() {
  var searchTerm = document.getElementById("searchInput").value.toLowerCase();
  var list = document.getElementById("list");
  var items = list.getElementsByTagName("div");
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var itemText = item.innerText.toLowerCase();

    if (itemText.includes(searchTerm)) {
      item.style.display = "flex"; // Show the anchor tag
    } else {
      item.style.display = "none"; // Hide the anchor tag
    }
  }
  
}

function volume() {
  let sounds = document.getElementsByTagName("audio");
  const volumeI = document.getElementById("volume").value;
  Array.from(sounds).forEach(function (sound) {
    sound.volume = volumeI;
  });
}

function playAll() {
  let sounds = document.getElementsByTagName("audio");
  Array.from(sounds).forEach(function (sound) {
    sound.play();
  });
}

function stopAll() {
  const els = document.getElementsByTagName("AUDIO");
  Array.from(els).forEach((el) => {
    el.load();
  });
}
