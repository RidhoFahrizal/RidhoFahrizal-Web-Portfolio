import React from 'react';
import type IProject from '../model/types';

interface ProjectCardProps {
    project: IProject;
    onClick?: () => void; // Opsional: untuk menangani klik kartu
    actionSlot?: React.ReactNode; // OCP: Slot untuk tombol/aksi tambahan
    className?: string; // Agar parent bisa mengatur margin/posisi
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
    project,
    onClick,
    actionSlot,
    className = ''
}) => {
    const { title, description, imageUrl } = project;

    return (
        <div
            onClick={onClick}
            className={`
        max-w-sm rounded overflow-hidden shadow-lg bg-white 
        transition-transform hover:scale-105 cursor-pointer
        flex flex-col h-full
        ${className} 
      `}
        >
            {/* Container Gambar: Aspek Rasio Tetap (Best Practice) */}
            <div className="h-48 w-full overflow-hidden relative bg-gray-200">
                <img
                    className="w-full h-full object-cover"
                    src={imageUrl}
                    alt={title}
                    loading="lazy" // Performance optimization
                />
            </div>

            <div className="px-6 py-4 flex-grow">
                {/* Judul Dinamis (Bukan Hardcoded) */}
                <div className="font-bold text-xl mb-2 text-gray-900">
                    {title}
                </div>

                {/* Deskripsi Dinamis */}
                <p className="text-gray-700 text-base line-clamp-3">
                    {description}
                </p>
            </div>

            {/* OCP MAGIC: Action Slot
          Jika kita butuh tombol "Lihat Detail" atau "Github", 
          kita bisa memasukkannya lewat sini TANPA mengedit file ini.
      */}
            {actionSlot && (
                <div className="px-6 pt-2 pb-4">
                    {actionSlot}
                </div>
            )}
        </div>
    );
}

export default ProjectCard;