export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e1910c3110bfcb3fe8f3774',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-up8jfchd',
                  apiId: '6a466f76-0e53-4321-afac-55ddf1ef0692'
                },
                {
                  buildHookId: '5e1910c3d57e0192764a6966',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-a3nu2zx1',
                  apiId: '585a95f6-b90f-41d6-a614-4a3666bcd7cc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/econner/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-a3nu2zx1.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
