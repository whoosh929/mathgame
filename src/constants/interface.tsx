import type { numberRanges } from "./types";

export const operatorMap: { [key: string]: string } = {
	plus: "+",
	minus: "-",
	multiply: "x",
};
export interface settingValues {
	numbers: numberRanges;
	setSettings: (newNumbers: numberRanges) => void;
}
