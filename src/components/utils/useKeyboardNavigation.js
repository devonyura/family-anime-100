import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useKeyboardNavigation = (staticRoutes = {}, dynamicRoutes = () => ({})) => {
	const navigate = useNavigate();

	useEffect(() => {
		const handleKeyPress = (event) => {
			const key = event.key;
			const dynamicKeys = dynamicRoutes(); // Dapatkan data dinamis setiap kali tombol ditekan
			const allRoutes = { ...staticRoutes, ...dynamicKeys };

			if (allRoutes[key]) {
				navigate(allRoutes[key]);
			}
		};

		window.addEventListener("keydown", handleKeyPress);
		return () => {
			window.removeEventListener("keydown", handleKeyPress);
		};
	}, [navigate, staticRoutes, dynamicRoutes]);
};


export default useKeyboardNavigation;