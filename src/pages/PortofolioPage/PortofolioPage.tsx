import  ProjectCard  from '../../entities/Project/ui/PortfolioCard';
import type IProject  from '../../entities/Project/model/types';
import LogoKalem from '../../feature/profile/assets/adaptive_logo_kalem_2.png'
import ScannoProjectImge from '../../feature/profile/assets/scanno-project.png'

const projects: IProject[] = [
    {
        id: 1,
        title: "Kalem App",
        description: "Aplikasi Website meditasi yang membantu pengguna untuk relaksasi dan fokus, tersedia di play store dan web. ",
        imageUrl: LogoKalem,
        projectUrl: "https://kalem.studio"
    },
    {
        id: 2,
        title: "Scanno",
        description: "Aplikasi scan catatan yang memungkinkan pengguna untuk memindai catatan tulis menjadi digital mengguankan teknologi OCR ",
        imageUrl: ScannoProjectImge,
        projectUrl: "https://github.com/RidhoFahrizal/scanno-be-laravel.git"
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
                    className='border-0.5 border-gray-100 shadow-sm'
                    actionSlot={
                        
                        <button className="cursor-pointer bg-blue-500 text-white px-3 py-1 rounded text-sm">
                            Lihat Project 
                        </button>
                    }

                    onClick={() => window.open(proj.projectUrl, '_blank')}

                />
            ))}
        </div>
        </div>
    );
};

export default ProjectList;