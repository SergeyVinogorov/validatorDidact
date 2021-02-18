export const makePropsProxy = (props: object) => {
		const proxyData = new Proxy(props, {
		get(target: any, prop: string) {

			if (prop.startsWith('_')) {
				throw new Error("нет доступа");
			} else {
				let value = target[prop];
				return (typeof value === 'function') ? value.bind(target) : value;
			}
		},
		set(target: any, prop: any, val: any) {
			if (prop.startsWith('_')) {
				throw new Error("нет доступа");
			} else {
				target[prop] = val;
				return true;
			}
		},
		deleteProperty(target: any, prop: any) {
			if (prop.startsWith('_')) {
				throw new Error("нет доступа");
			} else {
				delete target[prop];
				return true;
			}
		},
		ownKeys(target) {
			return Object.keys(target).filter(key => !key.startsWith('_'));
		}
		});
    return proxyData;
  }
