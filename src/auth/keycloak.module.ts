// import { Module } from '@nestjs/common';
// import { KeycloakConnectModule,ResourceGuard, RoleGuard, AuthGuard } from 'nest-keycloak-connect';
// import { ConfigModule, ConfigService} from '@nestjs/config';

// @Module({
//   imports: [
//     ConfigModule.forRoot(),
//     KeycloakConnectModule.registerAsync({
//       imports: [ConfigModule],
//       useFactory: (configService: ConfigService) => ({
//         authServerUrl: configService.get<string>('KEYCLOAK_URL', 'http://localhost:8080/'),
//         realm: configService.get<string>('KEYCLOAK_REALM', 'QSUC2PmYuHhJ3sjTy63GzL3RIytpbo1S'),
//         clientId: configService.get<string>('KEYCLOAK_CLIENT_ID', 'nestjs-backend'),
//         secret: configService.get<string>('KEYCLOAK_SECRET', 'salmataR'),
//         bearerOnly: true,
//         useNestLogger: true,
//       }),
//       inject: [ConfigService],
//     }),
//   ],
//   providers: [AuthGuard, ResourceGuard, RoleGuard],
//   exports: [KeycloakConnectModule],
// })
// export class KeycloakConfigModule {}



// {
//   "realm": "salmataR",
//   "auth-server-url": "http://localhost:8080/auth/",
//   "ssl-required": "external",
//   "resource": "nestjs-backend",
//   "credentials": {
//     "secret": "QSUC2PmYuHhJ3sjTy63GzL3RIytpbo1S"
//   },
//   "confidential-port": 0,
//   "policy-enforcer": {}
// }

