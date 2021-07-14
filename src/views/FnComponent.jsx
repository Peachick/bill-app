import React, { useState } from "react";

export default function FnComponent() {
	const [name, setName] = useState("fnComponent");
	return <div onClick={() => setName(prev => prev + 1)}>{name}</div>;
}
