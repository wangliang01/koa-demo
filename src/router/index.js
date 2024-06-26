import combineRouters from "koa-combine-routers";
import Router from "koa-router";
import requireDirectory from "require-directory";
import path from "path";

const routers = []

requireDirectory(module, path.join(__dirname, '../router'), {
  visit: (obj) => {
    const router = obj.default
    if (router instanceof Router) {
      routers.push(router);
    }
  }
})


export default combineRouters(...routers)
