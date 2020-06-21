const gh = (url, user = 'yonicalsin') => `https://github.com/${user}/${url}`;
const ghp = (url, user = 'yonicalsin') => `https://${user}.github.io/${url}`;

export default [
   {
      icon: '🚀',
      title: 'Nest',
      path: 'https://nestjs.com/',
      source: gh('nest', 'nestjs'),
      description:
         'Framework para construir un servidor con nodejs y typescript',
   },
   {
      icon: '📋',
      title: 'React Hook Form',
      path: 'https://react-hook-form.com/',
      source: 'https://github.com/react-hook-form/react-hook-form',
      description:
         'React Hooks para la validación de formularios sin la molestia',
   },
   {
      icon: '☕',
      title: 'Sequelize',
      path: 'https://sequelize.org/',
      source: 'https://github.com/sequelize/sequelize',
      description: 'Un ORM de dialecto multi SQL fácil de usar para Node.js',
   },
   {
      icon: '🌍',
      title: 'Cogenv',
      path: 'https://github.com/cogenv',
      source: 'https://github.com/cogenv',
      description:
         'una eficiente y flexible biblioteca de JavaScript para manejar las variables del entorno',
   },
   {
      icon: '🎨',
      title: 'Sass Colors',
      path: ghp('sass-colors'),
      source: gh('sass-colors'),
      description: 'añade colores modernos a sass/scss.',
   },
   {
      icon: '📝',
      title: 'Format Fast',
      path: gh('format-fast'),
      source: gh('format-fast'),
      description: 'formatea string mágicamente',
   },
   {
      icon: '🌾',
      title: 'Nestjs Sequelize Seeder',
      path: gh('nestjs-sequelize-paginate'),
      source: gh('nestjs-sequelize-paginate'),
      description: 'seeder for nestjs and sequelize',
   },
   {
      icon: '🎸',
      title: 'Nestjs Crud Sequelize',
      path: gh('nestjs-crud-sequelize'),
      source: gh('nestjs-crud-sequelize'),
      description: 'Nestjs crude methods',
   },

   {
      icon: '🏆',
      title: 'greyblu.com',
      source: 'https://github.com/greyblu/greyblu.com/',
      description: 'Blog Personal de Yoni Calsin',
   },
];
