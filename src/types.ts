export interface Patient {
  createdAt: Date;
  name: string;
  avatar: string;
  description: string;
  website: string;
  id: string;
}

// Response example:
// {
//     "createdAt": "2023-03-06T06:08:10.190Z",
//     "name": "Darrel Schultz",
//     "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/669.jpg",
//     "description": "edtessdsa esta 4",
//     "website": "http://hot-weasel.net",
//     "id": "20"
//   },
