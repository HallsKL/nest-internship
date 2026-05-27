import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

interface Minister {
  name: string;
  role: string;
  constituency: string;
  portfolios: string[];
  image: string;
  biography: string;
  actionItems: string[];
  hasImageError?: boolean;
}

@Component({
  selector: 'app-minister-detail',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './minister-detail.html',
  styleUrl: './minister-detail.css'
})
export class MinisterDetailComponent implements OnInit {
  minister: Minister | null = null;

  cabinetList: Minister[] = [
    {
      name: 'Shri. V. D. Satheesan',
      role: 'Chief Minister',
      constituency: 'Paravur',
      portfolios: ['General Administration', 'Finance', 'Law', 'Ports', 'Planning & Economic Affairs', 'Science & Technology'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXDW1fbldy4FpZhTs85EYlOi6jjZYpy45rkw&s',
      biography: 'Shri V.D. Satheesan is a prominent leader of the Indian National Congress and the 13th Chief Minister of Kerala. Born in Nettoor, Kochi, he completed his education in law and has been representing the Paravur constituency since 2001. Known for his stellar opposition leadership and administrative acumen, his 2026 administration focuses on financial reform, digital governance, AI infrastructure, and ecological protection.',
      actionItems: [
        'Establish regional state AI governance hubs and high-speed networks.',
        'Streamline state fiscal auditing with direct automated transparency logs.',
        'Initiate the green ports modernization scheme at Vizhinjam and regional docks.',
        'Enforce ecological protection regulations in flood-vulnerable coastal corridors.'
      ]
    },
    {
      name: 'Shri. Ramesh Chennithala',
      role: 'Minister for Home Affairs',
      constituency: 'Haripad',
      portfolios: ['Home Department', 'Vigilance'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrq1MbTSW1V6Yqt98mzcxFuulWVXDhuoIUjg&s',
      biography: 'Shri Ramesh Chennithala is one of the most senior political figures in Kerala. Representing the Haripad constituency, he has previously served as the state Home Minister, Opposition Leader, and member of both Lok Sabha and Rajya Sabha. His 2026 home department initiative focuses on absolute transparency, modernizing the state police force, digital vigilance, and advanced community policing metrics.',
      actionItems: [
        'Roll out the cyber vigilance automation initiative across all districts.',
        'Modernize regional police infrastructure with digital report logging.',
        'Introduce the Community Safeguard Cell for high-transparency neighborhood policing.',
        'Enforce zero-tolerance digital vigilance protocols across administrative departments.'
      ]
    },
    {
      name: 'Shri. P. K. Kunhalikutty',
      role: 'Minister for Industries & IT',
      constituency: 'Vengara',
      portfolios: ['Industries & Commerce', 'Information Technology', 'Artificial Intelligence', 'Startups', 'Mining & Geology'],
      image: 'https://www.kbip.org/images/p-k-kunhalikutty.jpg',
      biography: 'Shri P.K. Kunhalikutty is a senior leader of the Indian Union Muslim League (IUML) and an astute administrator. Representing the Vengara constituency, he has held key cabinet portfolios over several decades. Under his 2026 leadership, the industries department is driving an aggressive startup campaign, establishing AI incubation hubs, and promoting green technology sectors across Malabar.',
      actionItems: [
        'Establish five new regional start-up hubs focused on agricultural and maritime technology.',
        'Deploy public cloud resources and incubation centers for AI development.',
        'Reform state mineral mining guidelines with automated geology sensor logs.',
        'Establish direct-to-consumer handloom branding centers to support traditional weavers.'
      ]
    },
    {
      name: 'Shri. K. Muraleedharan',
      role: 'Minister for Health & Devaswom',
      constituency: 'Vattiyoorkavu',
      portfolios: ['Health & Family Welfare', 'Devaswom'],
      image: 'https://health.kerala.gov.in/assets/backend/uploads/bod/bod2205202605:40:11.jpg',
      biography: 'Shri K. Muraleedharan is a veteran leader, former Member of Parliament, and former KPCC President. Representing the Vattiyoorkavu constituency, he is highly respected for his mass appeal and grassroots connection. In his role as Health Minister, he is focusing on decentralizing healthcare services, improving rural hospital facilities, and streamlining state health insurance schemes.',
      actionItems: [
        'Upgrade primary health center diagnostic systems across high-density rural areas.',
        'Streamline state health insurance claim logging with automated verification systems.',
        'Implement modern crowd-management architectures at major Devaswom pilgrim centers.',
        'Expand state-wide wellness campaigns and child nutrition monitoring networks.'
      ]
    },
    {
      name: 'Shri. A. P. Anil Kumar',
      role: 'Minister for Revenue',
      constituency: 'Wandoor',
      portfolios: ['Revenue', 'Land Revenue', 'Housing'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo1ubn-SYcgTxC9EumTeN3XcU5nrlKjhrVsA&s',
      biography: 'Shri A. P. Anil Kumar is a prominent leader representing the Wandoor constituency. He has previously served as a minister for Tourism and Welfare of Scheduled Castes. His 2026 revenue goals focus on complete digitization of land records, launching automated housing allotment systems, and implementing fast-track grievance resolution for land disputes.',
      actionItems: [
        'Complete the 100% digital survey and mapping of land parcels across all districts.',
        'Deploy the unified state housing allotment portal for low-income families.',
        'Establish regional fast-track tribunals for speedy land dispute settlements.',
        'Automate revenue logging to eliminate administrative delays in taluk offices.'
      ]
    },
    {
      name: 'Shri. P. C. Vishnunadh',
      role: 'Minister for Tourism & Culture',
      constituency: 'Kundara',
      portfolios: ['Tourism', 'Culture', 'Film Development'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPryqCWZQG7ZRrFq1sT47U4A4r_4hRTh3Yeg&s',
      biography: 'Shri P. C. Vishnunadh is a dynamic young leader representing the Kundara constituency. Known for his modern approach to governance, he has previously served as the youth congress state president. In the tourism department, he is spearheading green-tourism projects, regional art preservation, and promoting Kerala globally as a premier cultural destination.',
      actionItems: [
        'Launch the "Eco-Kerala" village-tourism project across high-biodiversity sectors.',
        'Establish direct endowment support systems for local heritage artists and folk forms.',
        'Build three new digital media incubators under the Film Development Corporation.',
        'Promote responsible, carbon-neutral tourism destinations across backwater circuits.'
      ]
    },
    {
      name: 'Shri. Roji M. John',
      role: 'Minister for Higher Education',
      constituency: 'Angamaly',
      portfolios: ['Higher Education', 'Collegiate Education', 'Technical Education', 'Universities'],
      image: 'https://pbs.twimg.com/profile_images/1564303109681463296/rtUBM9vi_400x400.jpg',
      biography: 'Shri Roji M. John is a young, energetic leader representing the Angamaly constituency. An alumnus of Jawaharlal Nehru University (JNU), his academic background translates into his visionary education policies. In higher education, he is introducing university syllabus reforms, technical partnerships, and vocational skill initiatives to boost student employment.',
      actionItems: [
        'Implement modern, research-centric syllabus upgrades across all state universities.',
        'Establish direct vocational partnership grids with tech and industrial enterprises.',
        'Deploy direct funding channels for collegiate research projects and innovations.',
        'Promote modern, skill-oriented certifications in state polytechnic institutes.'
      ]
    },
    {
      name: 'Shri. T. Siddique',
      role: 'Minister for Agriculture',
      constituency: 'Kalpetta',
      portfolios: ['Agriculture', 'Soil Survey & Soil Conservation'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu3nH29rEaC6RwYF4LiYvtGpC_GB_C2japDQ&s',
      biography: 'Shri T. Siddique is a popular congress leader representing the Kalpetta constituency in Wayanad. His focus remains closely tied to the welfare of agrarian communities. In the agriculture department, he is driving sustainable farming methods, modernizing soil conservation protocols, and establishing direct-to-market channels for hill farmers.',
      actionItems: [
        'Establish direct-to-market online platforms to eliminate organic farm middlemen.',
        'Deploy micro-irrigation systems and soil sensors in drought-prone upland farms.',
        'Modernize Wayanad tea and coffee cultivation with sustainable organic grids.',
        'Implement advanced crop agriculture insurance payouts linked to local weather data.'
      ]
    },
    
    {
      name: 'Shri. Anoop Jacob',
      role: 'Minister for Food & Civil Supplies',
      constituency: 'Piravom',
      portfolios: ['Food & Civil Supplies', 'Consumer Affairs', 'Legal Metrology'],
      image: 'https://prsindia.org/files/mlatrack/kerala/15/mla_images/Anoop%20Jacob.jpg',
      biography: 'Shri Anoop Jacob is the leader of the Kerala Congress (Jacob) faction, representing the Piravom constituency. He has previously served as the Food & Civil Supplies Minister. His 2026 mission is aimed at stabilizing essential commodity pricing, reinforcing local supply chain networks, and digitizing the public distribution system (PDS).',
      actionItems: [
        'Implement automated price-monitoring dashboards to regulate essential foods.',
        'Digitize PDS ration card accounts with high-security smart identity layers.',
        'Expand the network of direct-supply Maveli supermarkets in rural locations.',
        'Strengthen regional legal metrology checks to prevent consumer metric fraud.'
      ]
    }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam !== null) {
        const id = parseInt(idParam, 10);
        if (!isNaN(id) && id >= 0 && id < this.cabinetList.length) {
          this.minister = this.cabinetList[id];
        } else {
          this.router.navigate(['/minister']);
        }
      } else {
        this.router.navigate(['/minister']);
      }
    });
  }

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
}
