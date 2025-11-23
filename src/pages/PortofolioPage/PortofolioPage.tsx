import  ProjectCard  from '../../entities/Project/ui/PortfolioCard';
import type IProject  from '../../entities/Project/model/types';
import LogoKalem from '../../feature/profile/assets/adaptive_logo_kalem_2.png'

const projects: IProject[] = [
    {
        id: 1,
        title: "Kalem App",
        description: "Aplikasi meditasi berbasis React dan TypeScript.",
        imageUrl: LogoKalem
    },
    {
        id: 2,
        title: "SpaceX Explorer",
        description: "Web untuk melacak peluncuran roket menggunakan SpaceX API.",
        imageUrl: "/assets/spacex.png"
    }
];

export const ProjectList = () => {
    return (
        <div>
        <h1 className='text-base md:text-2xl flex justify-center p-6 font-bold'>
            MY PORTOFOLIO
        </h1>
        <div className="grid justify-items-center grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
            
            {projects.map((proj) => (
                <ProjectCard
                    key={proj.id}
                    project={proj}
                    className='border-2 border-black-50'
                    actionSlot={
                        <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm">
                            Lihat Detail
                        </button>
                    }

                    onClick={() => console.log("Pindah ke detail", proj.id)}
                />
            ))}
        </div>
        </div>
    );
};

export default ProjectList;