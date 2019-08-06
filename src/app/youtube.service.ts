import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  playlist = [
    {id: 'U4xPahDjY6k', song: 'Lil Nas X - Old Town Road (Lyrics) ft. Billy Ray Cyrus'},
    {id: 'hRXv_VU35Lw', song: 'Old Town Road - Walk off the Earth (Lil Nas X, Billy Ray Cyrus Cover)'},
    {id: 'YTQ-n0SgdiY', song: 'Thịnh Suy - Thắc Mắc (MĐX) | Official Music Video'},
    {id: 'vGJTaP6anOU', song: 'Elvis Presley - Can\'t Help Falling In Love (Audio)'},
    {id: 'c86jOkPzsjk', song: '[Vietsub + Lyrics] The One That Got Away - Brielle Von Hugel | Katy Perry | Love Rosie'},
    {id: 'BiKjeXNGCGU', song: 'Chuyện Người Anh Thương | Phạm Nguyên Ngọc | Original'},
    {id: 'cBVGlBWQzuc', song: 'Maroon 5 - Girls Like You ft. Cardi B (Volume 2)'},
    {id: '09R8_2nJtjg', song: 'Maroon 5 - Sugar'},
    {id: 'IPfJnp1guPc', song: 'Khalid - Young Dumb & Broke (Official Music Video)'}
  ];
  constructor() { }
  find(id: string) {
    return this.playlist.find(item => item.id === id);
  }
}
