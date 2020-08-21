import { AuthLoginMiddleware } from './auth-login.middleware';

describe('AuthLoginMiddleware', () => {
  it('should be defined', () => {
    expect(new AuthLoginMiddleware()).toBeDefined();
  });
});
