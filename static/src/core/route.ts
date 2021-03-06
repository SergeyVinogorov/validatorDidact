import { isEqual } from '../utils/isEqual';
import Block from "./block";


export default class Route {
	private _pathname: string;
	private _blockClass: any;
	private _block: any;
	private _props: any;
    constructor(pathname: string, view: Block, props: any) {
        this._pathname = pathname;
        this._blockClass = view;
        this._block = null;
        this._props = props;
    }

    navigate(pathname: string) {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
            console.log(this._props);
        }
    }

    leave() {
        if (this._block) {
            this._block.hide();
        }
    }

    match(pathname: string) {
        return isEqual(pathname, this._pathname);
    }

    render() {
        if (!this._block) {
            this._block = new this._blockClass();
            // toHtml(this._props.rootQuery, this._block);
            return;
        }

        this._block.show();
    }
}
