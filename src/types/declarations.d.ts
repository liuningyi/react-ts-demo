declare module '*.module.css' {
	const content: { [className: string]: string };
	export = content;
}

declare module '*.module.less' {
    const content:{[className:string]:string};
    export =content;
}

declare module '*.less' {
    const content:{[className:string]:string};
    export =content;
}

