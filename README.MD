

## API 

### Login
```bash
curl -X POST http://localhost:4000/api/login -H 'Content-Type: application/json' --data '{"email":"sarath@gmail.com", "password": "234"}'
```

### Register

```bash

curl -X POST http://localhost:4000/api/register -H 'Content-Type: application/json' --data '{"firstName": "Sarath", "lastName":"TK","email":"sarath@gmx.com", "password": "234"}'

```