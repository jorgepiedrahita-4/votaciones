# Votaciones - Colegio Boston Voting System

## Overview
This is a voting application built for "Colegio Boston" using Angular 12 and Firebase Firestore. The application allows users to vote for candidates and provides an administration panel to view vote counts and manage the voting process.

## Recent Changes (November 6, 2025)
- Successfully imported from GitHub and configured for Replit environment
- Added Node.js legacy OpenSSL provider support for compatibility with Node.js 20
- Configured Angular dev server to run on port 5000 with host 0.0.0.0
- Disabled host check to support Replit's iframe proxy
- Set up deployment configuration for production

## Project Architecture

### Frontend Framework
- **Angular 12**: Main application framework
- **TypeScript 4.3.5**: Programming language
- **RxJS 6.6**: Reactive programming library

### Backend & Database
- **Firebase 8.10.0**: Backend as a Service
- **Cloud Firestore**: Real-time NoSQL database for storing votes
- **@angular/fire 6.1.5**: Angular integration library for Firebase

### Key Components
1. **AppComponent** (`src/app/app.component.ts`)
   - Main application component
   - Manages view state (voting vs. admin)
   - Contains candidate profiles
   - Admin password: "1234"

2. **PerfilComponent** (`src/app/pages/perfil/`)
   - Individual candidate profile component
   - Handles vote submission through VotosService

3. **AdministracionVotosComponent** (`src/app/pages/administracion-votos/`)
   - Admin panel for viewing vote results
   - Displays real-time vote counts
   - Allows deletion of all votes

4. **VotosService** (`src/app/services/votos.service.ts`)
   - Service for all Firestore interactions
   - Methods: `votar()`, `obtenerVotos()`, `eliminarVotos()`

### Firebase Configuration
The Firebase configuration is stored in `src/environments/environment.ts`. The app connects to the Firebase project "votaciones-31a35".

## Development Setup

### Running Locally
The application runs on port 5000 with the following command:
```bash
npm start
```

This executes: `NODE_OPTIONS=--openssl-legacy-provider ng serve`

The legacy OpenSSL provider flag is required due to compatibility issues between Angular 12's webpack version and Node.js 20+.

### Building for Production
```bash
npm run build
```

This creates optimized production files in the `dist/votaciones` directory.

## Deployment
The application is configured to deploy as an "autoscale" deployment:
- Build command: `npm run build`
- Run command: Serves the built files using http-server on port 5000

## Candidates
1. Diego Andres Buitrago - #01
2. Maria Isabella Suarez - #02
3. Juan Felipe Valencia - #03
4. Jheferson Gutierres - #04
5. Voto en blanco (Blank vote)

## Admin Access
To access the administration panel:
1. Click "Administración de Votos" in the navigation
2. Enter password: "1234"
3. View vote counts and manage votes

## Security Notes
- Admin password is hardcoded in the application (should be changed for production use)
- Host check is disabled for development to work with Replit's proxy system
- Firebase API keys are visible in the client code (normal for Firebase web apps)

## File Structure
```
/
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   ├── administracion-votos/
│   │   │   └── perfil/
│   │   ├── services/
│   │   │   └── votos.service.ts
│   │   ├── app.component.*
│   │   ├── app.module.ts
│   │   └── app-routing.module.ts
│   ├── assets/
│   │   └── imagenes/
│   ├── environments/
│   │   ├── environment.ts
│   │   └── environment.prod.ts
│   └── index.html
├── angular.json
├── package.json
└── firebase.json
```

## Known Issues
- Using Angular 12 which is an older version (consider upgrading to latest Angular)
- Several npm package vulnerabilities (72 total) - run `npm audit` for details
- Admin password stored in plain text in the code
