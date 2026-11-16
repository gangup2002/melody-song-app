const audio = (n) => `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${n}.mp3`;
export const songs = [
  { id:'1', title:'Golden Hour', artist:'JVKE', album:'this is what ____ feels like', genre:'Pop', duration:210, cover:'https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=700', audioUrl:audio(1), color:'#E8B6D0' },
  { id:'2', title:'Sweet Disposition', artist:'The Temper Trap', album:'Conditions', genre:'Indie', duration:215, cover:'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=700', audioUrl:audio(2), color:'#C9B5F4' },
  { id:'3', title:'Pink + White', artist:'Frank Ocean', album:'Blonde', genre:'R&B', duration:184, cover:'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=700', audioUrl:audio(3), color:'#F4B8C9' },
  { id:'4', title:'Space Song', artist:'Beach House', album:'Depression Cherry', genre:'Indie', duration:320, cover:'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=700', audioUrl:audio(4), color:'#BDB5EF' },
  { id:'5', title:'Sunflower', artist:'Rex Orange County', album:'Apricot Princess', genre:'Pop', duration:190, cover:'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=700', audioUrl:audio(5), color:'#F1C3A7' },
  { id:'6', title:'Coffee Breath', artist:'Sofia Mills', album:'Coffee Breath', genre:'Lo-fi', duration:156, cover:'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=700', audioUrl:audio(6), color:'#D5C4B2' },
  { id:'7', title:'Dreams', artist:'Fleetwood Mac', album:'Rumours', genre:'Rock', duration:257, cover:'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=700', audioUrl:audio(7), color:'#C5D8C4' },
  { id:'8', title:'Moon Song', artist:'Phoebe Bridgers', album:'Punisher', genre:'Indie', duration:270, cover:'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=700', audioUrl:audio(8), color:'#B9C7E8' },
  { id:'9', title:'Best Part', artist:'Daniel Caesar ft. H.E.R.', album:'Freudian', genre:'R&B', duration:209, cover:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700', audioUrl:audio(9), color:'#F0C4C9' },
  { id:'10', title:'Clair de Lune', artist:'Claude Debussy', album:'Classical Favourites', genre:'Classical', duration:300, cover:'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=700', audioUrl:audio(10), color:'#C7C1EF' },
  { id:'11', title:'Until I Found You', artist:'Stephen Sanchez', album:'Easy On My Eyes', genre:'Pop', duration:177, cover:'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=700', audioUrl:audio(11), color:'#E8C2A8' },
  { id:'12', title:'Get You', artist:'Daniel Caesar', album:'Freudian', genre:'R&B', duration:278, cover:'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=700', audioUrl:audio(12), color:'#B7D0D2' },
  { id:'13', title:'The Night We Met', artist:'Lord Huron', album:'Strange Trails', genre:'Indie', duration:208, cover:'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=700', audioUrl:audio(13), color:'#B7B6D9' },
  { id:'14', title:'Lover', artist:'Taylor Swift', album:'Lover', genre:'Pop', duration:221, cover:'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=700', audioUrl:audio(14), color:'#F4B7D2' },
  { id:'15', title:'A Walk', artist:'Tycho', album:'Dive', genre:'Lo-fi', duration:315, cover:'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=700', audioUrl:audio(15), color:'#C3D4E8' }
];
export const genres = ['All', 'Pop', 'Indie', 'R&B', 'Rock', 'Lo-fi', 'Classical'];