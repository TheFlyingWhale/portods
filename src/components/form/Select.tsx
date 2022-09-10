import React, { useState } from "react"
import { Listbox } from "@headlessui/react"
import Vertical from "../layout/Vertical"
import { twMerge } from "tailwind-merge"
import IconCheck from "../media/icons/IconCheck"
import { IconChevronDown, Text } from "../index"

const BUTTON_SIZE_SM = "px-3 py-1.5"
const BUTTON_SIZE_MD = "px-4 py-2"
const BUTTON_SIZE_LG = "px-6 py-2"

const getButtonSize = (size: SelectSize) => {
	if (size === "sm") return BUTTON_SIZE_SM

	if (size === "lg") return BUTTON_SIZE_LG

	return BUTTON_SIZE_MD
}

const TEXT_SIZE_SM = `text-sm`
const TEXT_SIZE_MD = `text-base`
const TEXT_SIZE_LG = `text-lg tracking-wide`

const getTextSize = (size: SelectSize) => {
	if (size === "sm") return TEXT_SIZE_SM

	if (size === "lg") return TEXT_SIZE_LG

	return TEXT_SIZE_MD
}

const OPTION_TOP_SM = "top-10"
const OPTION_TOP_MD = "top-12"
const OPTION_TOP_LG = "top-[3.25rem]"

const getTopGap = (size: SelectSize) => {
	if (size === "sm") return OPTION_TOP_SM

	if (size === "lg") return OPTION_TOP_LG

	return OPTION_TOP_MD
}

export type SelectSize = "sm" | "md" | "lg"

interface SelectProps
	extends Omit<
		React.AllHTMLAttributes<HTMLSelectElement>,
		"size" | "onChange"
	> {
	children: React.ReactElement<HTMLOptionElement>[]
	size?: SelectSize
	leftIcon?: React.ReactNode
	name?: string
	onChange?: (value: string) => void
}

const Select: React.FC<SelectProps> = ({
	name,
	children,
	onChange,
	leftIcon,
	size = "md",
}) => {
	const [selectedOption, setSelectedOption] = useState("")

	const handleChange = (value: string) => {
		setSelectedOption(value)
		onChange && onChange(value)
	}

	return (
		<Listbox
			value={selectedOption}
			onChange={handleChange}
			name={name}
		>
			<Vertical
				className={twMerge(`
                    mt-1 
                    relative 
                    bg-white 
                    w-full 
                    drop-lg 
                    border-1
                    border-neutral-200 
                    rounded-md 
                    placeholder:text-neutral-600 
                    text-neutral-800 
                    font-secondary
                `)}
			>
				<Listbox.Button
					className={`
                        flex
                        justify-start
                        items-center
                        gap-3
                        relative
                        w-full
                        ${getButtonSize(size)}
                        ${!selectedOption && "text-neutral-600"}
                        ${getTextSize(size)}
                    `}
				>
					{leftIcon && leftIcon}
					{!selectedOption && "Placeholder text"}
					{selectedOption.charAt(0).toUpperCase() +
						selectedOption.slice(1)}
					<IconChevronDown
						size={10}
						contained
						className="fill-neutral-600 right-3 absolute"
					/>
				</Listbox.Button>
				<Listbox.Options
					className={`
                        bg-neutral-100
                        drop-shadow-md
                        overflow-hidden
                        bg-white border 
                        border-neutral-200 
                        rounded-md 
                        absolute 
                        w-full
                        z-10
                        ${getTopGap(size)}
                    `}
				>
					{children.map((child) => {
						const value = child.props.value
						const capitalizedFirstLetter =
							value.charAt(0).toUpperCase() + value.slice(1)
						return (
							<Listbox.Option
								value={child.props.value}
								key={child.props.value}
							>
								{({ active, selected }) => (
									<li
										className={`
                                            flex
                                            flex-row
                                            gap-3
                                            px-4 
                                            py-2 
                                            hover:cursor-pointer 
                                            ${active && "bg-orange-100"}
                                        `}
									>
										<Text
											className={`
                                                ${selected && "font-medium"}
                                                ${getTextSize(size)}
                                                ${active && "text-orange-900"}
                                            `}
										>
											{capitalizedFirstLetter}
										</Text>
										{selected && (
											<IconCheck
												className="fill-orange-500 mt-1"
												size={15}
												contained
											/>
										)}
									</li>
								)}
							</Listbox.Option>
						)
					})}
				</Listbox.Options>
			</Vertical>
		</Listbox>
	)
}

export default Select
