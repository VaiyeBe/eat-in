import { CognitoUserPool } from "amazon-cognito-identity-js";
import keys from "../keys";

export async function authUser() {
  const currentUser = getCurrentUser();

  if (currentUser === null) {
    return false;
  }

  await getUserToken(currentUser);

  return true;
}

function getUserToken(currentUser) {
  return new Promise((resolve, reject) => {
    currentUser.getSession(function(err, session) {
      if (err) {
        reject(err);
        return;
      }
      resolve(session.getIdToken().getJwtToken());
    });
  });
}

function getCurrentUser() {
  const userPool = new CognitoUserPool({
    UserPoolId: keys.cognito.USER_POOL_ID,
    ClientId: keys.cognito.APP_CLIENT_ID
  });
  return userPool.getCurrentUser();
}
