import { useCallback, useMemo} from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBack = () => {
    
    const options = useMemo(() => {

        return {
            background: {
                color: "#d1fae5"
            },
            fullScreen: {
                enable: true,
                zIndex: -1
            },
            interactivity: {
                events: {
                    onClick: {
                        enable: false,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                },
                modes: {
                    push: {
                        quantity: 5,
                    },
                    repulse: {
                        distance: 200,
                    },
                },
            },
            particles: {
                number: {
                    value: 40, // Cantidad de partículas
                    density: {
                        enable: false,
                        value_area: 800 // Densidad de partículas
                    }
                },
                shape: {
                    type: "image",
                    images: [
                    {
                        src: "https://cdn.icon-icons.com/icons2/238/PNG/256/Brasil_26450.png",
                        width: 400, // Ancho de la imagen
                        height: 400 // Alto de la imagen
                    },
                    {
                        src: "https://vectorflags.s3.amazonaws.com/flags/bo-sphere-01.png",
                        width: 400, // Ancho de la imagen
                        height: 400 // Alto de la imagen
                    }
                ],
                    
                },
                size: {
                    value: 20 // Tamaño de las partículas
                },
                links: {
                    enable: true,
                    color: "#172554", // Color de las líneas de conexión entre partículas
                    distance: 200 // Distancia máxima de la línea
                },
                move: {
                    enable: true,
                    speed: { min: 1, max: 5 },
                },
                opacity: {
                    value: { min: 0.6, max: 0.9 }
                },
                color: {
                    value: "#ffffff" // Color de las partículas
                }
            }
        };
    }, []);
    

    const particlesInit = useCallback(async (engine: any) => {
        await loadSlim(engine);
    }, []);



    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={options}
        />
    );

}
export default ParticlesBack;