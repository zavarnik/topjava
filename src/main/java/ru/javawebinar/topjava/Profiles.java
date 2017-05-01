package ru.javawebinar.topjava;

/**
 * User: gkislin
 * Date: 19.08.2014
 */
public class Profiles {

    public static final String
            POSTGRES = "postgres",
            HSQLDB = "hsqldb",
            HSQLDB_MEMORY = "hsqldb-memory",
            JDBC = "jdbc",
            JPA = "jpa",
            DATAJPA = "datajpa";
    public static final String ACTIVE_DB = POSTGRES;

    public static final String REPOSITORY_IMPLEMENTATION = DATAJPA;
}
