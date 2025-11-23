// src/entities/project/model/types.ts

/**
 * Entity: Project
 * Ini adalah representasi data murni dari sebuah Project.
 * Tidak ada hubungannya dengan UI/React.
 */
export default interface IProject {
  id: string | number;
  title: string;
  description: string;
  imageUrl: string;
  tags?: string[]; 
  projectUrl?: string;
  githubUrl?: string;
}

