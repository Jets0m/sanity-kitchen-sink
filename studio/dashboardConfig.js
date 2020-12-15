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
                  buildHookId: '5fd8cfc1dca1f6152ce4160d',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-gmoe3qsz',
                  apiId: '114da1da-e7a5-435e-9c61-4123059dc051'
                },
                {
                  buildHookId: '5fd8cfc1c0de9a1a90736868',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-bfjxhxpo',
                  apiId: '788a4e86-a369-4cfc-86e6-0e606d35ad01'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Jets0m/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-bfjxhxpo.netlify.app', category: 'apps'}
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
