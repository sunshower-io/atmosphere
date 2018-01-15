# Atmosphere--beautiful base UI plugin for Sunshower.io

## To configure in IntelliJ

- Check out project to $PROJECT_DIR (first build.gradle file should be in this directory)
- Go to Run > Edit configurations 
- Select Arquillian > Wildfly Managed
- Add the system property jbossHome: `$PROJECT_DIR/web/build/wildfly/sunshower-wildfly`

So, your final configuration should look like:

```properties

-DjbossHome=/home/haswell/dev/src/github.com/sunshower.io/atmosphere/web/build/wildfly/sunshower-wildfly
-Dsunshower.home=/home/haswell/dev/src/github.com/sunshower.io/atmosphere/web/src/test/resources/local/

```

- Set the following environment variables in your Arquillian configuration
-- SUNSHOWERDB_URL: e.g. `jdbc:postgresql://localhost:5432/sunshower`
-- SUNSHOWERDB_USERNAME : e.g. `sunshowerdbuser`
-- SUNSHOWERDB_PASSWORD : e.g. `sunshowerdbpassword`

