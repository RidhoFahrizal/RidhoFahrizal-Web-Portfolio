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
  // Opsional: link, tags, date, dll bisa ditambahkan nanti (Extension)
  tags?: string[]; 
}

