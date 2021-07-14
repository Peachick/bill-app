import React, { Component } from "react";
import BForm from "@/components/Form";
import BFormItem from "@/components/Form/FormItem";
import BInput from "@/components/Input/Input";
import BButton from "@/components/Button";

export default class FormExample extends Component {
	form = React.createRef();

	submit = () => {
		this.form.current.submit((values) => {
			console.log(values);
		});
	}

	reset = () => {
		this.form.current.reset();
	}

	render() {
		return (
			<div
				className={"form-wrap"}
			>
				<BForm
					ref={this.form}
				>
					<BFormItem
						name={"username"}
						label={"大名"}
					>
						<BInput
							style={{width: "300px"}}
							placeholder={"你的大名..."}
						/>
					</BFormItem>
					<BFormItem
						name={"password"}
						label={"暗号"}
					>
						<BInput
							style={{width: "300px"}}
							placeholder={"你的暗号..."}
						/>
					</BFormItem>
					<BFormItem>
						<div className="form-btns">
							<BButton
								type={"primary"}
								onClick={this.submit}
							>
								提交
							</BButton>
							<BButton
								type={"danger"}
								onClick={this.reset}
							>
								重置
							</BButton>
						</div>
					</BFormItem>
				</BForm>
			</div>
		);
	}
}
