 #!/usr/bin/env bash
 if [ “$TRAVIS_PULL_REQUEST” == “false” ]; then
 echo “Not a PR. Skipping surge deployment.”
 exit 0
 fi
 yarn
 yarn vendor
 yarn publish-demo
 yarn add global surge

 echo ${SURGE_LOGIN}
 echo ${SURGE_TOKEN}

 export DEPLOY_DOMAIN=https://pr-${TRAVIS_PULL_REQUEST}-data-driven-form.surge.sh
 surge --project ./public --domain $DEPLOY_DOMAIN;

