import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class KeycloakService {
  private readonly logger = new Logger(KeycloakService.name);
  private baseUrl = process.env.KEYCLOAK_BASE_URL || 'default_base_url';
  private realm = process.env.KEYCLOAK_REALM || 'default_realm';
  private clientId = process.env.KEYCLOAK_CLIENT_ID || 'default_client_id';
  private clientSecret = process.env.KEYCLOAK_CLIENT_SECRET || 'default_client_secret';

  async registerAndGetToken(user: { username: string; email: string; password: string; code?: string }): Promise<string> {
    this.logger.debug(`Registering user in Keycloak and getting token for: ${user.username}`);
    const keycloakResponse = await this.register(user);
    const token = keycloakResponse?.access_token;
    // if (!token) {
    //   this.logger.error('Failed to obtain access token from Keycloak');
    //   throw new InternalServerErrorException('Failed to obtain access token from Keycloak');
    // }
    return token;
  }

  async register(user: any): Promise<any> {
    const url = `${this.baseUrl}/admin/realms/${this.realm}/users`;
    this.logger.debug(`Register URL: ${url}`);

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${await this.getAdminAccessToken()}`,
    };

    const data = {
      username: user.username,
      enabled: true,
    
      email: user.email,
      emailVerified: true,
      credentials: [
        {
          type: 'password',
          value: user.password,
          temporary: false,
        },
      ],
      attributes: {
        code : user.code,
      }
    };
    

    try {
      const response = await axios.post(url, data, { headers });
      this.logger.debug(`User registered successfully: ${response.data}`);
      return response.data;
    } catch (error) 
    
    {
      console.log(error)
      this.logger.error(`Error registering user: ${error.response?.data || error.message}`);
      throw new InternalServerErrorException('Failed to register user');
    }
  }

  async getAdminAccessToken(): Promise<string> {
    const url = `${this.baseUrl}/realms/${this.realm}/protocol/openid-connect/token`;
    this.logger.debug(`Token URL: ${url}`);

    const data = new URLSearchParams();
    data.append('client_id', this.clientId);
    data.append('client_secret', this.clientSecret);
    data.append('grant_type', 'client_credentials');

    try {
      const response = await axios.post(url, data);
      this.logger.debug('Admin access token received');
      return response.data.access_token;
    } catch (error) {
      this.logger.error(`Error obtaining admin access token: ${error.response?.data || error.message}`);
      if (error.response) {
        this.logger.error(`Status: ${error.response.status}`);
        this.logger.error(`Data: ${JSON.stringify(error.response.data)}`);
      }
      throw new InternalServerErrorException('Failed to obtain admin access token');
    }
  }

  async login(username: string, password: string) {
    const url = `${this.baseUrl}/realms/${this.realm}/protocol/openid-connect/token`;
    this.logger.debug(`Login URL: ${url}`);
    console.log(username)
    console.log(password)

    const data = new URLSearchParams();
    data.append('client_id', this.clientId);
    data.append('client_secret', this.clientSecret);
    data.append('grant_type', 'password');
    data.append('username', username);
    data.append('password', password);

    try {
      const response = await axios.post(url, data,{
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded',
        }
    });
      this.logger.debug('User logged in successfully');
      return response.data;
    } catch (error)
     {
      this.logger.error(`Error logging in user: ${error.response?.data || error.message}`);
      console.log(error)
      if (error.response) {
        this.logger.error(`Status: ${error.response.status}`);
        this.logger.error(`Data: ${JSON.stringify(error.response.data)}`);
      }
      throw new InternalServerErrorException('Failed to log in user');
    }
  }
  
}
