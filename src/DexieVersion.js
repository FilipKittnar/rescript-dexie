// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Js_dict from "rescript/lib/es6/js_dict.js";

function stores(version, schema) {
  var schema$1 = Js_dict.fromArray(schema);
  return version.stores(schema$1);
}

function upgrade(prim0, prim1) {
  return prim0.upgrade(prim1);
}

export {
  upgrade ,
  stores ,
  
}
/* No side effect */
