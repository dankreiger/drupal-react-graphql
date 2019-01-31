
#!/bin/sh
YELLOW='\033[1;33m';CYAN='\033[0;36m';GREEN='\033[0;32m';RED='\033[0;31m';NC='\033[0m' # No Color

clear

if [ ! -f .env.local ]; then
  echo;echo;
  printf "Enter your ${CYAN}Drupal URI${NC}, followed by [ENTER]:"
  read DRUPALURI
  if [ -z "$DRUPALURI" ]
  then
    echo
    printf "${RED}Drupal URI is unset${NC}. Please try ${GREEN}npm start${NC} or ${GREEN}yarn start${NC} again"
    echo;echo;echo;
  else
    touch .env.local
    FMT="$(echo "${DRUPALURI}" | tr -d '[:space:]')"
    # sed -i '' "s/YOUR_API_KEY/$DRUPALURI/g" public/index.html
    echo "REACT_APP_DRUPAL_URI=${FMT}/graphql" > .env.local
    npm run start:scripts
  fi
else
  npm run start:scripts
fi