import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
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
  imports: [RouterModule, FormsModule],
  templateUrl: './ministers.html',
  styleUrl: './ministers.css'
})
export class MinistersComponent {
  searchTerm: string = '';

  // 10 Elected cabinet members of the Government of Kerala in 2026 (UDF Administration)
  cabinetList: Minister[] = [
    {
      name: 'Shri. V. D. Satheesan',
      role: 'Chief Minister',
      constituency: 'Paravur',
      portfolios: ['General Administration', 'Finance', 'Law', 'Ports', 'Planning & Economic Affairs', 'Science & Technology'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXDW1fbldy4FpZhTs85EYlOi6jjZYpy45rkw&s'
    },
    {
      name: 'Shri. Ramesh Chennithala',
      role: 'Minister for Home Affairs',
      constituency: 'Haripad',
      portfolios: ['Home Department', 'Vigilance'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrq1MbTSW1V6Yqt98mzcxFuulWVXDhuoIUjg&s'
    },
    {
      name: 'Shri. P. K. Kunhalikutty',
      role: 'Minister for Industries & IT',
      constituency: 'Vengara',
      portfolios: ['Industries & Commerce', 'Information Technology', 'Artificial Intelligence', 'Startups', 'Mining & Geology'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSANIhCRLUfYP6SyQDM89tGafzjLE_Y6PVHWw&s'
    },
    {
      name: 'Shri. K. Muraleedharan',
      role: 'Minister for Health & Devaswom',
      constituency: 'Vattiyoorkavu',
      portfolios: ['Health & Family Welfare', 'Devaswom'],
      image: 'https://health.kerala.gov.in/assets/backend/uploads/bod/bod2205202605:40:11.jpg'
    },
    {
      name: 'Shri. A. P. Anil Kumar',
      role: 'Minister for Revenue',
      constituency: 'Wandoor',
      portfolios: ['Revenue', 'Land Revenue', 'Housing'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo1ubn-SYcgTxC9EumTeN3XcU5nrlKjhrVsA&s'
    },
    {
      name: 'Shri. P. C. Vishnunadh',
      role: 'Minister for Tourism & Culture',
      constituency: 'Kundara',
      portfolios: ['Tourism', 'Culture', 'Film Development'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPryqCWZQG7ZRrFq1sT47U4A4r_4hRTh3Yeg&s'
    },
    {
      name: 'Shri. Roji M. John',
      role: 'Minister for Higher Education',
      constituency: 'Angamaly',
      portfolios: ['Higher Education', 'Collegiate Education', 'Technical Education', 'Universities'],
      image: 'https://pbs.twimg.com/profile_images/1564303109681463296/rtUBM9vi_400x400.jpg'
    },
    {
      name: 'Shri. T. Siddique',
      role: 'Minister for Agriculture',
      constituency: 'Kalpetta',
      portfolios: ['Agriculture', 'Soil Survey & Soil Conservation'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu3nH29rEaC6RwYF4LiYvtGpC_GB_C2japDQ&s'
    },
    {
      name: 'Shri. Anoop Jacob',
      role: 'Minister for Food & Civil Supplies',
      constituency: 'Piravom',
      portfolios: ['Food & Civil Supplies', 'Consumer Affairs', 'Legal Metrology'],
      image: 'https://prsindia.org/files/mlatrack/kerala/15/mla_images/Anoop%20Jacob.jpg'
    }
  ];

  onImageError(event: any, minister: Minister) {
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

  get filteredCabinetList(): Minister[] {
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

  getOriginalIndex(minister: Minister): number {
    return this.cabinetList.indexOf(minister);
  }
}
export { MinistersComponent as Ministers };