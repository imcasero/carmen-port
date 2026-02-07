import React from "react";
import Name from "./Name/Name";

export const Home: React.FC = () => {
	return (
		<section className="w-full min-h-screen flex items-center justify-center bg-gray-50">
			{/* Airport Tray Container */}
			<div className="relative w-full h-screen max-h-screen">
				{/* Tray Background - fills the entire screen */}
				<img
					src="/src/assets/sections/tray.png"
					alt="Airport tray"
					className="absolute inset-0 w-full h-full object-contain"
				/>

				{/* Objects on the tray - positioned absolutely within tray bounds */}
				<div className="absolute inset-[8%] flex items-center justify-center">
					{/* Kindle - Top left */}
					<img
						src="/src/assets/sections/kindle.png"
						alt="Kindle"
						className="absolute top-[15%] left-[5%] w-[35%] h-auto object-contain"
					/>
					{/* Matcha - Bottom left */}
					<img
						src="/src/assets/sections/matcha.png"
						alt="Matcha"
						className="absolute bottom-[12%] left-[12%] w-[30%] h-auto object-contain"
					/>

					{/* Sunglasses - Left Bottom */}
					<img
						src="/src/assets/sections/sunglasses.png"
						alt="Sunglasses"
						className="absolute bottom-[10%] left-[30%] w-[28%] h-auto object-contain -rotate-90"
					/>
					{/* Macbook closed - Bottom rigth */}
					<img
						src="/src/assets/sections/macbookclose.png"
						alt="Macbook"
						className="absolute top-[38%] right-[5%] w-[50%] h-auto object-contain"
					/>
					{/* Camera - top right */}
					<img
						src="/src/assets/sections/redcam.png"
						alt="Camera"
						className="absolute top-[20%] right-[5%] w-[25%] h-auto object-contain -rotate-90"
					/>
					{/* Airpods - Below camera */}
					<img
						src="/src/assets/sections/airpods.png"
						alt="Airpods"
						className="absolute top-[39%] right-[25%] w-[15%] h-auto object-contain rotate-0"
					/>
					{/* Polaroid - Top center */}
					<img
						src="/src/assets/sections/polaroid.png"
						alt="Polaroid"
						className="absolute top-[20%] right-[30%] w-auto h-[25%] object-contain rotate-90"
					/>

					{/* Name "CARMEN" - center - left */}
					<div className="w-[27%] left-[26%] z-10">
						<Name />
					</div>
				</div>
			</div>
		</section>
	);
};
