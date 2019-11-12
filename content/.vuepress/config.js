module.exports = {
  base: '/',
  themeConfig: {
    repo: 'particle-iot/particle-azure-workshop-2019',
    docsDir: 'content',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Team', link: 'http://particle.io' }
    ],
    sidebar: [
      '/docs/',
      ['/docs/ch1', 'Chapter 1: Getting your Particle Argon online'],
      [
        '/docs/ch2',
        'Chapter 2: Working with Particle Workbench, Primitives & the Device Cloud'
      ],
      ['/docs/ch3', 'Chapter 3: Integrations & Azure IoT Central'],
      ['/docs/extra', 'Extra: Going Even Further!']
    ]
  },
  title: 'Particle & Azure Workshop',
  description:
    'Workshops designed to teach the basics of IoT development with the Particle ecosystem & the Particle Argon'
};
