Package.describe({
  name: 'poetic:trello',
  version: '0.0.3',
  summary: 'node-trello packaged for meteor.',
  git: 'https://github.com/poetic/meteor-trello.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.addFiles('trello.js','server');

  api.export( 'Trello', 'server' );
});

Npm.depends({'node-trello': '1.1.2'});

