FROM ruby:2.6.3
MAINTAINER Dominik Rżany<dominik.rzany@gmail.com>
WORKDIR /usr/src/app

COPY ./Gemfile ./
COPY ./Gemfile.lock ./
RUN bundle install

EXPOSE 3011
CMD ["rails", "server", "-b", "0.0.0.0", "-p", "3011"]