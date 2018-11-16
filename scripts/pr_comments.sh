#!/bin/bash

messages=$(curl -H "Authorization: token ${BOT_TOKEN}" -X GET \
"https://api.github.com/repos/Hyperkid123/data-driven-forms/issues/${TRAVIS_PULL_REQUEST}/comments")


for row in $(echo "${messages}" | jq -r '.[] | @base64'); do
  _jq() {
  echo ${row} | base64 --decode | jq -r ${1}
  }

  login=$(_jq '.user.login')
  id=$(_jq '.id')
  if [[ ${login} = "Hyperkid-bot" ]]
    then
    curl -H "Authorization: token ${BOT_TOKEN}" -X DELETE \
    "https://api.github.com/repos/Hyperkid123/data-driven-forms/issues/comments/$id"
  fi
done

curl -H "Authorization: token ${BOT_TOKEN}" -X POST \
-d "{\"body\": \"PR demo available at: https://pr-${TRAVIS_PULL_REQUEST}-data-driven-form.surge.sh\"}" \
"https://api.github.com/repos/Hyperkid123/data-driven-forms/issues/${TRAVIS_PULL_REQUEST}/comments"
