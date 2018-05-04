FROM sunshower/sunshower-base:1.0.0
ENV BRANCH_SPEC "1.0.0/master"
ENV PROJECT_NAME=atmosphere
ENV GITHUB_TOKEN=""
ENV UI_DEVELOPMENT_ROOT=/user/sunshower/ui-root
ENV JSPM_GITHUB_AUTH_TOKEN=""
ENV SUNSHOWERDB_USERNAME=""
ENV SUNSHOWERDB_PASSWORD=""
ENV SUNSHOWERDB_URL=""
ENV SUNSHOWER_HOME=/home/sunshower/sunshower/

RUN apt-get update -qq && apt-get install -y build-essential apt-utils
RUN apt-get install -y ruby ruby-all-dev 
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get install -y nodejs npm
RUN gem install sass
RUN npm install gulp -g
RUN npm install jspm -g
RUN jspm config registries.github.auth $JSPM_GITHUB_AUTH_TOKEN
RUN mkdir -p /home/sunshower/$PROJECT_NAME

RUN mkdir /root/.sunshower
COPY web/src/test/resources/local/sunshower.yml /home/sunshower/sunshower/sunshower.yml
COPY ./web/build/wildfly /home/sunshower/$PROJECT_NAME
RUN find . -name logging.properties | xargs rm
#RUN cd /home/sunshower/$PROJECT_NAME/sunshower-ui/ui
#RUN jspm config registries.github.remote https://github.jspm.io
#RUN git config --global url."https://$GITHUB_TOKEN@github.com/".insteadOf git@github.com
#RUN npm install gulp && npm install && jspm install -y
RUN cd /home/sunshower/$PROJECT_NAME 
WORKDIR /home/sunshower/$PROJECT_NAME
ENTRYPOINT SUNSHOWER_HOME=/home/sunshower/sunshower/ && ./bin/standalone.sh -b=0.0.0.0 -bmanagement=0.0.0.0 -Dee8.preview.mode=true
#RUN
#ENTRYPOINT /bin/bash
