import app from '../common/app';

const NAME = 'MyFactory';

export default app.factory(NAME, ($q) => ({ foo: 'bar' }) );