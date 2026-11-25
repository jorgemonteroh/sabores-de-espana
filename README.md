# 🛒 Sabores de España

E-commerce de venta de productos alimenticios españoles. Desarrollado como **Proyecto Final de Ciclo (DAM)** con arquitectura cliente-servidor, pasarela de pago real y autenticación con Firebase.

---

## 🛠 Stack tecnológico

| Categoría | Tecnología |
|---|---|
| Frontend | React · Redux · Tailwind CSS |
| Backend | Node.js · API REST |
| Autenticación | Google Firebase |
| Base de datos | Google Firebase Realtime Database |
| Pasarela de pago | Stripe |
| Despliegue API | Vercel |
| Control de versiones | Git · GitHub |

---

## ✨ Funcionalidades principales

- **Catálogo de productos** — listado de productos españoles (embutidos, quesos, vinos...) organizados por Comunidad Autónoma, servidos desde una API REST desplegada en Vercel
- **Página de producto** — información detallada de cada artículo
- **Carrito de compra** — gestión de productos con Redux
- **Proceso de pago** — integración real con **Stripe**
- **Autenticación de usuarios** — registro e inicio de sesión con **Google Firebase**
- **Perfil de usuario** — datos personales y país de origen/residencia
- **Diseño responsive** — adaptado a cualquier dispositivo con Tailwind CSS
- **Arquitectura desacoplada** — frontend y backend en repositorios/carpetas independientes

---

## 📁 Estructura del proyecto

```
TFG_22-23/
├── client/          → Aplicación React (frontend)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/       # Store y slices
│   │   └── firebase.js  # Configuración Firebase
│   └── package.json
└── server/          → API REST Node.js (backend)
    ├── server.js
    └── package.json
```

---

## 🚀 Cómo ejecutarlo en local

### Requisitos previos
- [Node.js](https://nodejs.org/es/download)
- Cuenta de [Firebase](https://firebase.google.com) con proyecto creado
- Cuenta de [Stripe](https://stripe.com) con claves de prueba

### 1. Clona el repositorio

```bash
git clone https://github.com/jorgemonteroh/sabores-de-espana.git
cd sabores-de-espana
```

### 2. Configura las variables de entorno

**En `/client`**, crea un archivo `.env`:
```env
REACT_APP_FIREBASE_API_KEY=tu_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=tu_proyecto.firebaseapp.com
REACT_APP_FIREBASE_DATABASE_URL=https://tu_proyecto.firebaseio.com
REACT_APP_FIREBASE_PROJECT_ID=tu_proyecto
REACT_APP_STRIPE_PUBLIC_KEY=pk_test_...
```

**En `/server`**, crea un archivo `.env`:
```env
STRIPE_SECRET_KEY=sk_test_...
```

### 3. Arranca el frontend

```bash
cd client
npm install
npm start
```

### 4. Arranca el backend

```bash
cd server
npm install
npm start
```

La aplicación estará disponible en `http://localhost:3000`

---

## 📸 Vista del proyecto

**Inicio**

![Inicio](https://github.com/jorgemonteroh/TFG_22-23/assets/91729151/e2109c09-cb99-4d39-bbe5-50aee7221dee)

**Catálogo de productos**

![Productos](https://github.com/jorgemonteroh/TFG_22-23/assets/91729151/17140934-8f7a-465b-b51f-cd612e42c569)

**Ficha de producto**

![Producto](https://github.com/jorgemonteroh/TFG_22-23/assets/91729151/4f9a9e87-3090-4337-8220-ce58b1bafc3d)

**Proceso de compra**

![Compra](https://github.com/jorgemonteroh/TFG_22-23/assets/91729151/376848a6-ed9f-494b-9223-72d539c83912)

**Login / Registro**

![Login](https://github.com/jorgemonteroh/TFG_22-23/assets/91729151/8dd28765-3d0e-4d58-a268-df7534597415)

---

## 💡 Decisiones técnicas

**¿Por qué arquitectura cliente-servidor separada?**
Separar el frontend en React del backend en Node.js permite que cada parte escale de forma independiente y que la API pueda ser consumida por otros clientes en el futuro (app móvil, etc.).

**¿Por qué Redux para el carrito?**
El estado del carrito necesita ser accesible desde múltiples componentes (cabecera, página de producto, checkout). Redux centraliza ese estado y evita el prop drilling.

**¿Por qué Firebase para la autenticación?**
Firebase Auth gestiona registro, login y sesión de forma segura sin necesidad de implementar un sistema propio, permitiendo centrarse en la lógica de negocio.

**¿Por qué Stripe?**
Es el estándar en integración de pagos para aplicaciones web. Permite procesar pagos reales con mínima configuración y máxima seguridad, sin almacenar datos de tarjeta en el servidor propio.

**¿Por qué Vercel para la API?**
Despliegue gratuito, integración directa con GitHub y latencia mínima para APIs REST sin estado.

---

## 📄 Licencia

MIT — libre para usar y modificar.

---

*Desarrollado por [Jorge Montero](https://linkedin.com/in/jorgemonteroholgado) · Proyecto Final de Ciclo DAM · IES Gonzalo Chacón · 2023*
