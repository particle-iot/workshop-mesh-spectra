module.exports = {
  base: '/',
  themeConfig: {
    repo: 'nielsclausen/workshop-mesh-thingscon2018',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    nav: [
      { text: 'Reflektor', link: 'https://www.reflektor.dk/' },
      { text: 'Particle', link: 'http://particle.io' }
    ],
    sidebar: [
      '/docs/',
      ['/docs/ch1', 'Chapter 1: Claiming your first Mesh device'],
      ['/docs/ch2', 'Chapter 2: Setting up your first Mesh network'],
      [
        '/docs/ch3',
        'Chapter 3: Working with sensors and the Particle Device Cloud'
      ],
      ['/docs/extra1', 'Extra: Taking your exploration further']
    ]
  },
  title: 'Particle Mesh Workshop',
  description:
    'A hands-on walkthrough of the Particle ecosystem, Particle Mesh and the new Particle Xenon.'
};
