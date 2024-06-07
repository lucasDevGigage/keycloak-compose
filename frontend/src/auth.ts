import Keycloak from "keycloak-js";

const KEYCLOAK_CONF = {
  url: "http://localhost:7080",
  realm: "comunicado",
  clientId: "frontend",
};

export async function auth(): Promise<Keycloak | null> {
  const client = new Keycloak(KEYCLOAK_CONF);
  const authenticated = await client.init({onLoad: "login-required"});

  authenticated ? console.log("Success") : console.log("Error");
  return authenticated ? client : null;
}
