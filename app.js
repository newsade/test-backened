// app.js

const User = require('./user');

(async () => {
  try {
    await User.sync({ force: true });
    console.log('User table created.');

    const user = await User.create({ name: 'John Doe', email: 'johndoe@example.com' });
    console.log('User created:', user.toJSON());
  } catch (error) {
    console.error('Error:', error);
  } finally {
    process.exit();
  }
})();
