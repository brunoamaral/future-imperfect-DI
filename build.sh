#!/bin/bash

# This is an example of build script for Hugo that minimizes javascript and css. Please change the values in caps and keep in mind this was done for a specific use case.

# Lets use colors, just because.

BLACK=$(tput -T screen setaf 0)
RED=$(tput -T screen setaf 1)
GREEN=$(tput -T screen setaf 2)
YELLOW=$(tput -T screen setaf 3)
LIME_YELLOW=$(tput -T screen setaf 190)
POWDER_BLUE=$(tput -T screen setaf 153)
BLUE=$(tput -T screen setaf 4)
MAGENTA=$(tput -T screen setaf 5)
CYAN=$(tput -T screen setaf 6)
WHITE=$(tput -T screen setaf 7)
BRIGHT=$(tput -T screen bold)
NORMAL=$(tput -T screen sgr0)
BLINK=$(tput -T screen blink)
REVERSE=$(tput -T screen smso)
UNDERLINE=$(tput -T screen smul)

DEFAULT_DIR="/YOUR-HUGO-SITE-MAIN-DIRECTORY"
WEBSITE_DIR="/WEBSITE-DIRECTORY"

#eval $(ssh-agent); 
#ssh-add;
printf "\n${GREEN}### Building website and tagging the release ###\n${NORMAL}"
cd $DEFAULT_DIR; 
/usr/bin/git pull;

printf "\n${GREEN}### Launch Hugo ###\n${NORMAL}"
/usr/local/bin/hugo;

printf "\n${GREEN}### Minifying CSS ###\n${NORMAL}";
/home/doc/.nvm/versions/node/v8.7.0/bin/uglifycss /WEBSITE-DIRECTORY/assets/css/main.css /WEBSITE-DIRECTORY/assets/css/custom.css /WEBSITE-DIRECTORY/assets/css/search.css --output /WEBSITE-DIRECTORY/assets/css/main-min.css


printf "\n${GREEN}### Minifying JS ###\n${NORMAL}";
cd $WEBSITE_DIR; cd assets/js; /usr/bin/yui-compressor -o '.js$:-min.js' classie.js  main.js  reader.js  search.js  util.js

# Optimize images

printf "\n${GREEN}### Build done, optimizing NEW images ###\n${NORMAL}"

if [ "$1" == "--all-images" ]
	then
		TAG=$(/usr/bin/git -C $DEFAULT_DIR rev-list --max-parents=0 HEAD)
	else
		TAG=$(/usr/bin/git -C $DEFAULT_DIR describe --tags --abbrev=0)
fi
#TAG="DEPLOY-2016-10-06_21-25"
IMAGES=$(/usr/bin/git -C $DEFAULT_DIR diff --name-only $TAG | grep -E 'jpg|jpeg|JPG')

for i in $IMAGES; do
    NAME=$(basename $i)
	DIR=$(dirname $i)
	TARGET="${i/content/$WEBSITE_DIR}"
	printf "processing: $DIR | $TARGET"
	/usr/bin/jpegoptim --all-progressive -p -o $TARGET
	cd "$(dirname $TARGET)" && /usr/bin/convert $TARGET -verbose -resize 500x500 -set filename:original '%t' %[filename:original]_500.jpg ;

	/usr/bin/jpegtran -outfile $TARGET.out -copy none -optimize -perfect $TARGET && mv $TARGET.out $TARGET && chmod 644 $TARGET

done

/usr/bin/git -C $DEFAULT_DIR tag DEPLOY-`date +%Y-%m-%d_%H-%M` && /usr/bin/git -C $DEFAULT_DIR push --tag
printf "\n${GREEN}${BRIGHT}All done! \n${NORMAL}"
