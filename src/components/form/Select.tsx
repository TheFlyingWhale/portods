import { useState } from "react"
import { Listbox } from "@headlessui/react"
import Vertical from "../layout/Vertical"
import { twMerge } from "tailwind-merge"
import IconCheck from "../media/icons/IconCheck"

// const SIZE_SM = `px-3 py-1.5 text-sm`
// const SIZE_SM_LEFT_ICON = `pl-8 pr-3 pt-1 pb-0.5 text-sm`
// const SIZE_MD = `px-4 pt-2 pb-2 text-base`
// const SIZE_MD_LEFT_ICON = `pl-11 pr-3 py-2 text-base`
// const SIZE_LG = `px-6 py-2 text-lg tracking-wide`
// const SIZE_LG_LEFT_ICON = `pl-10 pr-5 pt-2 pb-1.5 text-lg tracking-wide`

export type SelectSize = "sm" | "md" | "lg"

interface SelectProps
	extends Omit<React.AllHTMLAttributes<HTMLSelectElement>, "size"> {
	children: React.ReactNode
	size?: SelectSize
	leftIcon?: React.ReactNode
}

const people = [
	{ id: 1, name: "Durward Reynolds", unavailable: false },
	{ id: 2, name: "Kenton Towne", unavailable: false },
	{ id: 3, name: "Therese Wunsch", unavailable: false },
	{ id: 4, name: "Benedict Kessler", unavailable: true },
	{ id: 5, name: "Katelyn Rohan", unavailable: false },
]

// const getSelectSize = (size: SelectSize, leftIcon: boolean) => {
// 	if (size === "sm" && !leftIcon) return SIZE_SM
// 	if (size === "sm" && leftIcon) return SIZE_SM_LEFT_ICON

// 	if (size === "lg" && !leftIcon) return SIZE_LG
// 	if (size === "lg" && leftIcon) return SIZE_LG_LEFT_ICON

// 	if (size === "md" && leftIcon) return SIZE_MD_LEFT_ICON
// 	return SIZE_MD
// }

const Select: React.FC<SelectProps> = () => {
	const [selectedOption, setSelectedOption] = useState(people[0])

	return (
		<Listbox
			value={selectedOption}
			onChange={setSelectedOption}
		>
			<Vertical
				className={twMerge(
					`mt-1 relative bg-white w-full border border-neutral-200 rounded-md focus:ring-1 drop-lg placeholder:text-neutral-600 text-neutral-800 font-secondary`
				)}
			>
				<Listbox.Button className="px-4 pt-2 pb-2 text-base flex justify-start">
					{selectedOption.name}
				</Listbox.Button>
				<Listbox.Options className="bg-neutral-100 drop-shadow-md overflow-hidden bg-white border border-neutral-200 rounded-md top-12 absolute w-full">
					{people.map((person) => (
						<Listbox.Option
							key={person.id}
							value={person}
							disabled={person.unavailable}
							className={`
                                ${person.unavailable && "text-neutral-500"}
                            `}
						>
							{({ active, selected }) => (
								<li
									className={`
                                        px-4 
                                        py-2 
                                        hover:cursor-pointer 
                                        active:bg-orange-200 
                                        ${
											active &&
											"bg-orange-400 text-neutral-100"
										}
                                        `}
								>
									{selected && (
										<IconCheck className="fill-orange-500" />
									)}
									{person.name}
								</li>
							)}
						</Listbox.Option>
					))}
				</Listbox.Options>
			</Vertical>
		</Listbox>
	)
}

export default Select
