#!/bin/sh

create_routes() {
helper=$1
capitalized_name=$2

# create route
route_name="tests/dummy/app/routes/$helper.js"
touch "$route_name"

# write route content
echo "import Route from '@ember/routing/route';

export default class ${capitalized_name}Route extends Route {
}" >> $route_name

# create route template
touch "tests/dummy/app/templates/$helper.hbs"

echo  "this.route('$helper');" >> tests/dummy/app/router.js

}

create_docs() {
  helper_name="$1"

  echo "
  <h3>$helper_name:</h3>
  <p>Description for $helper_name goes here.</p>
  <p>
  <code>
  \{{ $helper_name \"hello world\"}}
  </code>
  </p>
  <p>
  <code>
  // => {{ $helper_name \"hello world\"}}
  </code>
  </p>" >> "tests/dummy/app/templates/$helper_name.hbs"


}

while read -r helper; do

  snake_case=$(echo $helper | gsed -r 's/([a-z0-9])([A-Z])/\1-\L\2/g')
  helper_name="voca-$snake_case"
  caps="Voca-$snake_case"
  route_name=$(echo $caps | awk -F - '{printf "%s", $1; for(i=2; i<=NF; i++) printf "%s", toupper(substr($i,1,1)) substr($i,2); print"";}')
  echo $helper_name
  echo $route_name
  echo "=================="
  #create_routes $helper_name $route_name
  #create_docs $helper_name
  echo "<li><LinkTo @route=\"$helper_name\">$helper_name</LinkTo></li>" >> tests/dummy/app/templates/application.hbs
done < $1
