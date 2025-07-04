// const songs = [
//       { title: "Sapphire", artist: "Ed Sheeran", img: "https://i.scdn.co/image/ab67616d00001e024b214cde2f8e1d93a41664fe" },
//       { title: "Shaky", artist: "Sanju Rathod", img: "https://i.scdn.co/image/ab67616d00001e02c52a71704c845f3f0dff6cfc" },
//       { title: "Muththa Mazhai", artist: "A.R. Rahman", img: "https://i.scdn.co/image/ab67616d00001e02eefa1a693a17c36a7eebd9c4" },
//       { title: "0008", artist: "Sidhu Moose Wala", img: "https://i.scdn.co/image/ab67616d00001e0239f5f514451c9472392c238b" }
//     ];

//     const artists = [
//       { name: "Pritam", img: "https://i.scdn.co/image/ab67616100005174a81baf5b2242e618dd2be1c2" },
//       { name: "A.R. Rahman", img: "https://i.scdn.co/image/ab67616100005174461e5a2e2ad693c12a16c551" },
//       { name: "Arijit Singh", img: "https://i.scdn.co/image/ab67616100005174f7f4c7123e775e4ce678d5f2" },
//       { name: "Sachin-Jigar", img: "https://i.scdn.co/image/ab67616100005174c6c28f3e2e14c79aa1fcf45b" }
//     ];

//     const trendingContainer = document.getElementById('trending-songs');
//     songs.forEach(song => {
//       trendingContainer.innerHTML += `
//         <div class="card">
//           <img src="${song.img}" alt="${song.title}" />
//           <p>${song.title}</p>
//           <p style="color: #888">${song.artist}</p>
//         </div>
//       `;
//     });

//     const artistContainer = document.getElementById('popular-artists');
//     artists.forEach(artist => {
//       artistContainer.innerHTML += `
//         <div class="artist">
//           <img src="${artist.img}" alt="${artist.name}" />
//           <p>${artist.name}</p>
//         </div>
//       `;
//     });