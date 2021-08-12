const routes = (handler) => [
  {
    method: 'POST',
    path: '/exports/playlists/{playlistId}',
    handler: handler.postExportSongAtPlaylistsHandler,
    options: {
      auth: 'musicapp_jwt',
    },
  },
];

module.exports = routes;
