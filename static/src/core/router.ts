import Block from "../core/block";
import { Nullable } from "../types/core";
import Route from "./route";
interface RouterInterface {
	__instance: RouterInterface
	routes: string []
	history: History
	_currentRoute: Nullable<any>;
	use(pathname: string, block: Block): RouterInterface
	start(): void
	_onRoute(pathname: string):void
	go(pathname:string):void
	// getRoute(pathname: string):string

}

class Router implements RouterInterface {
	routes: any[];
	history: History;
	_currentRoute:  Nullable<any>;
	static __instance: any;
	private _rootQuery: any;
	__instance: RouterInterface;
  constructor() {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;

    Router.__instance = this;
  }

  use(pathname: string, block: Block): any {
        const route = new Route(pathname, block, {rootQuery: this._rootQuery});
        this.routes.push(route);
        return this;
  }

  start() {
    window.onpopstate = ((event: any ) => {
      this._onRoute(event.currentTarget.location.pathname);
    }).bind(this);

    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname);
    if (!route) {
      return;
    }

    if (this._currentRoute) {
      this._currentRoute.leave();
    }

    route.render(route, pathname);
  }

  go(pathname: string) {
    this.history.pushState({}, "", pathname);
    this._onRoute(pathname);
  }

  getRoute(pathname: string):any {
    return this.routes.find(route => route.match(pathname));
  }
}

export default Router;
