import {defineStore} from "pinia";
import Keycloak from "keycloak-js";

const KEYCLOAK_CONF = {
  url: "https://localhost:7443",
  realm: "gigage",
  clientId: "frontend",
};

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authenticated: false,
    client: new Keycloak(KEYCLOAK_CONF),
  }),

  actions: {
    async login() {
      const authenticated = await this.client.init({onLoad: "login-required"});

      authenticated ? console.log("Success") : console.log("Error");
      this.authenticated = authenticated;
    },

    async logout() {
      await this.client.logout();
      this.authenticated = false;
    },
  },
});
