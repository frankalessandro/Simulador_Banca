const httpMocks = require('node-mocks-http');

// Mock de 'pg' para evitar conexión real a la BD
const mockQuery = jest.fn();
jest.mock('pg', () => {
  return {
    Pool: jest.fn(() => ({
      query: mockQuery,
    })),
  };
});

// Cargar el controlador después de definir el mock
const { loginUser } = require('../controllers/dataController');

describe('loginUser controller', () => {
  beforeEach(() => {
    mockQuery.mockReset();
  });

  it('responde 200 con usuario válido', async () => {
    // Primer query: existe usuario y password/rol
    mockQuery
      .mockResolvedValueOnce({ rows: [{ password: 'secret', rol: 'admin' }] })
      // Segundo query: devuelve datos del usuario
      .mockResolvedValueOnce({ rows: [{ id_usuario: 1, name_user: 'alice', password: 'secret' }] });

    const req = httpMocks.createRequest({
      method: 'POST',
      url: '/Login',
      body: { name: 'alice', password: 'secret' },
    });
    const res = httpMocks.createResponse();

    await loginUser(req, res);

    expect(res.statusCode).toBe(200);
    const data = res._getJSONData();
    expect(data).toHaveProperty('message', 'Inicio de sesión exitoso');
    expect(data).toHaveProperty('user');
    expect(data.user).toMatchObject({ name_user: 'alice', rol: 'admin' });
  });
});

