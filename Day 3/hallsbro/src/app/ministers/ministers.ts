import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Minister {
  name: string;
  role: string;
  constituency: string;
  portfolios: string[];
  image: string;
  hasImageError?: boolean;
}

@Component({
  selector: 'app-ministers',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ministers.html',
  styleUrl: './ministers.css'
})
export class MinistersComponent {
  searchTerm: string = '';
  
  // 5 Active cabinet members of the Government of Kerala
  cabinetList: Minister[] = [
    {
      name: 'Shri. Pinarayi Vijayan',
      role: 'Chief Minister',
      constituency: 'Dharmadam',
      portfolios: ['General Administration', 'Home Affairs', 'Information Technology', 'Vigilance'],
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Pinarayi_Vijayan_Official.jpg'
    },
    {
      name: 'Shri. K. Rajan',
      role: 'Minister for Revenue',
      constituency: 'Ollur',
      portfolios: ['Revenue', 'Land Revenue', 'Housing'],
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/K._Rajan_Minister.jpg'
    },
    {
      name: 'Shri. P. A. Mohamed Riyas',
      role: 'Minister for Public Works & Tourism',
      constituency: 'Beypore',
      portfolios: ['Public Works Department (PWD)', 'Tourism'],
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/10/P._A._Mohamed_Riyas_Official.jpg'
    },
    {
      name: 'Prof. R. Bindu',
      role: 'Minister for Higher Education',
      constituency: 'Irinjalakuda',
      portfolios: ['Higher Education', 'Technical Education', 'Universities'],
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Dr._R._Bindu_Official.jpg'
    },
    {
      name: 'Shri. K. N. Balagopal',
      role: 'Minister for Finance',
      constituency: 'Kottarakkara',
      portfolios: ['Finance', 'National Savings', 'State Lotteries', 'Treasuries'],
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/K_N_Balagopal.jpg'
    }
  ];

  get filteredCabinetList() {
    if (!this.searchTerm.trim()) {
      return this.cabinetList;
    }
    const term = this.searchTerm.toLowerCase().trim();
    return this.cabinetList.filter(m => 
      m.name.toLowerCase().includes(term) || 
      m.role.toLowerCase().includes(term) || 
      m.constituency.toLowerCase().includes(term) ||
      m.portfolios.some(p => p.toLowerCase().includes(term))
    );
  }

  onImageError(event: any, minister: any) {
    minister.hasImageError = true;
  }

  getInitials(name: string): string {
    const clean = name.replace(/^(Shri\.|Smt\.|Prof\.|Dr\.)\s+/, '').trim();
    const words = clean.split(/[\s.]+/).filter(w => w.length > 0);
    if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
    return words[0] ? words[0].substring(0, 2).toUpperCase() : 'KM';
  }
}