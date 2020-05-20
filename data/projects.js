const gh = (url, user = 'yoicalsin') => `https://github.com/${user}/${url}`;
const ghp = (url, user = 'yoicalsin') => `https://${user}.github.io/${url}`;

export default [
   {
      icon: '🚀',
      title: 'Nest',
      path: 'https://nestjs.com/',
      source: gh('nest', 'nestjs'),
      description:
         'A progressive Node.js framework for building efficient, scalable, and enterprise-grade server-side applications on top of TypeScript & JavaScript (ES6, ES7, ES8)',
   },
   {
      icon: '📋',
      title: 'React Hook Form',
      path: 'https://react-hook-form.com/',
      source: 'https://github.com/react-hook-form/react-hook-form',
      description:
         'React hooks for forms validation without the hassle (Web + React Native)',
   },
   {
      icon: '🌍',
      title: 'Cogenv',
      path: 'https://github.com/cogenv',
      source: 'https://github.com/cogenv',
      description:
         'Cogenv is a zero-dependency module that loads environment variables from an .env file into process.env. Storing the configuration in the environment separate from the code is based on The Twelve-Factor App methodology, and with support for typescript',
   },
   {
      icon: '🎨',
      title: 'Sass Colors',
      path: ghp('sass-colors'),
      source: gh('sass-colors'),
      description:
         'Sass-colors 🌐 is a scss library, which adds modern colors.',
   },
   {
      icon: '📝',
      title: 'Format Fast',
      path: gh('format-fast'),
      source: gh('format-fast'),
      description:
         'Format-fast is a function that allows you to replace certain words to make a string dynamically, and very easily !',
   },
   {
      icon: '🎁',
      title: 'Nestjs Sequelize Seeder',
      path: gh('nestjs-sequelize-seeder'),
      source: gh('nestjs-sequelize-seeder'),
      description:
         'The optimized dark theme for web development. Your new favorite theme.',
   },
   {
      icon: '🌾',
      title: 'Nestjs Sequelize Seeder',
      path: gh('nestjs-sequelize-paginate'),
      source: gh('nestjs-sequelize-paginate'),
      description:
         'A simple extension library for nestjs sequelize to perform seeding.',
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
      description: 'Personal theme for Gatsby (the source of this website).',
   },
];
