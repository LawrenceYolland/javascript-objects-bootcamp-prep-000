var playlist = {'Radical Face': 'Ghost Towns', 'Sufjan Stevens': 'Death with Dignity'};

function updatePlaylist(obj, newKey, newVal) {
  return Object.assign(obj, {newKey: newVal})
}

function removeFromPlaylist(obj, key) {
  return delete obj.key
}