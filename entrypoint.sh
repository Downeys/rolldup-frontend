#!/bin/sh

set -eo pipefail

sed -i 's#%REACT_APP_BACKEND_API_BASE_URL%#'"$REACT_APP_BACKEND_API_BASE_URL"'#g' /usr/share/nginx/html/index.html
sed -i 's#%REACT_APP_CLIENT_ID%#'"$REACT_APP_CLIENT_ID"'#g' /usr/share/nginx/html/index.html
sed -i 's#%REACT_APP_ADB2C_AUTHORITY_BASE_URL%#'"$REACT_APP_ADB2C_AUTHORITY_BASE_URL"'#g' /usr/share/nginx/html/index.html
sed -i 's#%REACT_APP_ENVIRONMENT%#'"$REACT_APP_ENVIRONMENT"'#g' /usr/share/nginx/html/index.html
sed -i 's#%REACT_APP_INSIGHTS_CONNECTION_STRING%#'"$REACT_APP_INSIGHTS_CONNECTION_STRING"'#g' /usr/share/nginx/html/index.html
sed -i 's#%REACT_APP_LOGOUT_REDIRECT_URL%#'"$REACT_APP_LOGOUT_REDIRECT_URL"'#g' /usr/share/nginx/html/index.html
sed -i 's#%REACT_APP_AAD_PRIMARY_POLICY%#'"$REACT_APP_AAD_PRIMARY_POLICY"'#g' /usr/share/nginx/html/index.html
sed -i 's#%REACT_APP_AAD_FORGOT_PASSWORD_POLICY%#'"$REACT_APP_AAD_FORGOT_PASSWORD_POLICY"'#g' /usr/share/nginx/html/index.html
sed -i 's#%REACT_APP_AAD_EDIT_PROFILE_POLICY%#'"$REACT_APP_AAD_EDIT_PROFILE_POLICY"'#g' /usr/share/nginx/html/index.html

nginx -g "daemon off;"
