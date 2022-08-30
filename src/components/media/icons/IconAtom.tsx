import IconContainer from "./IconContainer"
import { IconProps } from "./IconUtilities"

const IconAtom: React.FC<IconProps> = ({ className, size, contained }) => {
	if (contained) {
		return (
			<IconContainer
				className={className}
				size={size}
			>
				<path d="M10.333 0.686631C9.32918 0.726571 8.46914 1.39756 7.55585 2.31085C6.86889 2.99781 6.16595 3.86318 5.48697 4.82706C5.13816 4.85102 4.80001 4.88297 4.4725 4.92557C4.24617 4.24394 4.09973 3.63153 4.09174 3.19485C4.08375 2.81143 4.12635 2.49723 4.1876 2.31085C4.24884 2.1218 4.29943 2.08985 4.32073 2.0792C4.35002 2.06322 4.37664 2.05523 4.4299 2.04991C4.7361 2.02595 5.14349 2.11115 5.69998 2.57445L6.57333 1.52537C5.80915 0.891655 5.01834 0.638703 4.32872 0.691956H4.32605C4.1157 0.707932 3.89737 0.763848 3.70033 0.862366C3.27697 1.0807 3.02135 1.48543 2.88822 1.89015C2.75775 2.29754 2.72047 2.73954 2.72846 3.22148C2.74178 3.82324 2.8829 4.49156 3.09058 5.17586C2.83497 5.2371 2.57935 5.29835 2.35037 5.3729C1.74062 5.56461 1.21608 5.80159 0.795377 6.12377C0.37734 6.44595 0.0338575 6.90392 0.0019057 7.46841C-0.0247205 7.97964 0.230894 8.45625 0.566388 8.77843C0.904545 9.09795 1.32524 9.31629 1.7992 9.50267L2.29445 8.22993C1.92168 8.08614 1.64476 7.9184 1.50364 7.78793C1.36518 7.65479 1.35986 7.61219 1.36518 7.53764C1.36785 7.48438 1.3998 7.38054 1.62612 7.2048C1.85511 7.02907 2.25185 6.83203 2.76041 6.67227C3.00005 6.59506 3.26632 6.52849 3.54856 6.46725C3.6737 6.77346 3.80684 7.07433 3.94529 7.37521C3.06396 9.19381 2.70716 10.8952 2.72846 12.0801C2.74178 12.8816 3.03999 13.6165 3.6524 14.0132C4.0518 14.2741 4.57634 14.378 5.0716 14.2768C5.56419 14.1756 6.03548 13.92 6.56535 13.5419L5.77454 12.4343C5.32721 12.7511 4.99704 12.9002 4.80001 12.9402C4.60031 12.9801 4.53907 12.9641 4.39528 12.8709C4.2515 12.7777 4.09973 12.5567 4.09174 12.0562C4.08109 11.3639 4.27014 10.2402 4.74675 8.97547C4.78137 9.0447 4.81864 9.12191 4.85326 9.18848C5.46301 10.3201 6.3763 11.6701 7.33751 12.7058C7.81679 13.2224 8.30406 13.6644 8.82061 13.96C9.31853 14.2475 9.9336 14.4099 10.5087 14.149C11.0093 13.9733 11.3235 13.5206 11.4566 13.0573C11.5951 12.5727 11.6111 12.0269 11.5472 11.4118C11.4194 10.1843 10.9587 8.68524 10.144 7.18084L8.94576 7.8252C9.67799 9.18848 10.088 10.5544 10.1919 11.5503C10.2425 12.0508 10.2105 12.4556 10.1466 12.6819C10.0827 12.9082 10.0428 12.8869 10.0721 12.8789L10.0108 12.8976L9.95224 12.9268C9.93626 12.9348 9.81911 12.9615 9.50225 12.7777C9.18273 12.5967 8.76203 12.2346 8.33867 11.7766C7.48929 10.8633 6.60529 9.56924 6.05678 8.54412C5.86507 8.18999 5.66803 7.78793 5.47632 7.37788C5.63075 7.09564 5.79584 6.81339 5.9769 6.53115C6.0621 6.40335 6.14731 6.28353 6.22985 6.16104C6.42689 6.15306 6.6186 6.13974 6.82096 6.13974C7.14314 6.13974 7.47331 6.14773 7.81147 6.16371C9.61941 6.25956 11.193 6.58973 12.2474 7.02641C12.7747 7.24474 13.1687 7.49237 13.3871 7.70538C13.6054 7.9184 13.6427 8.0462 13.6347 8.15005C13.6374 8.13407 13.6001 8.27253 13.3471 8.44294C13.0915 8.61335 12.6681 8.78642 12.1543 8.87695L12.3886 10.2189C13.0569 10.1018 13.6427 9.8861 14.106 9.57457C14.5693 9.26304 14.966 8.8237 14.998 8.21928C15.0273 7.64148 14.737 7.11694 14.335 6.72553C13.9329 6.33412 13.403 6.02791 12.7693 5.76697C11.5046 5.24243 9.81112 4.90427 7.88336 4.80309C7.65703 4.79244 7.43603 4.79244 7.21237 4.78712C7.65703 4.20932 8.1017 3.69277 8.5224 3.27473C9.33184 2.46262 10.088 2.06322 10.3863 2.04991C10.5167 2.04725 10.578 2.06855 10.6232 2.09784C10.7404 2.17505 11.1744 2.82208 10.5354 3.84986L11.6963 4.56878C12.6149 3.08302 12.322 1.57596 11.3661 0.955559C11.0546 0.753197 10.6871 0.673318 10.333 0.686631ZM7.49994 6.82138C7.1245 6.82138 6.8183 7.12759 6.8183 7.50302C6.8183 7.87846 7.1245 8.18466 7.49994 8.18466C7.87537 8.18466 8.18158 7.87846 8.18158 7.50302C8.18158 7.12759 7.87537 6.82138 7.49994 6.82138Z" />
			</IconContainer>
		)
	}
	return (
		<path d="M10.333 0.686631C9.32918 0.726571 8.46914 1.39756 7.55585 2.31085C6.86889 2.99781 6.16595 3.86318 5.48697 4.82706C5.13816 4.85102 4.80001 4.88297 4.4725 4.92557C4.24617 4.24394 4.09973 3.63153 4.09174 3.19485C4.08375 2.81143 4.12635 2.49723 4.1876 2.31085C4.24884 2.1218 4.29943 2.08985 4.32073 2.0792C4.35002 2.06322 4.37664 2.05523 4.4299 2.04991C4.7361 2.02595 5.14349 2.11115 5.69998 2.57445L6.57333 1.52537C5.80915 0.891655 5.01834 0.638703 4.32872 0.691956H4.32605C4.1157 0.707932 3.89737 0.763848 3.70033 0.862366C3.27697 1.0807 3.02135 1.48543 2.88822 1.89015C2.75775 2.29754 2.72047 2.73954 2.72846 3.22148C2.74178 3.82324 2.8829 4.49156 3.09058 5.17586C2.83497 5.2371 2.57935 5.29835 2.35037 5.3729C1.74062 5.56461 1.21608 5.80159 0.795377 6.12377C0.37734 6.44595 0.0338575 6.90392 0.0019057 7.46841C-0.0247205 7.97964 0.230894 8.45625 0.566388 8.77843C0.904545 9.09795 1.32524 9.31629 1.7992 9.50267L2.29445 8.22993C1.92168 8.08614 1.64476 7.9184 1.50364 7.78793C1.36518 7.65479 1.35986 7.61219 1.36518 7.53764C1.36785 7.48438 1.3998 7.38054 1.62612 7.2048C1.85511 7.02907 2.25185 6.83203 2.76041 6.67227C3.00005 6.59506 3.26632 6.52849 3.54856 6.46725C3.6737 6.77346 3.80684 7.07433 3.94529 7.37521C3.06396 9.19381 2.70716 10.8952 2.72846 12.0801C2.74178 12.8816 3.03999 13.6165 3.6524 14.0132C4.0518 14.2741 4.57634 14.378 5.0716 14.2768C5.56419 14.1756 6.03548 13.92 6.56535 13.5419L5.77454 12.4343C5.32721 12.7511 4.99704 12.9002 4.80001 12.9402C4.60031 12.9801 4.53907 12.9641 4.39528 12.8709C4.2515 12.7777 4.09973 12.5567 4.09174 12.0562C4.08109 11.3639 4.27014 10.2402 4.74675 8.97547C4.78137 9.0447 4.81864 9.12191 4.85326 9.18848C5.46301 10.3201 6.3763 11.6701 7.33751 12.7058C7.81679 13.2224 8.30406 13.6644 8.82061 13.96C9.31853 14.2475 9.9336 14.4099 10.5087 14.149C11.0093 13.9733 11.3235 13.5206 11.4566 13.0573C11.5951 12.5727 11.6111 12.0269 11.5472 11.4118C11.4194 10.1843 10.9587 8.68524 10.144 7.18084L8.94576 7.8252C9.67799 9.18848 10.088 10.5544 10.1919 11.5503C10.2425 12.0508 10.2105 12.4556 10.1466 12.6819C10.0827 12.9082 10.0428 12.8869 10.0721 12.8789L10.0108 12.8976L9.95224 12.9268C9.93626 12.9348 9.81911 12.9615 9.50225 12.7777C9.18273 12.5967 8.76203 12.2346 8.33867 11.7766C7.48929 10.8633 6.60529 9.56924 6.05678 8.54412C5.86507 8.18999 5.66803 7.78793 5.47632 7.37788C5.63075 7.09564 5.79584 6.81339 5.9769 6.53115C6.0621 6.40335 6.14731 6.28353 6.22985 6.16104C6.42689 6.15306 6.6186 6.13974 6.82096 6.13974C7.14314 6.13974 7.47331 6.14773 7.81147 6.16371C9.61941 6.25956 11.193 6.58973 12.2474 7.02641C12.7747 7.24474 13.1687 7.49237 13.3871 7.70538C13.6054 7.9184 13.6427 8.0462 13.6347 8.15005C13.6374 8.13407 13.6001 8.27253 13.3471 8.44294C13.0915 8.61335 12.6681 8.78642 12.1543 8.87695L12.3886 10.2189C13.0569 10.1018 13.6427 9.8861 14.106 9.57457C14.5693 9.26304 14.966 8.8237 14.998 8.21928C15.0273 7.64148 14.737 7.11694 14.335 6.72553C13.9329 6.33412 13.403 6.02791 12.7693 5.76697C11.5046 5.24243 9.81112 4.90427 7.88336 4.80309C7.65703 4.79244 7.43603 4.79244 7.21237 4.78712C7.65703 4.20932 8.1017 3.69277 8.5224 3.27473C9.33184 2.46262 10.088 2.06322 10.3863 2.04991C10.5167 2.04725 10.578 2.06855 10.6232 2.09784C10.7404 2.17505 11.1744 2.82208 10.5354 3.84986L11.6963 4.56878C12.6149 3.08302 12.322 1.57596 11.3661 0.955559C11.0546 0.753197 10.6871 0.673318 10.333 0.686631ZM7.49994 6.82138C7.1245 6.82138 6.8183 7.12759 6.8183 7.50302C6.8183 7.87846 7.1245 8.18466 7.49994 8.18466C7.87537 8.18466 8.18158 7.87846 8.18158 7.50302C8.18158 7.12759 7.87537 6.82138 7.49994 6.82138Z" />
	)
}

export default IconAtom