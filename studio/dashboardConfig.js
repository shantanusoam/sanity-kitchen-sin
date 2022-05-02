export default {
  widgets: [
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
                  buildHookId: '6270034f459f1a66be9933b3',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sin-studio',
                  apiId: 'd95342db-a338-4a33-8d04-cc3286418857'
                },
                {
                  buildHookId: '627003507b18fe5fada8ebb1',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sin-web',
                  apiId: 'f5ff0a6b-9ee7-4e68-b0bc-4efdb2509d02'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shantanusoam/sanity-kitchen-sin',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sin-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
