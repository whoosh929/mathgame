import type { numberRanges } from "./types";

export const operatorMap: { [key: string]: string } = {
	plus: "+",
	minus: "-",
	multiply: "x",
	divide: "÷",
};
export interface settingValues {
	numbers: numberRanges;
	setSettings: (newNumbers: numberRanges, newOp: string) => void;
	operator: string;
}
export interface boardProps {
	numbers: numberRanges;
	op: string;
}
