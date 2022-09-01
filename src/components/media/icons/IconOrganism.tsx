import IconContainer from "./IconContainer"
import { IconProps } from "./IconUtilities"

const IconOrganism: React.FC<IconProps> = ({ className, size, contained }) => {
	if (contained) {
		return (
			<IconContainer
				className={className}
				size={size}
			>
				<path d="M6.48287 14.9999C5.70043 14.9999 4.91226 14.83 4.14318 14.4942C3.85119 14.3663 3.7157 14.0266 3.84356 13.7327C3.97142 13.4407 4.31112 13.3052 4.60501 13.4331C5.22905 13.7041 5.86073 13.8415 6.48478 13.8415C6.73287 13.8415 6.98096 13.8186 7.22142 13.7747C7.53631 13.7155 7.83783 13.9236 7.89508 14.2384C7.95234 14.5533 7.74623 14.8549 7.43325 14.9121C7.12409 14.9694 6.80539 14.998 6.48478 14.998L6.48287 14.9999ZM9.92371 13.4789C9.7844 13.4789 9.64318 13.4274 9.53249 13.3262C9.29776 13.1106 9.28249 12.7442 9.50005 12.5094C10.0268 11.9388 10.2329 11.435 10.4943 10.7995C10.5955 10.5514 10.7004 10.2957 10.8321 10.019C10.9695 9.73081 11.3149 9.60676 11.6031 9.74417C11.8913 9.88157 12.0153 10.2251 11.8779 10.5152C11.7596 10.7652 11.6604 11.0056 11.5649 11.2384C11.2844 11.9236 11.0191 12.5705 10.3512 13.2957C10.2367 13.4197 10.0821 13.4827 9.92562 13.4827L9.92371 13.4789ZM1.98096 12.7384C1.81493 12.7384 1.65081 12.6678 1.53821 12.5323C0.795848 11.6449 0.299665 10.6258 0.101191 9.58195C0.0420311 9.26897 0.248138 8.96554 0.561115 8.90638C0.874092 8.84722 1.17753 9.05333 1.23669 9.3663C1.39699 10.2174 1.8073 11.0533 2.42371 11.7881C2.62982 12.0323 2.59737 12.3968 2.35119 12.6029C2.24241 12.6945 2.11073 12.7384 1.98096 12.7384V12.7384ZM13.105 8.40447C12.96 8.40447 12.813 8.34913 12.7004 8.24035C12.4714 8.01707 12.4676 7.65065 12.6909 7.42165L12.7138 7.39684C13.376 6.71936 13.7233 5.94455 13.75 5.08959C13.7596 4.77088 14.0306 4.51707 14.3455 4.52852C14.6642 4.53806 14.9161 4.80333 14.9065 5.12394C14.8722 6.26134 14.4008 7.32814 13.542 8.206L13.5191 8.2289C13.4065 8.34531 13.2558 8.40256 13.105 8.40256V8.40447ZM1.05921 7.10867C0.973329 7.10867 0.887451 7.08959 0.80539 7.04951C0.51913 6.90829 0.40081 6.56287 0.540123 6.27661C0.767222 5.81287 1.06875 5.36821 1.43516 4.95409L1.45234 4.93501C1.85119 4.52279 2.28058 4.18501 2.80348 3.87203C3.07829 3.70791 3.43325 3.79569 3.59737 4.0705C3.7615 4.34531 3.67371 4.70027 3.3989 4.86439C2.9676 5.12203 2.61646 5.39875 2.29203 5.73272C1.99814 6.06478 1.75959 6.41974 1.57829 6.78615C1.47715 6.99035 1.27295 7.11058 1.05921 7.11058V7.10867ZM5.74241 3.48844C5.5573 3.48844 5.376 3.39875 5.26341 3.23462C5.08402 2.97126 5.15272 2.61058 5.41608 2.43119C5.91035 2.09531 6.37409 1.70409 6.8302 1.23653C7.11837 0.942639 7.42753 0.692639 7.75005 0.490349C8.02104 0.320501 8.37791 0.402563 8.54776 0.673555C8.7176 0.944547 8.63554 1.30142 8.36455 1.47126C8.11837 1.62584 7.88173 1.81859 7.65844 2.0476C7.14699 2.5705 6.626 3.00943 6.06684 3.3892C5.9676 3.456 5.85501 3.48844 5.74241 3.48844ZM13.3836 2.87584C13.2081 2.87584 13.0344 2.79569 12.9218 2.64493C12.3626 1.90447 11.6088 1.36821 10.7997 1.13348C10.4924 1.04569 10.3149 0.725082 10.4046 0.41783C10.4924 0.110578 10.813 -0.0669031 11.1203 0.0227915C12.1699 0.324318 13.1375 1.00943 13.8455 1.94836C14.0382 2.20409 13.9867 2.56668 13.731 2.75752C13.626 2.83577 13.5039 2.87394 13.3836 2.87394V2.87584ZM7.58211 3.23653C5.89318 4.96363 4.72905 4.89302 3.51913 6.14111C0.15081 9.90638 5.57447 14.9884 9.11073 11.3816C10.1947 10.2194 9.8302 9.38157 11.6489 7.52279C14.5268 4.58004 10.4657 0.289967 7.58402 3.23653H7.58211ZM7.54585 10.5075C6.75386 11.3167 5.45615 11.332 4.64699 10.54C3.83783 9.74798 3.82257 8.45027 4.61455 7.64111C5.40654 6.83195 6.70424 6.81668 7.51341 7.60867C8.32257 8.40065 8.33783 9.69836 7.54585 10.5075ZM10.6928 5.81478C10.2271 6.28997 9.4657 6.2976 8.9905 5.83386C8.51531 5.36821 8.50768 4.60676 8.97142 4.13157C9.43707 3.65638 10.1985 3.64875 10.6737 4.11249C11.1489 4.57813 11.1565 5.33959 10.6928 5.81478V5.81478Z" />
			</IconContainer>
		)
	}
	return (
		<path d="M6.48287 14.9999C5.70043 14.9999 4.91226 14.83 4.14318 14.4942C3.85119 14.3663 3.7157 14.0266 3.84356 13.7327C3.97142 13.4407 4.31112 13.3052 4.60501 13.4331C5.22905 13.7041 5.86073 13.8415 6.48478 13.8415C6.73287 13.8415 6.98096 13.8186 7.22142 13.7747C7.53631 13.7155 7.83783 13.9236 7.89508 14.2384C7.95234 14.5533 7.74623 14.8549 7.43325 14.9121C7.12409 14.9694 6.80539 14.998 6.48478 14.998L6.48287 14.9999ZM9.92371 13.4789C9.7844 13.4789 9.64318 13.4274 9.53249 13.3262C9.29776 13.1106 9.28249 12.7442 9.50005 12.5094C10.0268 11.9388 10.2329 11.435 10.4943 10.7995C10.5955 10.5514 10.7004 10.2957 10.8321 10.019C10.9695 9.73081 11.3149 9.60676 11.6031 9.74417C11.8913 9.88157 12.0153 10.2251 11.8779 10.5152C11.7596 10.7652 11.6604 11.0056 11.5649 11.2384C11.2844 11.9236 11.0191 12.5705 10.3512 13.2957C10.2367 13.4197 10.0821 13.4827 9.92562 13.4827L9.92371 13.4789ZM1.98096 12.7384C1.81493 12.7384 1.65081 12.6678 1.53821 12.5323C0.795848 11.6449 0.299665 10.6258 0.101191 9.58195C0.0420311 9.26897 0.248138 8.96554 0.561115 8.90638C0.874092 8.84722 1.17753 9.05333 1.23669 9.3663C1.39699 10.2174 1.8073 11.0533 2.42371 11.7881C2.62982 12.0323 2.59737 12.3968 2.35119 12.6029C2.24241 12.6945 2.11073 12.7384 1.98096 12.7384V12.7384ZM13.105 8.40447C12.96 8.40447 12.813 8.34913 12.7004 8.24035C12.4714 8.01707 12.4676 7.65065 12.6909 7.42165L12.7138 7.39684C13.376 6.71936 13.7233 5.94455 13.75 5.08959C13.7596 4.77088 14.0306 4.51707 14.3455 4.52852C14.6642 4.53806 14.9161 4.80333 14.9065 5.12394C14.8722 6.26134 14.4008 7.32814 13.542 8.206L13.5191 8.2289C13.4065 8.34531 13.2558 8.40256 13.105 8.40256V8.40447ZM1.05921 7.10867C0.973329 7.10867 0.887451 7.08959 0.80539 7.04951C0.51913 6.90829 0.40081 6.56287 0.540123 6.27661C0.767222 5.81287 1.06875 5.36821 1.43516 4.95409L1.45234 4.93501C1.85119 4.52279 2.28058 4.18501 2.80348 3.87203C3.07829 3.70791 3.43325 3.79569 3.59737 4.0705C3.7615 4.34531 3.67371 4.70027 3.3989 4.86439C2.9676 5.12203 2.61646 5.39875 2.29203 5.73272C1.99814 6.06478 1.75959 6.41974 1.57829 6.78615C1.47715 6.99035 1.27295 7.11058 1.05921 7.11058V7.10867ZM5.74241 3.48844C5.5573 3.48844 5.376 3.39875 5.26341 3.23462C5.08402 2.97126 5.15272 2.61058 5.41608 2.43119C5.91035 2.09531 6.37409 1.70409 6.8302 1.23653C7.11837 0.942639 7.42753 0.692639 7.75005 0.490349C8.02104 0.320501 8.37791 0.402563 8.54776 0.673555C8.7176 0.944547 8.63554 1.30142 8.36455 1.47126C8.11837 1.62584 7.88173 1.81859 7.65844 2.0476C7.14699 2.5705 6.626 3.00943 6.06684 3.3892C5.9676 3.456 5.85501 3.48844 5.74241 3.48844ZM13.3836 2.87584C13.2081 2.87584 13.0344 2.79569 12.9218 2.64493C12.3626 1.90447 11.6088 1.36821 10.7997 1.13348C10.4924 1.04569 10.3149 0.725082 10.4046 0.41783C10.4924 0.110578 10.813 -0.0669031 11.1203 0.0227915C12.1699 0.324318 13.1375 1.00943 13.8455 1.94836C14.0382 2.20409 13.9867 2.56668 13.731 2.75752C13.626 2.83577 13.5039 2.87394 13.3836 2.87394V2.87584ZM7.58211 3.23653C5.89318 4.96363 4.72905 4.89302 3.51913 6.14111C0.15081 9.90638 5.57447 14.9884 9.11073 11.3816C10.1947 10.2194 9.8302 9.38157 11.6489 7.52279C14.5268 4.58004 10.4657 0.289967 7.58402 3.23653H7.58211ZM7.54585 10.5075C6.75386 11.3167 5.45615 11.332 4.64699 10.54C3.83783 9.74798 3.82257 8.45027 4.61455 7.64111C5.40654 6.83195 6.70424 6.81668 7.51341 7.60867C8.32257 8.40065 8.33783 9.69836 7.54585 10.5075ZM10.6928 5.81478C10.2271 6.28997 9.4657 6.2976 8.9905 5.83386C8.51531 5.36821 8.50768 4.60676 8.97142 4.13157C9.43707 3.65638 10.1985 3.64875 10.6737 4.11249C11.1489 4.57813 11.1565 5.33959 10.6928 5.81478V5.81478Z" />
	)
}

export default IconOrganism
