import React from "react";

import Log, {
	LogNow,
	DebugNow,
	ErrorNow,
	WarnNow,
} from "@util/log/index";
import { localStore, sessionStore } from "@util/localcache";

export default class UtilExample extends React.Component {
	key = "";
	val = "";
	bindKey = (v) => this.key = v;
	bindVal = (v) => this.val = v;
	render() {
		return (
			<div>
				<button onClick={() => Log(new Date())("debug", "一个警告...")}>打印log</button>
				<br/>
				<button onClick={() => LogNow("Error", "一个简单的LogNow")}>LOG NOW</button>
				<br/>
				<button onClick={() => DebugNow("一个简单的Debug Now")}>Debug Now</button>
				<br/>
				<button onClick={() => ErrorNow("一个简单的Error Now")}>Error Now</button>
				<br/>
				<button onClick={() => WarnNow("一个简单的Warn Now")}>Warn Now</button>
				<br/>

				<div>
					<input
						onChange={(e) => this.bindKey(e.target.value)}
						placeholder={"键"}
					/>
					<input
						onChange={(e) => this.bindVal(e.target.value)}
						placeholder={"值"}
					/>
					<br/>
					<button onClick={() => localStore.set(this.key, this.val)}>缓存</button>
					<button onClick={() =>localStore.clear()}>清空</button>
					<button onClick={() => localStore.delete(this.key)}>删除指定</button>
				</div>
				<div>
					<button onClick={() => sessionStore.set("name", 2)}>缓存session</button>
				</div>
			</div>
		);
	}
}
