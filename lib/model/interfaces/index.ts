// index.ts

/* mdb-ifaces */

/* const */
export {
  DATABASE_STRING,
  DATABASE_USERS_STRING,
  DATABASE_ORGS_STRING,
} from "./constants";

// default methods
export { nexus_db as Nexus } from "./ndb";

// read
export { getUserMeta } from "./mdb-get-interface";

// write
export { addToFavorites } from "./mdb-update-interface";

/* rm */

// read
export { getCharacters as getRMCharacters } from "./services/rickmorty/rm-connector";